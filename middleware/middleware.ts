import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { verifyAuth } from "../contexts/auth";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("cmu-oauth-example-token")?.value;

  const verifiedToken =
    token &&
    (await verifyAuth(token).catch((err: any) => {
      console.error(err.message);
    }));

  if (req.nextUrl.pathname.startsWith("/") && !verifiedToken) {
    return;
  }

  const url = req.url;

  if (
    url.includes(`${process.env.NEXT_PUBLIC_CMU_OAUTH_URL}`) &&
    verifiedToken
  ) {
    return NextResponse.redirect(new URL("/pages/myquizz", req.url));
  }
}
