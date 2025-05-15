import { Heading, HStack, VStack } from "@chakra-ui/react"
import diagnosyncIcon from "../assets/diagnosync.png"
import { useColorModeValue } from "./ui/color-mode";
import { TbCircleArrowDownFilled } from "react-icons/tb";
import type { FC } from "react";

const HeroSection: FC<{ next?: Function }> = ({ next }) => {
    const baseLogoStyle = {
        width: '.875em',
        height: '.875em',
        verticalAlign: 'middle'
    }

    const logoStyle = useColorModeValue(
        {
            ...baseLogoStyle,
            background: `url("${diagnosyncIcon}") no-repeat center`,
            backgroundSize: 'contain'
        },
        {
            ...baseLogoStyle,
            backgroundColor: 'currentColor',
            WebkitMaskImage: `url("${diagnosyncIcon}")`,
            maskImage: `url("${diagnosyncIcon}")`,
            maskRepeat: 'no-repeat',
            maskSize: 'contain'
        }
    );

    return (
        <HStack h="100svh" p="24">
            <VStack as="header" alignItems="left" maxW="75svw">
                <HStack fontSize="3xl" mb="24">
                    <i style={logoStyle} /> <Heading as="h1" fontSize='inherit' letterSpacing="tighter">Diagnosync</Heading>
                </HStack>
                <Heading size="7xl">
                    We Make Efficient Healthcare Solutions <TbCircleArrowDownFilled
                        style={{ display: 'inline-block' }}
                        cursor={next ? "pointer" : "default"}
                        onClick={next ? () => next() : () => { }} />
                </Heading>
            </VStack>
        </HStack>
    )
};

export default HeroSection;