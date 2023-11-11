import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../Navbar";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading as="h2">Error</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "OOPs! Invalid Page"
            : "An error occurred while processing your request."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
