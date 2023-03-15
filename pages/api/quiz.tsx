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

    const newQuiz = {
      id: req.body.id,
      title: req.body.title,
      auth: req.body.auth,
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
