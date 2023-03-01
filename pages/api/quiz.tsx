import { readQuizzDB, writeQuizzDB } from "../../backendLibs/dbLib";
import { v4 as uuidv4 } from "uuid";
import { checkToken } from "../../backendLibs/checkToken";

export default function QuizzRoute(req: any, res: any) {
  if (req.method === "GET") {
    //get quiz of that user
    const quiz = readQuizzDB();
    const user = checkToken(req);
    if (!user) {
      return res.status(403).json({
        ok: false,
        message: "You do not have permission",
      });
    }

    const findQuiz = quiz.filter(
      (x: any) => x.auth === user.firstName + " " + user.lastName
    );

    return res.json({
      ok: true,
      findQuiz,
    });
  } else if (req.method === "POST") {
    const quiz = readQuizzDB();

    if (
      typeof req.body.title !== "string" ||
      req.body.title.length === 0 ||
      typeof req.body.category !== "string" ||
      req.body.category.length === 0 ||
      req.body.file.length === 0
      /* ||
      typeof req.body.status !== "boolean" */
    )
      return res.status(400).json({ ok: false, message: "Invalid Quiz Data" });

    const newQuiz = {
      id: uuidv4(),
      title: req.body.title,
      category: req.body.category,
      auth: req.body.auth,
      file: req.body.file,
      date: req.body.date,
      status: req.body.status,
    };

    quiz.push(newQuiz);
    writeQuizzDB(quiz);

    return res.json({ ok: true, quiz: newQuiz });
  } else {
    return res.status(404).json({
      ok: false,
      message: "Invalid HTTP Method",
    });
  }
}
