import { checkToken } from "../../../backendLibs/checkToken";
import { readUsersDB, writeUsersDB } from "../../../backendLibs/dbLib";

export default function quizIdRoute(req: any, res: any) {
  if (req.method === "DELETE") {
    const quiz = readUsersDB();
    const id = req.query.id;

    const quizIdx = quiz.findIndex((x: any) => x.id === id);
    if (quizIdx === -1)
      return res
        .status(404)
        .json({ ok: false, message: "User ID does not exist" });

    quiz.splice(quizIdx, 1);
    writeUsersDB(quiz);

    return res.json({ ok: true, id });
  } else if (req.method === "PUT") {
    const user = checkToken(req);
    if (!user) {
      return res.status(403).json({
        ok: false,
        message: "You do not have permission to deposit",
      });
    }
    const id = req.query.id;

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

    //find and update name , Lname in DB
    const users = readUsersDB();
    const userIdx = users.findIndex((x: any) => x.username === user.username);
    const userd = users[userIdx];
    userd.name = name;
    userd.Lname = Lname;
    users[userIdx] = userd;

    writeUsersDB(users);

    //return response
    return res.json({
      ok: true,
      name: users[userIdx].name,
      Lname: users[userIdx].Lname,
    });
  }
}
