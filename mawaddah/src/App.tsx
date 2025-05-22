import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { AnswerRadio } from '../components/Radio';
import { CarouselQuestion } from '../components/Carousel';
import { Questions } from './MarriageQuestions';

import 'tailwindcss';

const App = () => {
  return (
    <>
      <div className="bg-white mx-100 my-10 p-10 rounded-md shadow-md">
        <NavBar />
        {/* <FlashCard
            id={q.id}
            questionEng={q.questionEng}
            questionMy={q.questionMalay}
            tag={q.questionTag}
          /> */}
        <CarouselQuestion allData={Questions} />
        <AnswerRadio />
      </div>
    </>
  );
};

export default App;
