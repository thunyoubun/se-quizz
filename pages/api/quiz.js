import { readQuizzDB, writeQuizzDB } from "../../backendLibs/dbLib";
import { v4 as uuidv4 } from "uuid";

export default function QuizzRoute(req, res) {
  if (req.method === "GET") {
    //get quizz of that user
    const quiz = readQuizzDB();

    return res.json({
      ok: true,
      quiz,
    });
  } else if (req.method === "POST") {
    const quiz = readQuizzDB();

    if (
      typeof req.body.subject !== "string" ||
      req.body.subject.length === 0 ||
      typeof req.body.completed !== "boolean"
    )
      return res.status(400).json({ ok: false, message: "Invalid Quiz Data" });

    const newQuiz = {
      id: uuidv4(),
      subject: req.body.subject,
      auth: req.body.auth,
      date: req.body.date,
      completed: req.body.completed,
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
