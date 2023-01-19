import { readUsersDB, writeUsersDB } from "../../../backendLibs/dbLib";
import bcrypt from "bcrypt";

export default function userRegisterRoute(req: any, res: any) {
  if (req.method === "POST") {
    const { username, email, password, isAdmin } = req.body;

    //validate body
    if (
      typeof username !== "string" ||
      username.length === 0 ||
      typeof email !== "string" ||
      email.length === 0 ||
      typeof password !== "string" ||
      password.length === 0 ||
      typeof isAdmin !== "boolean"
    )
      return res
        .status(400)
        .json({ ok: false, message: "Invalid request body" });

    const regex = /^\S+@\S+\.\S+$/;
    if (typeof email !== "string" || regex.test(email) === false) {
      return res
        .status(400)
        .json({ ok: false, message: "Please insert email correctly" });
    } else if (
      typeof password !== "string" ||
      password.length < 6 ||
      password.length > 12
    ) {
      return res.status(400).json({
        ok: false,
        message: "Password must contain 6 - 12 characters",
      });
    }
    //check if username and email are already in database
    const users = readUsersDB();
    const foundUser = users.find(
      (x: any) => x.username === username || x.email === email
    );
    if (foundUser)
      return res
        .status(400)
        .json({ ok: false, message: "Username is already taken" });

    const foundEmail = users.find((x: any) => x.email === email);
    if (foundEmail)
      return res
        .status(400)
        .json({ ok: false, message: "Email is already used" });

    //get last index of users
    const index = (users.length + 1).toString();
    //send username back when successfully registered
    const newUser = {
      id: index,
      name: "Guest" + index,
      username,
      email,
      password: bcrypt.hashSync(password, 12),
      isAdmin,
    };

    //create new user and add in db
    users.push(newUser);
    writeUsersDB(users);

    //return response
    return res.json({ ok: true, username, email, isAdmin });
  } else {
    return res.status(404).json({
      ok: false,
      message: "Invalid HTTP Method",
    });
  }
}
