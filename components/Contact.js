import { Flex, Heading, VStack, Text, Icon, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { IoLogoTwitter } from "react-icons/io";
import { DiGithubBadge } from "react-icons/di";

const Contact = () => {
  return (
    <div id="contact">
      <Heading as="h3" size="lg" mb="5">
        contact
      </Heading>
      <Flex justify="space-evenly">
        <VStack>
          <Text>twitter</Text>
		  <Link href="https://twitter.com/vJmJDHhKmFfj5sv" isExternal>
            <Icon w={8} h={8} color="gray.500" as={IoLogoTwitter} />
		  </Link>
        </VStack>
        <VStack>
          <Text>github</Text>
		  <Link href="https://github.com/yuutauh" isExternal>
            <Icon w={10} h={10} color="gray.500" as={DiGithubBadge} />
		  </Link>
        </VStack>
      </Flex>
    </div>
  );
};

export default Contact;
