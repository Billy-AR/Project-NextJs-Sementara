"use client";
import { useState } from "react";
import { SubmitButton } from "../form/Button";
import FormContainer from "@/components/form/FormContainer";
import { Card } from "@/components/ui/card";
import RatingInput from "@/components/reviews/RatingInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import { Button } from "@/components/ui/button";
import { createReviewAction } from "@/utils/action";
import { useUser } from "@clerk/nextjs";

function SubmitReview({ productId }: { productId: string }) {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);
  const { user } = useUser();

  return (
    <div>
      <Button size="lg" className="capitalize" onClick={() => setIsReviewFormVisible((prev) => !prev)}>
        leave review
      </Button>
      {isReviewFormVisible && (
        <Card className="p-8 mt-8">
          <FormContainer action={createReviewAction}>
            <input name="productId" type="hidden" value={productId} />
            <input name="authorName" type="hidden" value={user?.firstName || user?.emailAddresses[0].emailAddress.split("@")[0] || "user"} />
            <input name="authorImageUrl" type="hidden" value={user?.imageUrl} />
            <RatingInput name="rating" />
            <TextAreaInput name="comment" labelText="feedback" defaultValue="Outstanding product!!!" />
            <SubmitButton className="mt-4" />
          </FormContainer>
        </Card>
      )}
    </div>
  );
}

export default SubmitReview;
