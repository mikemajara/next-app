import { Container } from "@chakra-ui/react";
import React, { ReactElement, ReactNode } from "react";

export default function Layout({
  children,
}: {
  children: ReactNode | ReactElement;
}) {
  return (
    <Container maxW="container.lg" py={10}>
      {children}
    </Container>
  );
}
