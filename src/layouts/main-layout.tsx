import { cn } from "@/lib/utils";
import { DM_Sans } from "next/font/google";
import React from "react";

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

interface MainLayoutV2Props {
  children: React.ReactNode;
  fullScreen?: boolean;
}

export function MainLayout({ children }: MainLayoutV2Props) {
  return (
    <div
      className={cn(
        `w-screen overflow-hidden bg-red-100 h-screen p-6 px-12 ${dmSans.className}`
      )}
    >
      {children}
    </div>
  );
}
