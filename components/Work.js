import {
  Heading,
  Card,
  Stack,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  Image,
  Text,
  Link,
  Icon
} from "@chakra-ui/react";
import { DiGithubBadge } from "react-icons/di";
import { SiQiita } from "react-icons/si";

const Work = () => {
  return (
    <div id="work">
      <Heading as="h3" size="lg" mb="5">
        Work
      </Heading>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Image
          objectFit="contain"
          maxW={{ base: "100%", sm: "200px" }}
          src={"/Logo/twitter-card.png"}
          alt="Caffe Latte"
        />
        <Stack>
          <CardBody>
            <Heading size="md">only text</Heading>
            <Text py="1" fontSize='sm'>
              Reactとfirebaseを使用して制作した掲示板サイトです。
              タグ付けやフォロー、検索など掲示板の機能をきちんと揃えています。
              デザインにはNeumorphismを使用しこだわりました。
              このサイトに関する情報はqiitaに記載してあります。
            </Text>
          </CardBody>
          <CardFooter>
            <ButtonGroup spacing="4">
              <Button variant="solid" colorScheme="green">
                 go to only text
              </Button>
              <Button variant="link">
                <Link href="https://github.com/yuutauh/first" isExternal>
                  <Icon w={8} h={8} color="gray.500" as={DiGithubBadge} />
                </Link>
              </Button>
              <Button variant="link">
                <Link href="https://qiita.com/yuta_11/items/985b0599a66e9d935630" isExternal>
                  <Icon w={8} h={8} color="gray.500" as={SiQiita} />
                </Link>
              </Button>
            </ButtonGroup>
          </CardFooter>
        </Stack>
      </Card>
    </div>
  );
};

export default Work;
