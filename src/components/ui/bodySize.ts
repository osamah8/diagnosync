import type { ConditionalValue } from "@chakra-ui/react";

const bodySize: ConditionalValue<"3xl" | "4xl" | "5xl" | "sm" | "md" | "lg" | "xl" | "2xl" | "xs" | "6xl" | "7xl" | undefined> = ['md', 'lg', 'xl'];

export default bodySize;