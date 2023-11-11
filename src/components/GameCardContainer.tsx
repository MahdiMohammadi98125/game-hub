import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

const cardStyles = {
  _hover: {
    transition: "transform .15s ease-in",
    transform: "scale(1.03)",
  },
};

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius="10" overflow="hidden" sx={cardStyles}>
      {children}
    </Box>
  );
};

export default GameCardContainer;
