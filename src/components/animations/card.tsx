"use client";

import { Link } from "@chakra-ui/next-js";
import {
  Card,
  LinkOverlay,
  CardHeader,
  CardBody,
  Stack,
  CardFooter,
  Heading,
  Tag,
  LinkBox,
} from "@chakra-ui/react";
import { ReactElement } from "react";

export type CardAnimationProps = {
  title: string;
  href: string;
  tags: string[];
  component: ReactElement;
};

export const CardAnimation = ({
  title,
  href,
  component,
  tags,
}: CardAnimationProps) => (
  <Card as={LinkBox}>
    <CardHeader>
      <Heading size="md">
        <LinkOverlay
          as={Link}
          href={href}
          _hover={{ textDecor: "none" }}
        >
          {title}
        </LinkOverlay>
      </Heading>
    </CardHeader>
    <CardBody>
      <Stack bg="transparent">{component}</Stack>
    </CardBody>
    <CardFooter>
      {tags.map((e) => (
        <Tag key={e}>{e}</Tag>
      ))}
    </CardFooter>
  </Card>
);
