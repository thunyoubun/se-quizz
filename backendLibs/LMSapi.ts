import axios from "axios";
type LMSparam = {
  courseID: string | number;
  quizID: string | number | null;
  TOKEN: string;
};
type ClassicQuiz = {
  'quiz[title]': string;
};
type QuestionGroup = {
  'quiz_groups[][name]': string;
  'quiz_groups[][pick_count]': number;
  'quiz_groups[][question_points]': number;
};

export const CreateClassicQuiz = async (param: LMSparam, body: ClassicQuiz) => {
  var options = {
    method: 'POST',
    url: `https://mango-cmu.instructure.com/api/v1/courses/${param.courseID}/quizzes`,
    params: body,
    headers: {
      Accept: '*/*',
      Authorization: 'Bearer '+ param.TOKEN
    }
  };
  const response =await  axios.request(options).then(res => {return res.data}).catch(function (error) {
    console.error(error);
  });
  
  return  response;
};

export const CreateQuizGroup = async (param: LMSparam, body: QuestionGroup) => {
  var options = {
    method: 'POST',
    url: `https://mango-cmu.instructure.com/api/v1/courses/${param.courseID}/quizzes/${param.quizID}/groups/`,
    params: body,
    headers: {
      Accept: '*/*',
      Authorization: 'Bearer '+ param.TOKEN
    }
  };
  const response =await  axios.request(options).then(res => {return res.data}).catch(function (error) {
    console.error(error);
  });
  
  return  response;
};
export const CreatQuestion = async (param: LMSparam, body: unknown) => {
  var options = {
    method: 'POST',
    url: `https://mango-cmu.instructure.com/api/v1/courses/${param.courseID}/quizzes/${param.quizID}/questions`,
    params: body,
    headers: {
      Accept: '*/*',
      Authorization: 'Bearer '+ param.TOKEN
    }
  };
  const response =await  axios.request(options).then(res => {return res.data}).catch(function (error) {
    console.error(error);
  });
  
  return  response;
};

const TOKEN =
  "21123~Ci16eEjIuU2RnkZW4iPgSMq5cSOWgIiLUqFNdtUUCMaHhNFjSjMOb6IYRkHC62ZP";
let quizID = 5159;
let groupID:Array<{ quiz_group_id: string|number; quiz_group_name: string; }> = [{quiz_group_id:3690,quiz_group_name:'xxx'}];


// CreateClassicQuiz(
//   {
//     courseID: "1306",
//     quizID: null,
//     TOKEN: TOKEN,
//   },
//   { 'quiz[title]': "via typescript" }
// ).then((data) => {
//   console.log(data);
//   quizID = data.id;
// });


// CreateQuizGroup(
//   {
//     courseID: "1306",
//     quizID: quizID,
//     TOKEN: TOKEN,
//   },
//   { 'quiz_groups[][name]': "group from ts", 'quiz_groups[][pick_count]': 1, 'quiz_groups[][question_points]': 1 }
// ).then((data) => {
//   console.log(data)
//   groupID.push({'quiz_group_id':data.quiz_groups[0].id,'quiz_group_name':data.quiz_groups[0].name})
// });

CreatQuestion({ courseID: 1306, quizID: quizID, TOKEN: TOKEN }, {'question[quiz_group_id]': groupID[0].quiz_group_id,}).then((data) =>
  console.log(data)
);
