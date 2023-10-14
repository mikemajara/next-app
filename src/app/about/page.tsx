"use client";

import { Calendar } from "@/components/ui/calendar";
import { chakra } from "@chakra-ui/react";
import React, { useState } from "react";

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="p-4 flex ">
      <chakra.span>About</chakra.span>
    </div>
  );
}
