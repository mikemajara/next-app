import React, { ReactElement } from "react";
import Navbar from "./(animations)/navbar";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Grid,
  HStack,
  Heading,
  LinkOverlay,
  SimpleGrid,
  Stack,
  Tag,
} from "@chakra-ui/react";
import { ABox, ACard } from "@/components/animated";
import { Link } from "@chakra-ui/next-js";
import {
  CardAnimation,
  CardAnimationProps,
} from "@/components/animations/card";

const animations: CardAnimationProps[] = [
  {
    title: "Button",
    href: "/navbar",
    tags: ["shared-layout"],
    component: <Navbar />,
  },
];

export default function Page() {
  return (
    <div>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {animations.map((animation) => (
          <CardAnimation key={animation.title} {...animation} />
        ))}
        {/* <CardAnimation title={"Navbar"} component={<Navbar />} />
        <CardAnimation title={"Navbar"} component={<Navbar />} /> */}
      </SimpleGrid>
    </div>
  );
}
