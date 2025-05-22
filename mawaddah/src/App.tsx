import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { FlashCard } from '../components/FlashCard';
import { AnswerRadio } from '../components/Radio';
import { CarouselQuestion } from '../components/Carousel';
import { QuestionPagination } from '../components/QuestionsPagination';
import { Questions } from './MarriageQuestions';

import 'tailwindcss';

const App = () => {
  return (
    <>
      <NavBar />
      {/* <FlashCard
            id={q.id}
            questionEng={q.questionEng}
            questionMy={q.questionMalay}
            tag={q.questionTag}
          /> */}
      <CarouselQuestion allData={Questions} />
      <AnswerRadio />
      <Footer />
    </>
  );
};

export default App;
