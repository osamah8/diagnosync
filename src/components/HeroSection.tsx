import { Heading, HStack, VStack } from "@chakra-ui/react"
import diagnosyncIcon from "../assets/diagnosync.png"
import { TbCircleArrowDownFilled } from "react-icons/tb";
import type { FC } from "react";
import ImageIcon from "./ui/ImageIcon";
import padding from "./ui/padding";

const HeroSection: FC<{ onNext?: Function }> = ({ onNext }) => {

    return (
        <HStack
            h="100svh"
            p={padding}>
            <VStack
                as="header"
                alignItems="left"
                maxW={["100svw", "100svw", "75svw"]}>
                <HStack
                    fontSize={["lg", "xl", "4xl"]}
                    pb={padding}
                    pointerEvents="none">
                    <ImageIcon src={diagnosyncIcon} /> <Heading as="h1" fontSize='inherit' letterSpacing="tighter">Diagnosync</Heading>
                </HStack>
                <Heading size={["4xl", "5xl", "7xl"]}>
                    We Make Efficient Healthcare Solutions <TbCircleArrowDownFilled
                        style={{ display: 'inline-block' }}
                        cursor={onNext ? "pointer" : "default"}
                        onClick={onNext ? () => onNext() : () => { }} />
                </Heading>
            </VStack>
        </HStack>
    )
};

export default HeroSection;