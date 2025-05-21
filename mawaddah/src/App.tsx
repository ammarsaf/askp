import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { FlashCard } from '../components/FlashCard';
import { QuestionPagination } from '../components/QuestionsPagination';
import { Questions } from './MarriageQuestions';

import 'tailwindcss';

const App = () => {
  return (
    <>
      <NavBar />
      {Questions.map((q, index) => (
        <FlashCard
          id={index + 1}
          questionEng={q.questionEng}
          questionMy={q.questionMalay}
          tag={q.questionTag}
        />
      ))}
      <QuestionPagination />
      <Footer />
    </>
  );
};

export default App;
