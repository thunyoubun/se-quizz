import axios from "axios";
type LMSparam = {
  courseID: string | number;
  quizID: string | number | null;
  TOKEN: string;
};
type ClassicQuiz = {
  "quiz[title]": string;
};
type QuestionGroup = {
  "quiz_groups[][name]": string;
  "quiz_groups[][pick_count]": number;
  "quiz_groups[][question_points]": number;
};

const CreateClassicQuiz = async (param: LMSparam, body: ClassicQuiz) => {
  var options = {
    method: "POST",
    url: `https://mango-cmu.instructure.com/api/v1/courses/${param.courseID}/quizzes`,
    params: body,
    headers: {
      Accept: "*/*",
      Authorization: "Bearer " + param.TOKEN,
    },
  };
  const response = await axios
    .request(options)
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return response;
};

const CreateQuizGroup = async (param: LMSparam, body: QuestionGroup) => {
  var options = {
    method: "POST",
    url: `https://mango-cmu.instructure.com/api/v1/courses/${param.courseID}/quizzes/${param.quizID}/groups/`,
    params: body,
    headers: {
      Accept: "*/*",
      Authorization: "Bearer " + param.TOKEN,
    },
  };
  const response = await axios
    .request(options)
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return response;
};
const CreatQuestion = async (param: LMSparam, body: unknown) => {
  var options = {
    method: "POST",
    url: `https://mango-cmu.instructure.com/api/v1/courses/${param.courseID}/quizzes/${param.quizID}/questions`,
    params: body,
    headers: {
      Accept: "*/*",
      Authorization: "Bearer " + param.TOKEN,
    },
  };
  const response = await axios
    .request(options)
    .then((res) => {
      return res.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return response;
};

const test = (TOKEN:string,courseID:string|number) => {
  
  let quizID = 0;
  let groupID: Array<{
    quiz_group_id: string | number;
    quiz_group_name: string;
  }> = [];

  CreateClassicQuiz(
    {
      courseID: "1306",
      quizID: null,
      TOKEN: TOKEN,
    },
    { "quiz[title]": "chain then quiz" }
  ).then((data) => {
    console.log(data);
    quizID = data.id;

    CreateQuizGroup(
      {
        courseID: "1306",
        quizID: quizID,
        TOKEN: TOKEN,
      },
      {
        "quiz_groups[][name]": "group from ts",
        "quiz_groups[][pick_count]": 1,
        "quiz_groups[][question_points]": 1,
      }
    ).then((data) => {
      console.log(data);
      groupID.push({
        quiz_group_id: data.quiz_groups[0].id,
        quiz_group_name: data.quiz_groups[0].name,
      });

      CreatQuestion(
        { courseID: 1306, quizID: quizID, TOKEN: TOKEN },
        { "question[quiz_group_id]": groupID[0].quiz_group_id }
      ).then((data) => console.log(data));

    });
  });
};


test("21123~Ci16eEjIuU2RnkZW4iPgSMq5cSOWgIiLUqFNdtUUCMaHhNFjSjMOb6IYRkHC62ZP",1306)
