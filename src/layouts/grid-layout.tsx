import { Card } from "@/components/ui/card";
import React from "react";

interface MainLayoutV2Props {
  leftChild: React.ReactNode;
  rightChild: React.ReactNode;
  variant?: "variant1" | "variant2";
}

export function GridLayout({
  leftChild,
  rightChild,
  variant = "variant1",
}: MainLayoutV2Props) {
  return (
    <div className={`flex mt-4 ${variant === "variant1" ? "flex-col bg-black text-white" : "gap-4"}`}>

      <Card
        className={
          variant === "variant1"
            ? "h-1/3 bg-black text-white"
            : "w-1/5 min-w-[300px]"
        }
      >
        {leftChild}
      </Card>
      <Card className={variant === "variant1" ? "h-2/3" : "w-4/5"}>
        {rightChild}
      </Card>
    </div>
  );
}
