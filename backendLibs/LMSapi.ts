import axios from "axios";

type ClassicQuiz = {
  courseID: string | number;
  title: string;
  TOKEN: string;
};
type QuizGroup = {
  courseID: string | number;
  quizID:string | number;
  name: string;
  pickcount: number;
  questionpoint: number;
  TOKEN: string;
};
type Question = {
  courseID: string | number;
  quizID: string | number;
  TOKEN: string;
};
export const CreateClassicQuiz = async (param: ClassicQuiz) => {
  let response = await fetch(
    `https://mango-cmu.instructure.com/api/v1/courses/${param.courseID}/quizzes?quiz[title]=${param.title}`,
    {
      method: "POST",
      headers: {
        Accept: "*/*",
        Authorization: "Bearer " + param.TOKEN,
      },
    }
  );

  return response.json();
};

export const CreateQuizGroup = async (param:QuizGroup) => {
  let response = await fetch(
    `https://mango-cmu.instructure.com/api/v1/courses/${param.courseID}/quizzes/${param.quizID}/groups/?quiz_groups[][name]=${param.name}&quiz_groups[][pick_count]=${param.pickcount}&quiz_groups[][question_points]=${param.questionpoint}`,
    {
      method: "POST",
      headers: {
        Accept: "*/*",
        Authorization: "Bearer " + param.TOKEN,
      },
    }
  );

  return response.json();
};
export const CreatQuestion = async (param:Question,body: unknown) => {
  const {data} = await axios.post(`https://mango-cmu.instructure.com/api/v1/courses/${param.courseID}/quizzes/${param.quizID}/questions`,body, {
    headers: {
      Accept: "*/*",
      Authorization: "Bearer " + param.TOKEN,
    },
  }
)
return {data}
};




// const TOKEN ="21123~Ci16eEjIuU2RnkZW4iPgSMq5cSOWgIiLUqFNdtUUCMaHhNFjSjMOb6IYRkHC62ZP"
// CreateClassicQuiz({
//   courseID: "1306",
//   title: "via typescript",
//   TOKEN: TOKEN
    
// }).then((data) => console.log(data));
// CreateQuizGroup({
//   courseID: "1306",
//   quizID:5150,
//   name: "group from ts",
//   pickcount: 1,
//   questionpoint: 1, 
//   TOKEN: TOKEN
// }).then((data) => console.log(data));

// CreatQuestion({courseID:1306,quizID:5150,TOKEN:TOKEN},{}).then((data) => console.log(data));
