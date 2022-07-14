import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { getUser } from "@src/api/getUser";
import Span from "@src/components/Span";
import { Suspense, useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState<any>({});
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    getUser({ userId: 18 }).then((res: any) => {
      setIsLoaded(true);
      setData(res.data);
    });
  }, []);

  console.log("this is the data i get", data);
  return (
    <>
      <Suspense>
        {isLoaded && (
          <Box as="header">
            <Heading as="h1" fontFamily="'Roboto', sans-serif">
              Bonjour{" "}
              <Span color="red.500">{data.data.userInfos.firstName}</Span>
            </Heading>
            <Text>Félicitation ! Vous avez explosé vos objectifs hier 👏</Text>
          </Box>
        )}
        <Flex w="full" h="42rem" bg="pink.100" gap="8">
          <Flex w="full" h="full" bg="red.200" direction="column" gap="8">
            <Box w="full" h="full" bg="blue.300"></Box>
            <HStack w="full" h="full" spacing="8">
              <Box w="full" h="full" bg="gray.200"></Box>
              <Box w="full" h="full" bg="gray.300"></Box>
              <Box w="full" h="full" bg="gray.300"></Box>
            </HStack>
          </Flex>
          <VStack w="25rem" h="full" bg="green.200" spacing={8}>
            <Box w="full" h="full" bg="orange.300"></Box>
            <Box w="full" h="full" bg="orange.300"></Box>
            <Box w="full" h="full" bg="orange.300"></Box>
          </VStack>
        </Flex>
      </Suspense>
    </>
  );
};

export default Home;
