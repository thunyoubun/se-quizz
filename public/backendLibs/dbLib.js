import fs from "fs";

export function readQuizzDB() {
  const str = fs.readFileSync("public/db/quiz.json", {
    encoding: "utf-8",
  });
  const quizz = JSON.parse(str);
  return quizz;
}

export function writeQuizzDB(quizz) {
  const str = JSON.stringify(quizz);
  fs.writeFileSync("public/db/quiz.json", str, { encoding: "utf-8" });
}

export function readUsersDB() {
  const str = fs.readFileSync("public/db/users.json", {
    encoding: "utf-8",
  });
  const users = JSON.parse(str);
  return users;
}

export function writeUsersDB(users) {
  const str = JSON.stringify(users);
  fs.writeFileSync("public/db/users.json", str, { encoding: "utf-8" });
}
