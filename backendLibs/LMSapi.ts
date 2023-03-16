import axios from "axios";
type LMSparam = {
  courseID: string | number;
  quizID: string | number | null;
  TOKEN: string;
};
type ClassicQuiz = {
  "quiz[title]": string | undefined;
};
type QuestionGroup = {
  "quiz_groups[][name]": string;
  "quiz_groups[][pick_count]": number;
  "quiz_groups[][question_points]": number;
};
const testData = {
  author: "test_user",
  createDate: "Wed, 15 Mar 2023 19:45:59 GMT",
  deviloperID: "641220771338125802458112",
  qData: {
    quiz_groups: [
      {
        "quiz_groups[][name]": "2",
        "quiz_groups[][pick_count]": 2,
        "quiz_groups[][question_points]": 2,
      },
    ],
    quiz_questions: [
      {
        "question[answers][0][answer_text]": "Redhat",
        "question[answers][0][answer_weight]": 100,
        "question[answers][1][answer_text]": "Virus",
        "question[answers][1][answer_weight]": 0,
        "question[answers][2][answer_text]": "Trojan",
        "question[answers][2][answer_weight]": 0,
        "question[answers][3][answer_text]": "Security Killer",
        "question[answers][3][answer_weight]": 0,
        "question[points_possible]": 1,
        "question[question_name]": "1A",
        "question[question_text]": "ข้อใดไม่ใช้ซอฟต์แวร์ประสงค์ร้าย?",
        "question[question_type]": "multiple_choice_question",
      },
      {
        "question[answers][0][answer_text]":
          "Virus,www=* Keylogger , Security killer* Spyware , Ransomware* Virus , Trojan",
        "question[answers][0][answer_weight]": 0,
        "question[points_possible]": 5,
        "question[question_name]": "1B",
        "question[question_text]": "Software ประสงค์ร้าย ข้อใดไม่ถูกต้อง?",
        "question[question_type]": "multiple_choice_question",
      },
      {
        group_belong_to: "2",
        "question[answers][0][answer_text]": "Worms",
        "question[answers][0][answer_weight]": 100,
        "question[answers][1][answer_text]": "Virus",
        "question[answers][1][answer_weight]": 0,
        "question[answers][2][answer_text]": "Security  Killer",
        "question[answers][2][answer_weight]": 0,
        "question[answers][3][answer_text]": "Ransomware",
        "question[answers][3][answer_weight]": 0,
        "question[question_name]": "2A",
        "question[question_text]":
          "Malwareที่สามารถขยายตัวเพื่อกินพื้นที่บนอุปกรณ์ทําให้พื้นที่เต็มคืออะไร?",
        "question[question_type]": "multiple_choice_question",
        "question[quiz_group_id]": 0,
      },
      {
        group_belong_to: "2",
        "question[answers][0][answer_text]":
          "จอยโดนเก็บข้อมูลส่วนตัวส่งไปให้เเฮกเกอร์",
        "question[answers][0][answer_weight]": 100,
        "question[answers][1][answer_text]": "จินโดนบันทึกการกดเเป้นพิม",
        "question[answers][1][answer_weight]": 0,
        "question[answers][2][answer_text]":
          "เเจคสันคอมของเค้าโดนทําลายระบบป้องกัน",
        "question[answers][2][answer_weight]": 0,
        "question[answers][3][answer_text]": "จินยองคอมของเค้าโดนไวรัส",
        "question[answers][3][answer_weight]": 0,
        "question[question_name]": "2B",
        "question[question_text]":
          "ข้อใดต่อไปนีโดนซอฟเเวร์ประสงค์ร้ายเเบบ Spyware?",
        "question[question_type]": "multiple_choice_question",
        "question[quiz_group_id]": 0,
      },
    ],
  },
  status: "ready to import",
  title: "testdocx3",
};
const CreateClassicQuiz = async (param: LMSparam, body: ClassicQuiz) => {
  var options = {
    method: "POST",
    url: `https://mango-cmu.instructure.com/api/v1/courses/${param.courseID}/quizzes`,
    params: body,
    headers: {
      Accept: "*/*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": " GET, POST, PATCH, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",

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

const CreateQuestionGroup = async (param: LMSparam, body: QuestionGroup) => {
  var options = {
    method: "POST",
    url: `https://mango-cmu.instructure.com/api/v1/courses/${param.courseID}/quizzes/${param.quizID}/groups/`,
    params: body,
    headers: {
      Accept: "*/*",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": " GET, POST, PATCH, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
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
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": " GET, POST, PATCH, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
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

export const oneStopQuiz = (
  TOKEN: string,
  courseID: string | number,
  ClassicQuizBody: any, //{'title':title}
  QuestionGroupBody: Array<any>, //testData.qData.quiz_groups
  QuestionBody: Array<any> //testData.qData.quiz_questions
) => {
  let quizID = 0;
  CreateClassicQuiz(
    {
      courseID: courseID,
      quizID: null,
      TOKEN: TOKEN,
    },
    ClassicQuizBody //{ "quiz[title]": "" }
  ).then((classicdata) => {
    console.log(classicdata);
    quizID = classicdata?.id;
    let IndexMem: number[] = []; //เนื่องจากออกแบบapi ผิดพลาด
    // create group and question in group
    for (let i = 0; i < QuestionGroupBody.length; i++) {
      const questiongroup = QuestionGroupBody[i];
      CreateQuestionGroup(
        {
          courseID: courseID,
          quizID: quizID,
          TOKEN: TOKEN,
        },
        questiongroup
      ).then((data) => {
        console.log(data);
        const quiz_group_id = data?.quiz_groups[0]?.id;
        const quiz_group_name = data?.quiz_groups[0]?.name;
        for (let i = 0; i < QuestionBody.length; i++) {
          if (QuestionBody[i].group_belong_to === quiz_group_name) {
            IndexMem.push(i);
            delete QuestionBody[i].group_belong_to;
            QuestionBody[i]["question[quiz_group_id]"] = quiz_group_id;
            CreatQuestion(
              { courseID: courseID, quizID: quizID, TOKEN: TOKEN },
              QuestionBody[i] //QuestionBody
            ).then((data) => console.log(data));
          }
        }
      });
    }
    for (let index = 0; index < QuestionBody.length; index++) {
      const element = QuestionBody[index];
      if (index in IndexMem) {
        continue;
      } else {
        CreatQuestion(
          { courseID: courseID, quizID: quizID, TOKEN: TOKEN },
          element //QuestionBody
        ).then((data) => console.log(data));
      }
    }
  });
  return { quizID: quizID };
};

// oneStopQuiz(
//   "21123~Ci16eEjIuU2RnkZW4iPgSMq5cSOWgIiLUqFNdtUUCMaHhNFjSjMOb6IYRkHC62ZP",
//   "1306",
//   { "quiz[title]": "groupandnogroup" }, //from uesr input
//   testData.qData.quiz_groups,
//   testData.qData.quiz_questions
// );
