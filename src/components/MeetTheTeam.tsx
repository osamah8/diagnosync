import { AvatarFallback, AvatarImage, AvatarRoot, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import gap from "./ui/gap";
import h2Size from "./ui/h2Size";
import h3Size from "./ui/h3size";
import bodySize from "./ui/bodySize";
import { teamData } from "../data/teamData";

const MeetTheTeam = () => {

    return (
        <VStack
            alignItems="left"
            gap={gap}>
            <Heading
                as="h2"
                size={h2Size}>
                Meet The Team
            </Heading>
            {teamData.map(teamMember =>
                <HStack gap={gap}>
                    <AvatarRoot
                        size="2xl"
                        display={["none", "inline-block"]}>
                        <AvatarFallback name={teamMember.name} />
                        <AvatarImage src={teamMember.image} />
                    </AvatarRoot>
                    <VStack
                        alignItems="left"
                        flex="1">
                        <HStack gap={[4, gap]}>
                            <AvatarRoot
                                size="2xl"
                                display={["inline-block", "none"]}>
                                <AvatarFallback name={teamMember.name} />
                                <AvatarImage src={teamMember.image} />
                            </AvatarRoot>
                            <Text
                                as="h3"
                                fontSize={h3Size}
                                fontWeight="bold">
                                {teamMember.name}
                                <Text
                                    as="h3"
                                    fontSize={bodySize}
                                    fontWeight="normal">
                                    {teamMember.role}
                                </Text>
                            </Text>
                        </HStack>
                        <Text
                            fontSize={bodySize}
                            color="fg.muted">
                            {teamMember.bio}
                        </Text>
                    </VStack>
                </HStack>
            )}
        </VStack>
    )
};

export default MeetTheTeam;