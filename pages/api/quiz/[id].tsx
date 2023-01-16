import { readQuizzDB, writeQuizzDB } from "../backendLibs/dbLib";

export default function quizIdRoute(req: any, res: any) {
  if (req.method === "DELETE") {
    const quiz = readQuizzDB();
    const id = req.query.id;

    const quizIdx = quiz.findIndex((x: any) => x.id === id);
    if (quizIdx === -1)
      return res
        .status(404)
        .json({ ok: false, message: "Quiz ID does not exist" });

    quiz.splice(quizIdx, 1);
    writeQuizzDB(quiz);

    return res.json({ ok: true, id });
  } else if (req.method === "PUT") {
    const quiz = readQuizzDB();
    const id = req.query.id;

    //validate body
    if (typeof req.body.completed !== "boolean")
      return res.status(400).json({ ok: false, message: "Invalid Input" });

    const quizIdx = quiz.findIndex((x: any) => x.id === id);
    if (quizIdx === -1)
      return res
        .status(404)
        .json({ ok: false, message: "Quiz ID does not exist" });

    quiz[quizIdx].completed = req.body.completed;
    writeQuizzDB(quiz);
    return res.json({ ok: true, quiz: quiz[quizIdx] });
  }
}
