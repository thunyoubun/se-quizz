import fs from "fs";
import path from "path";

let quizz = [
  {
    id: "6bd543d8-f076-4907-8646-244403e5a598",
    subject: "Software Engineering",
    auth: "Switch",
    date: "1/16/2023",
    completed: false,
  },
  {
    id: "2205a6b7-717f-472f-b1cc-d0db3e65c441",
    subject: "Database",
    auth: "Switch",
    date: "1/16/2023",
    completed: false,
  },
  {
    id: "d45814d2-d4e8-4dfb-9d1b-d5ec2ca66c2a",
    subject: "Math",
    auth: "Switch",
    date: "1/16/2023",
    completed: false,
  },
  {
    id: "810959f1-c2a0-4cdb-bfaf-f974ab31b2d4",
    subject: "OOP",
    auth: "Switch",
    date: "1/16/2023",
    completed: false,
  },
  {
    id: "f42710e2-7338-457b-978f-8885dcbf99f8",
    subject: "Advance",
    auth: "Switch",
    date: "1/17/2023",
    completed: false,
  },
];

let users = [
  {
    username: "admin1",
    //raw password is "1234"
    password: "$2a$12$6lU7JRPa1lbbxnZlGBGJVOWcLxCxKphY2hyhMFydu8Yiyn.kWLAou",
    isAdmin: true,
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
