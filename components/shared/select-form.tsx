"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SelectForm = () => {
  const handleChange = (e: string) => {
    console.log(e);
  };

  return (
    <div>
      <Select onValueChange={handleChange}>
        <SelectTrigger className="w-[280px] md:w-[380px] text-white">
          <SelectValue className="text-white" placeholder="Select type" />
        </SelectTrigger>
        <SelectContent className="">
          <SelectItem value="LIVING_ROOM">Living room</SelectItem>
          <SelectItem value="BEDROOM">Bedroom</SelectItem>
          <SelectItem value="BATHROOM">Bathroom</SelectItem>
          <SelectItem value="KITCHEN">Kitchen</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectForm;
