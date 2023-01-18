import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')

      id: "credentials",

      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const payload = {
          username: credentials.email,
          password: credentials.password,
        };
        const url = process.env.NEXTAUTH_URL;

        const res = await fetch(url + "api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const user = await res.json();
        console.log("userPrint :", user);
        if (!res.ok) {
          throw new Error(user.message);
        }

        if (res.ok) {
          return user;
        }

        return null;
      },
    }),
  ],
  secret: process.env.JWT_SECRET,
  pages: { signIn: "/auth/signin", signOut: "/" },

  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          ...user,
          username: user.username,
          image: user.image,
          accessToken: user.token,
          refreshToken: user.refreshToken,
        };
      }
      console.log("token = ", token);
      return token;
    },

    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.user.id = token.sub;
      session.user.username = token.username;
      session.user.Lname = token.Lname;
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.accessTokenExpires = token.accessTokenExpires;

      console.log("session = ", session);
      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
});
