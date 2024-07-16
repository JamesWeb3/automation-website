import { cn } from "@/lib/utils";
import { Open_Sans } from "next/font/google";
import React from "react";

const openSans = Open_Sans({
  weight: ["300", "400", "600", "700", "800"],
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
        `w-screen overflow-hidden bg-muted h-screen p-6 px-8 ${openSans.className}`
      )}
    >
      {children}
    </div>
  );
}
