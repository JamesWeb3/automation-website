import React from 'react';
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/ui/command"
  import {
    Cloud,
    fetchSimpleIcons,
    ICloud,
    renderSimpleIcon,
    SimpleIcon,
  } from "react-icon-cloud";

  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];
  
const Automation = () => {
return (
    <div className="custom-shadow w-full">
        <div className="flex gap-4 bg-gray">
           <Image>{Automation.icon1}</Image>
           <Image>{Automation.icon2}</Image>
            <p>{Automation.name}</p>
        </div>
    </div>

)
}

const Portfolio: React.FC = () => {
   

    return (
        <div className="flex justify-between bg-white p-8 rounded-2xl w-full h-full">
            <div className="w-1/2">
            <h2 className="text-2xl">Automating your favourite tools</h2>
            </div>
            

             <Command className="w-1/2 rounded-lg border">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
           
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
           
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
          
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>

    <div className="grid grid-cols-2">

    </div>
           
        </div>
    );
};

export default Portfolio;