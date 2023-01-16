import fs from "fs";
import path from "path";
export function readQuizzDB() {
  const file = path.join(process.cwd(), "db", "quiz.json");
  const str = fs.readFileSync(file, {
    encoding: "utf-8",
  });
  const quizz = JSON.parse(str);
  return quizz;
}

export function writeQuizzDB(quizz) {
  const str = JSON.stringify(quizz);
  const file = path.join(process.cwd(), "db", "quiz.json");
  fs.writeFileSync(file, str, { encoding: "utf-8" });
}

export function readUsersDB() {
  const str = fs.readFileSync("db/users.json", {
    encoding: "utf-8",
  });
  const users = JSON.parse(str);
  return users;
}

export function writeUsersDB(users) {
  const str = JSON.stringify(users);
  fs.writeFileSync("db/users.json", str, { encoding: "utf-8" });
}
