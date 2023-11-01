import { Button, Container, Stack } from "@chakra-ui/react";
import React, { ReactElement, ReactNode } from "react";

export default function Layout({
  children,
}: {
  children: ReactNode | ReactElement;
}) {
  return (
    <Stack maxW="container.lg" py={10} minH="100vh" justify="center">
      {children}
    </Stack>
  );
}
