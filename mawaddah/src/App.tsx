import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { FlashCard } from '../components/FlashCard';
import { AnswerRadio } from '../components/Radio';
import { QuestionPagination } from '../components/QuestionsPagination';
import { Questions } from './MarriageQuestions';

import 'tailwindcss';

const App = () => {
  return (
    <>
      <NavBar />
      {Questions.map((q) => (
        <>
          <FlashCard
            id={q.id}
            questionEng={q.questionEng}
            questionMy={q.questionMalay}
            tag={q.questionTag}
          />
          <AnswerRadio questionId={q.id} />
        </>
      ))}

      <QuestionPagination />
      <Footer />
    </>
  );
};

export default App;
