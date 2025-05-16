import { Heading, HStack, Link, Text, VStack } from "@chakra-ui/react"
import { journeyData } from "../data/journeyData";
import gap from "./ui/gap";
import h2Size from "./ui/h2Size";
import h3Size from "./ui/h3size";
import bodySize from "./ui/bodySize";
import { TbCircleArrowRightFilled } from "react-icons/tb";

const OurJourney = () => {

    return (
        <VStack
            alignItems="left"
            gap={gap}>
            <Heading
                as="h2"
                size={h2Size}>
                Our Journey
            </Heading>
            {journeyData.map(journeyItem => {
                const title = <Text
                    as="h3"
                    fontSize={h3Size}
                    fontWeight="bold">
                    {journeyItem.title}
                    <Text
                        as="h3"
                        fontSize="inherit"
                        fontWeight="normal"
                        display={["inline-block", "none"]}>
                        &nbsp;({journeyItem.date})
                    </Text> {journeyItem.href && <TbCircleArrowRightFilled style={{ display: 'inline-block' }} />}
                </Text>;

                return <HStack gap={gap}>
                    <Text
                        as="h3"
                        fontSize={h3Size}
                        maxW="min-content"
                        display={["none", "block"]}>
                        {journeyItem.date}
                    </Text>
                    <VStack
                        alignItems="left"
                        flex="1">
                        {journeyItem.href
                            ? <Link
                                href={journeyItem.href}
                                target="_blank"
                                rel="noopener noreferrer">
                                {title}
                            </Link>
                            : title}
                        <Text
                            fontSize={bodySize}
                            color="fg.muted">
                            {journeyItem.description}
                        </Text>
                    </VStack>
                </HStack>
            })}
        </VStack>
    )
};

export default OurJourney;