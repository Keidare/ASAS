import React from "react";
import {Input} from "@nextui-org/react";

export default function SearchBar() {
  return (
    <div>
      <Input type="email" label="Search for a prof" placeholder="Enter professor's name" classNames={{base: 'pl-[480px] h-[240px] w-9/12 rounded-2xl flex justify-center items-center'}} />
    </div>
  );
}
