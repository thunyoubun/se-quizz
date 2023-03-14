import { array } from "yup/lib/locale";

export type QuizPayload = {
  author: string;
  category: string;
  date: string;
  id: string;
  status: string;
  title: string;
  qData: any;
};
