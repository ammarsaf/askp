import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function PageTabs() {
  return (
    <>
      <div className="flex justify-center m-10">
        <Tabs defaultValue="Questions" className="w-[600px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="Questions">Questions</TabsTrigger>
            <TabsTrigger value="Statistics">Statistics</TabsTrigger>
            <TabsTrigger value="AI Analysis">AI Analysis</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    </>
  );
}
