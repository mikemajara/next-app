"use client";

import * as React from "react";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import {
  Box,
  HStack,
  Icon,
  Menu,
  MenuButton,
  Stack,
  chakra,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import { ABox, AMenuButton } from "@/components/animated";
import { usePathname, useRouter } from "next/navigation";
import { isHotkeyPressed, useHotkeys } from "react-hotkeys-hook";
import { Icons } from "./icons";

const items: {
  label: string;
  href: string;
  description: string;
  icon?: any;
}[] = [
  {
    label: "Home",
    href: "/",
    description: "Main page",
    icon: Icons.home,
  },
  {
    label: "About",
    href: "/about",
    description: "About me",
    icon: Icons.userCard,
  },
  {
    label: "Blog",
    href: "/blog",
    description: "My recent posts",
    icon: Icons.book,
  },
];

const [radius, padding] = [10, 4];
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
    <Stack align={"center"} p={p} borderRadius={outerBorderRadius}>
      <HStack
        p={0.5}
        borderWidth={2}
        borderColor={"black"}
        borderRadius={"inherit"}
        onMouseLeave={() => setHovered(pathname)}
        position={"relative"}
      >
        <Menu>
          {items.map((item) => (
            <AMenuButton
              key={item.label}
              px={4}
              py={p}
              position="relative"
              as={Link}
              href={item.href}
              _hover={{ textDecor: "none" }}
              color={"white"}
              fontWeight={"medium"}
              onMouseEnter={() => setHovered(item.href)}
            >
              <HStack
                mixBlendMode={"difference"}
                position={"relative"}
                zIndex={1}
              >
                {item.icon && <Icon as={item.icon} />}
                <chakra.span>{item.label}</chakra.span>
              </HStack>
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
                  layoutId="navbarItem"
                />
              )}
            </AMenuButton>
          ))}
        </Menu>
      </HStack>
    </Stack>
  );
}
