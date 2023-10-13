"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import {
  Box,
  HStack,
  Menu,
  MenuButton,
  Stack,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { motion } from "framer-motion";
import { ABox } from "./animated";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const items: { label: string; href: string; description: string }[] =
  [
    { label: "Home", href: "/", description: "Main page" },
    { label: "About", href: "/about", description: "About me" },
    { label: "Blog", href: "/blog", description: "My recent posts" },
  ];

const [radius, padding] = [14, 2];
const innerBorderRadius = `${radius}px`;
const p = `${padding}px`;
const outerBorderRadius = `${radius + padding}px`;

export default function NavigationMenuDemo() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(pathname);
  useEffect(() => {
    setHovered(pathname);
  }, [pathname]);

  return (
    <Stack
      align={"center"}
      p={p}
      borderRadius={outerBorderRadius}
      onMouseLeave={() => setHovered(pathname)}
    >
      <HStack
        p={p}
        borderWidth={2}
        borderColor={"black"}
        borderRadius={"inherit"}
        position={"relative"}
      >
        <Menu>
          {items.map((item) => (
            <Box px={4} py={2} position="relative" key={item.label}>
              <Link
                borderRadius={innerBorderRadius}
                key={item.label}
                onMouseEnter={() => setHovered(item.href)}
                as={MenuButton}
                href={item.href}
                _hover={{ textDecor: "none" }}
                color={"white"}
                fontWeight={"medium"}
                mixBlendMode={"difference"}
              >
                {item.label}
              </Link>
              {hovered == item.href && (
                <ABox
                  position="absolute"
                  bg="gray.900"
                  top={0}
                  left={0}
                  borderRadius={innerBorderRadius}
                  w="100%"
                  h="100%"
                  zIndex={-1}
                  layoutId="navbarItem"
                />
              )}
            </Box>
          ))}
        </Menu>
      </HStack>
    </Stack>
  );
}
