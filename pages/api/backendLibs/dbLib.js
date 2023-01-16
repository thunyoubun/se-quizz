import fs from "fs";
import path from "path";
export function readQuizzDB() {
  const file = path.join(process.cwd(), "public/db", "quiz.json");
  const str = fs.readFileSync(file, {
    encoding: "utf-8",
  });
  const quizz = JSON.parse(str);
  return quizz;
}

export function writeQuizzDB(quizz) {
  const str = JSON.stringify(quizz);
  const file = path.join(process.cwd(), "public/db", "quiz.json");
  fs.writeFileSync(file, str, { encoding: "utf-8" });
}

export function readUsersDB() {
  const file = path.join(process.cwd(), "public/db", "user.json");
  const str = fs.readFileSync(file, {
    encoding: "utf-8",
  });
  const users = JSON.parse(str);
  return users;
}

export function writeUsersDB(users) {
  const str = JSON.stringify(users);
  const file = path.join(process.cwd(), "public/db", "user.json");
  fs.writeFileSync(file, str, { encoding: "utf-8" });
}
