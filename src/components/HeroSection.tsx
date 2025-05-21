import { Heading, HStack, VStack } from "@chakra-ui/react"
import diagnosyncLogo from "../assets/diagnosync-logo.png"
import { TbCircleArrowDownFilled } from "react-icons/tb";
import type { FC } from "react";
import ImageIcon from "./ui/ImageIcon";
import padding from "./ui/padding";

export const Diagnosync: FC<{ onClick?: Function }> = ({ onClick }) =>
    <HStack
        fontSize={["lg", "xl", "4xl"]}
        cursor="pointer"
        pointerEvents={onClick ? undefined : 'none'}
        onClick={onClick ? () => onClick() : undefined}>
        <ImageIcon src={diagnosyncLogo} /> <Heading as="h1" fontSize='inherit' letterSpacing="tighter">Diagnosync</Heading>
    </HStack>;

export const HeroSection: FC<{ onNext?: Function }> = ({ onNext }) => {

    return (
        <HStack
            h="100svh"
            p={padding}>
            <VStack
                as="header"
                alignItems="left"
                maxW={["100svw", "100svw", "75svw"]}>
                <Diagnosync />
                <Heading pt={padding} size={["4xl", "5xl", "7xl"]}>
                    We Deliver Efficient Healthcare Solutions <TbCircleArrowDownFilled
                        style={{ display: 'inline-block' }}
                        cursor={onNext ? "pointer" : "default"}
                        onClick={onNext ? () => onNext() : () => { }} />
                </Heading>
            </VStack>
        </HStack>
    )
};

export default HeroSection;