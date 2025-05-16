import { Heading, Link, Text, VStack } from "@chakra-ui/react"
import gap from "./ui/gap";
import h2Size from "./ui/h2Size";
import bodySize from "./ui/bodySize";
import { TbCircleArrowRightFilled } from "react-icons/tb";
import h3Size from "./ui/h3size";

const LetsTalk = () => {

    return (
        <VStack
            alignItems="left"
            gap={gap}>
            <Heading
                as="h2"
                size={h2Size}>
                Lets Talk
            </Heading>
            <VStack alignItems="left">
                <Link
                    href={"mailto:hello@diagnosync.com"}
                    target="_blank"
                    rel="noopener noreferrer">
                    <Text
                        as="h3"
                        fontSize={h3Size}
                        fontWeight="bold">
                        Email Us <TbCircleArrowRightFilled style={{ display: 'inline-block' }} />
                    </Text>
                </Link>
                <Text
                    fontSize={bodySize}
                    color="fg.muted">
                    We'll cut the bloat to improve your workflow.
                </Text>
            </VStack>
        </VStack>
    )
};

export default LetsTalk;