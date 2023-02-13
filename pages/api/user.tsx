import { checkToken } from "../../backendLibs/checkToken";
import { readUsersDB, writeUsersDB } from "../../backendLibs/dbLib";

export default function depositRoute(req: any, res: any) {
  if (req.method === "GET") {
    //get quizz of that user
    const user = checkToken(req);
    if (!user) {
      return res.status(403).json({
        ok: false,
        message: "You do not have permission",
      });
    }
    const users = readUsersDB();
    //find user in DB and get their money value
    const foundUser = users.find((x: any) => x.cmuAccount === user.cmuAccount);
    if (!foundUser)
      return res.status(400).json({ ok: false, message: "User not found" });

    return res.json({
      ok: true,
      user: foundUser,
    });
  }
  if (req.method === "PUT") {
    //check authentication
    const user = checkToken(req);
    if (!user) {
      return res.status(403).json({
        ok: false,
        message: "You do not have permission to edit",
      });
    }
    // return res.status(403).json({ ok: false, message: "You do not have permission to deposit" });

    const name = req.body.name;
    const Lname = req.body.Lname;
    //validate body
    if (
      typeof name !== "string" &&
      name.charAt(0).toUpperCase() === name.charAt(0)
    )
      return res.status(400).json({ ok: false, message: "Invalid name" });
    if (
      typeof Lname !== "string" &&
      Lname.charAt(0).toUpperCase() === Lname.charAt(0)
    )
      return res.status(400).json({ ok: false, message: "Invalid last name" });

    console.log(name);

    //find and update name , Lname in DB
    const users = readUsersDB();
    const userIdx = users.findIndex((x: any) => x.cmuAccount === user.token);
    const userd = users[userIdx];
    userd.name = name;
    userd.Lname = Lname;
    users[userIdx] = userd;
    console.log("newData = ", users[userIdx]);

    writeUsersDB(users);

    //return response
    return res.json({
      ok: true,
      name: users[userIdx].name,
      Lname: users[userIdx].Lname,
    });
  } else {
    return res.status(400).json({ ok: false, message: "Invalid HTTP Method" });
  }
}
