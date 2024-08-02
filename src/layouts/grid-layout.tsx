import { Card } from "@/components/ui/card";
import React from "react";

interface MainLayoutV2Props {
  leftChild: React.ReactNode;
  rightChild: React.ReactNode;
  variant?: "variant1" | "variant2"; 
}

export function GridLayout({ leftChild, rightChild, variant = "variant1" }: MainLayoutV2Props) {
  const leftWidth = variant === "variant1" ? "w-1/3" : "w-1/5 min-w-[300px]";
  const rightWidth = variant === "variant1" ? "w-2/3" : "w-4/5";

  return (
    <div className="flex w-full h-full gap-8 mt-4 pb-20">
      <Card className={leftWidth}>{leftChild}</Card>
      <Card className={rightWidth}>{rightChild}</Card>
    </div>
  );
}
