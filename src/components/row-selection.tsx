"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Dispatch, SetStateAction } from "react";

type props = {
  pageSize: number;
  setPageSize: Dispatch<SetStateAction<number>>;
};

export default function RowSelection({ setPageSize, pageSize }: props) {
  return (
    <Select onValueChange={(value) => setPageSize(Number(value))}>
      <SelectTrigger className="md:w-[120px]">
        <SelectValue placeholder={pageSize} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sizes</SelectLabel>
          {["25", "50", "75"].map((item, index) => (
            <SelectItem key={index} value={item}>
              {item}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
