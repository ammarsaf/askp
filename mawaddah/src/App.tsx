import { NavBar } from '../components/NavBar';
import { AnswerRadio } from '../components/Radio';
import { CarouselQuestion } from '../components/Carousel';
import { PageTabs } from '../components/Tabs';
import { SelectImpact } from '../components/SelectImpact';
import { PagePicker } from '../components/PagePicker';
import { Questions } from './MarriageQuestions';

import 'tailwindcss';

const App = () => {
  return (
    <>
      <div className="bg-white mx-100 my-10 p-10 rounded-md shadow-md">
        <NavBar />
        <PageTabs />
        <PagePicker />
        {/* <FlashCard
            id={q.id}
            questionEng={q.questionEng}
            questionMy={q.questionMalay}
            tag={q.questionTag}
          /> */}
        <CarouselQuestion allData={Questions} />
        <SelectImpact />
        <AnswerRadio />
      </div>
    </>
  );
};

export default App;
