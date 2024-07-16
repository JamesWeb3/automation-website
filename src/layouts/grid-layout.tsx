import { Card } from "@/components/ui/card";

import React from "react";

interface MainLayoutV2Props {
  leftChild: React.ReactNode;
  rightChild: React.ReactNode;
}

export function GridLayout({ leftChild, rightChild }: MainLayoutV2Props) {
  return (
    <div className="flex w-full h-full gap-8 mt-4 pb-20">
      <Card className="w-1/3">{leftChild}</Card>
      <Card className="w-2/3">{rightChild}</Card>
    </div>
  );
}
