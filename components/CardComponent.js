import {
	Text,
	Card,
	CardBody,
	Stack,
	Heading,
	Image
  } from "@chakra-ui/react";

const CardComponent = ({src, title, body}) => {
  return (
    <Card
      
      variant="outline"
      p="4"
      direction={{ base: 'row', sm: 'column' }}
    >
      <Image
        maxW={{base: "10%", sm: "200px"}}
        objectFit="contain"
        src={src}
        alt="image"
      />
      <Stack>
        <CardBody>
          <Heading size="sm">{title}</Heading>
          <Text py="2" fontSize='sm'>
            {body}
          </Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default CardComponent;
