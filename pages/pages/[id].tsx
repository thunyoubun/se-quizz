import React from "react";
import { useRouter } from "next/router";

const Quizz = () => {
  const router = useRouter();
  const { qid } = router.query;

  return <div>Quizz : {qid}</div>;
};

export default Quizz;
