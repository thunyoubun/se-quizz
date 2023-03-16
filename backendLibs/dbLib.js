import fs from "fs";
import path from "path";

let quizz = [
  {
    id: "5140",
    title: "Internet ",
    category: "Mid Term",
    auth: "THUN ANANTARAT",
    date: "1/16/2023",
    status: "Ready",
  },
];

let users = [
  {
    id: "1",
    cmuAccount: "thun_a@cmu.ac.th",
    firstName: "THUN",
    lastName: "ANANTARAT",
    studentId: "620610589",
    itaccounttype_id: "StdAcc",
    organization_name_EN: "Faculty of Engineering",
    name: "THUN",
    Lname: "ANANTARAT",
    quizToken: "",
  },
  {
    id: "2",
    cmuAccount: "latthaphol_lao@cmu.ac.th",
    firstName: "LATTHAPHOL",
    lastName: "LAOHAPIBOONRATTANA",
    studentId: "630610759",
    itaccounttype_id: "StdAcc",
    organization_name_EN: "Faculty of Engineering",
    quizToken: "",
  },
];

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
    quizz = _quizz;
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
