import type { ConditionalValue } from "@chakra-ui/react";

const h3Size: ConditionalValue<"3xl" | "4xl" | "5xl" | "sm" | "md" | "lg" | "xl" | "2xl" | "xs" | "6xl" | "7xl" | undefined> = ['xl', '2xl', '3xl'];

export default h3Size;