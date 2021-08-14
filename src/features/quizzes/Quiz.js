import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";
import {selectQuiz} from './quizSlice';

export default function Topic() {
  const quizzes = useSelector(selectQuiz); // replace this with a call to your selector to get all the quizzes in state
  let { quizId } = useParams();
  const quiz = quizzes[quizId];

  return (
    <section>
      <h1>{quiz.name}</h1>
      <ul className="cards-list">
        {quiz.cardIds.map((id) => (
          <Card key={id} id={id} />
        ))}
      </ul>
      <Link to={ROUTES.newQuizRoute()} className="button center">
        Create a New Quiz
      </Link>
    </section>
  );
}
