import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface Props {
  questionId: number;
}

export const AnswerRadio: React.FC<Props> = ({ questionId }: Props) => {
  return (
    <div className="flex justify-center" data-id={questionId}>
      <RadioGroup
        className="flex justify-around m-10 gap-10 border-1 rounded-md p-2
        [&:not(:first-child)]:mt-6 w-200"
        defaultValue="option-one"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">1</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">2</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-three" id="option-three" />
          <Label htmlFor="option-three">3</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-four" id="option-four" />
          <Label htmlFor="option-four">4</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-five" id="option-five" />
          <Label htmlFor="option-five">5</Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default AnswerRadio;
