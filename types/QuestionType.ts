export type QuestionPayload = {
  "question[question_name]": string;
  "question[question_text]": string;
  "question[quiz_group_id]": number;
  group_belong_to: string;
  "question[question_type]": string;
  "question[points_possible]": number;
  "question[answers][0][answer_text]": string;
  "question[answers][0][answer_weight]": number;
  "question[answers][1][answer_text]": string;
  "question[answers][1][answer_weight]": number;
  "question[answers][2][answer_text]": string;
  "question[answers][2][answer_weight]": number;
  "question[answers][3][answer_text]": string;
  "question[answers][3][answer_weight]": number;
};
