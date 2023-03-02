import { Heading, List, ListItem, Flex } from "@chakra-ui/react";
import { SiR } from "react-icons/si";
import { Link as Scroll } from "react-scroll";

const Sidebar = () => {
  return (
    <>
      <List
        display={{ base: "none", lg: "block" }}
        color="white"
        spacing="8"
        width="100%"
        pos={{ lg: "fixed" }}
      >
        <ListItem>
          <Heading as="h4" size="md">
            <Scroll to="profile" smooth={true} offset={-20}>profile</Scroll>
          </Heading>
        </ListItem>
        <ListItem>
          <Heading as="h4" size="md">
            <Scroll to="skill" smooth={true} offset={-20}>skill</Scroll>
          </Heading>
        </ListItem>
        <ListItem>
          <Heading as="h4" size="md">
            <Scroll to="work" smooth={true} offset={-20}>work</Scroll>
          </Heading>
        </ListItem>
        <ListItem>
          <Heading as="h4" size="md">
            <Scroll to="contact" smooth={true} offset={-20}>contact</Scroll>
          </Heading>
        </ListItem>
      </List>
      <Flex
        minW="100%"
        justify="space-evenly"
        display={{ base: "flex", lg: "none" }}
        color="white"
        p="20px"
        pos={{ base: "fixed" }}
        top={{ base: "0" }}
        left={{ base: "0" }}
        bg="green.300"
        zIndex={{ base: "1" }}
      >
        <Heading as="h4" size="md">
          <Scroll to="profile" smooth={true} offset={-60}>profile</Scroll>
        </Heading>
        <Heading as="h4" size="md">
          <Scroll to="skill" smooth={true} offset={-60}>skill</Scroll>
        </Heading>
        <Heading as="h4" size="md" >
          <Scroll to="work" smooth={true} offset={-60}>work</Scroll>
        </Heading>
        <Heading as="h4" size="md">
          <Scroll to="contact" smooth={true} offset={-60}>contact</Scroll>
        </Heading>
      </Flex>
    </>
  );
};

export default Sidebar;
