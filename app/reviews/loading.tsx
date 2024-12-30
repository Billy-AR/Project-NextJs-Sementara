"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function loading() {
  return (
    <section className="grid md:grid-cols-2 gap-8 mt-8">
      <ReviewLoadingCard />
      <ReviewLoadingCard />
    </section>
  );
}

const ReviewLoadingCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex flex-row space-x-4 ">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[150px]" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Skeleton className="h-14 w-[400px]" />
      </CardContent>
    </Card>
  );
};

export default loading;
