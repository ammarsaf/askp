import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface Props {
  allData: {
    id: number;
    questionEng: string;
    questionMalay: string;
    questionTag: string;
  }[];
}

//Array.from({ length: 5 }).map((_, index)
export function CarouselQuestion({ allData }: Props) {
  return (
    <Carousel className="w-full max-w-xl flex justify-center mx-auto">
      <CarouselContent>
        {allData.map((data, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-purple-100">
                <CardContent className="flex flex-col aspect-square items-start justify-center p-6">
                  <span className="text-xl font-semibold">
                    {data.questionEng}
                  </span>
                  <span className="text-s flex-end italic">
                    {data.questionMalay}
                  </span>
                  <span className="text-sm text-gray-500 mt-30">
                    {data.questionTag}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
