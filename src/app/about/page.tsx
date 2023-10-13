"use client";

import { Calendar } from "@/components/ui/calendar";
import React, { useState } from "react";

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="p-4 flex ">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </div>
  );
}
