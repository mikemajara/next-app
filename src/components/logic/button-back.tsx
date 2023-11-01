"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Icons } from "../icons";
import { Button } from "@chakra-ui/react";

export const ButtonBack = () => {
  const router = useRouter();
  return (
    <Button
      position={"absolute"}
      left={2}
      leftIcon={<Icons.arrowLeft />}
      variant="theme"
      onClick={() => router.back()}
    >
      Back
    </Button>
  );
};
