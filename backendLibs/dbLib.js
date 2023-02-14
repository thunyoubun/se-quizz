import fs from "fs";
import path from "path";

let quizz = [
  {
    id: "1",
    title: "Internet ",
    auth: "THUN ANANTARAT",
    date: "1/16/2023",
    status: "Online",
  },
  {
    id: "493b9259-2d68-45b9-b1d2-72ac3cf81a66",
    title: "Network",
    category: "Mid Term",
    auth: "THUN ANANTARAT",
    date: "2/15/2023",
    status: "Online",
  },
];

let users = [
  {
    id: "1",
    username: "test1",
    email: "test1@gmail.com",
    password: "$2b$12$L15Bi23BOXNUEASUMfyea.IZIBL8VQx43aqtRL1B3Nz9X55/HE74.",
    isAdmin: false,
  },
  {
    id: "2",
    username: "test2",
    name: "Jame",
    email: "test2@gmail.com",
    password: "$2b$12$/IZWfdzy0.29eUXZqV8Pw.VCED7T5v6GasLXF5gbK1VlJ/ZoTs5..",
    isAdmin: false,
    Lname: "New",
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
