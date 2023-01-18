import { readUsersDB } from "../../../backendLibs/dbLib";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export default function loginRoute(req, res) {
  if (req.method === "POST") {
    const { username, password } = req.body;
    //validate body
    if (
      typeof username !== "string" ||
      username.length === 0 ||
      typeof password !== "string" ||
      password.length === 0
    )
      return res
        .status(400)
        .json({ ok: false, message: "Username or password cannot be empty" });

    const users = readUsersDB();
    //find user with username & password
    const foundUser = users.find(
      (x) => x.username === username && bcrypt.compareSync(password, x.password)
    );
    if (!foundUser)
      return res
        .status(400)
        .json({ ok: false, message: "Invalid Username or Password" });

    // return res.status(400).json({ ok: false, message: "Invalid Username or Password" });

    const secret = process.env.JWT_SECRET;
    const token = jwt.sign(
      {
        username: foundUser.username,
        isAdmin: foundUser.isAdmin,
      },
      secret,
      { expiresIn: "1800s" } //30mins
    );

    return res.json({
      ok: true,
      id: foundUser.id,
      username: foundUser.username,
      name: foundUser.name,
      Lname: foundUser.Lname,
      email: foundUser.email,
      isAdmin: foundUser.isAdmin,
      token,
    });

    //create token and return response
  } else {
    return res.status(400).json({ ok: false, message: "Invalid HTTP Method" });
  }
}
