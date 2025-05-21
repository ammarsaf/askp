interface Props {
  id: number;
  questionEng: string;
  questionMy: string;
  tag: string;
}

export const FlashCard: React.FC<Props> = ({ id, questionEng, questionMy, tag }: Props) => {
  return (
    <>
      <div className="flex justify-center">
        <div
          className="
        flex justify-around m-10 gap-10 border-1 rounded-md p-2
        [&:not(:first-child)]:mt-6 w-200
        "
        >
          <div className="flex flex-col font-medium">
            <div>{id}</div>
            <div>{questionEng}</div>
            <div className="italic">{questionMy}</div>
          </div>
          <div>
            <div>{tag}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashCard;
