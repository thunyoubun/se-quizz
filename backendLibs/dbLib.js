import fs from "fs";
import path from "path";
export function readQuizzDB() {
  if (process.env.NODE_ENV === "development") {
    const str = fs.readFileSync("db/quiz.json", {
      encoding: "utf-8",
    });
    const quiz = JSON.parse(str);
    return quiz;
    //read db from memory if run on vercel
  } else if (process.env.NODE_ENV === "production") {
    return quizz;
  }
}

export function writeQuizzDB(_quizz) {
  if (process.env.NODE_ENV === "development") {
    const str = JSON.stringify(_quizz);
    fs.writeFileSync("db/quiz.json", str, { encoding: "utf-8" });
    //read db from memory if run on vercel
  } else if (process.env.NODE_ENV === "production") {
    users = _quizz;
  }
}

export function readUsersDB() {
  //read db from text file if run on local
  if (process.env.NODE_ENV === "development") {
    const str = fs.readFileSync("db/user.json", {
      encoding: "utf-8",
    });
    const users = JSON.parse(str);
    return users;
    //read db from memory if run on vercel
  } else if (process.env.NODE_ENV === "production") {
    return users;
  }
}

export function writeUsersDB(_users) {
  //read db from text file if run on local
  if (process.env.NODE_ENV === "development") {
    const str = JSON.stringify(_users);
    fs.writeFileSync("db/user.json", str, { encoding: "utf-8" });
    //read db from memory if run on vercel
  } else if (process.env.NODE_ENV === "production") {
    users = _users;
  }
}
