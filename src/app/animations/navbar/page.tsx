"use client";

import * as React from "react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import {
  Box,
  HStack,
  Menu,
  MenuButton,
  Stack,
  chakra,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { ABox, AMenuButton } from "@/components/animated";
import { usePathname, useRouter } from "next/navigation";
import { isHotkeyPressed, useHotkeys } from "react-hotkeys-hook";

const items: { label: string; href: string; description: string }[] =
  [
    { label: "Home", href: "/", description: "Main page" },
    { label: "About", href: "/about", description: "About me" },
    // { label: "Blog", href: "/blog", description: "My recent posts" },
    // {
    //   label: "Animations",
    //   href: "/animations",
    //   description: "My recent posts",
    // },
  ];

const [radius, padding] = [14, 2];
const innerBorderRadius = `${radius}px`;
const p = `${padding}px`;
const outerBorderRadius = `${radius + padding}px`;

export default function AnimatedNavbar() {
  const [hovered, setHovered] = useState(items[0].href);

  return (
    <Stack align={"center"} p={p} borderRadius={outerBorderRadius}>
      <HStack
        p={p}
        borderWidth={2}
        borderColor={"black"}
        borderRadius={"inherit"}
        onMouseLeave={() => setHovered(items[0].href)}
        position={"relative"}
      >
        <Menu>
          {items.map((item) => (
            <AMenuButton
              key={item.label}
              px={4}
              py={2}
              position="relative"
              // as={Link}
              // href={item.href}
              _hover={{ textDecor: "none" }}
              color={"white"}
              fontWeight={"medium"}
              onMouseEnter={() => setHovered(item.href)}
            >
              <chakra.span
                borderRadius={innerBorderRadius}
                mixBlendMode={"difference"}
                position={"relative"}
                zIndex={1}
              >
                {item.label}
              </chakra.span>
              {hovered == item.href && (
                <ABox
                  position="absolute"
                  bg="gray.900"
                  top={0}
                  left={0}
                  transition={{
                    duration: isHotkeyPressed("shift")
                      ? 1.5
                      : undefined,
                  }}
                  // Using chakra does not animate.
                  style={{ borderRadius: innerBorderRadius }}
                  w="100%"
                  h="100%"
                  layoutId="navbarItemComponent"
                />
              )}
            </AMenuButton>
          ))}
        </Menu>
      </HStack>
    </Stack>
  );
}
