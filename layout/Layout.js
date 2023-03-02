import Contact from "@/components/Contact";
import Dashboard from "@/components/Dashboard";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Sidebar from "@/components/Sidebar";
import Work from "@/components/Work";
import {
  Box,
  Text,
  Heading,
  Container,
  Stack,
  Spacer,
  SimpleGrid,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const Layout = () => {
  return (
    <>
      <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
        <GridItem
          as="aside"
          colSpan={{ base: 6, lg: 2, xl: 1 }}
          bg="green.300"
          minH={{ lg: "100vh" }}
          p={{ base: "20px", lg: "30px" }}
		  zIndex="1"
        >
          <Sidebar />
        </GridItem>
        <GridItem as="main" colSpan={{ base: 6, lg: 4, xl: 5 }} p="40px">
          <Stack spacing="5">
            <Navbar />
            <Profile />
            <Dashboard />
            <Work />
            <Contact />
          </Stack>
        </GridItem>
      </Grid>
      <Box bg="gray.600" pt="40px" textAlign="center">
        <Text fontSize="xs" color="white">
          &copy; 2023 Yuta Uchiyama 転載禁止
        </Text>
      </Box>
    </>
  );
};

export default Layout;
