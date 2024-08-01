import { Card } from "@/components/ui/card";

import React from "react";

interface PageLayoutV2Props {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutV2Props) {
  return (
    <div className="flex w-full h-full gap-8 mt-4 pb-20">
      <Card className="w-full">{children}</Card>
    </div>
  );
}
