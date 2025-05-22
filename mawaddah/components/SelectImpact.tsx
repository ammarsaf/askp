import * as React from 'react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export function SelectImpact() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] max-w-xl flex justify-center mx-auto bg-purple-100 mt-10">
        <SelectValue placeholder="Select Impact" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Impact</SelectLabel>
          <SelectItem value="Tolerable">Tolerable</SelectItem>
          <SelectItem value="Non-tolerable">Non-tolerable</SelectItem>
          <SelectItem value="None">None</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
