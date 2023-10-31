import { Badge } from "@chakra-ui/react";
interface Props {
  score: number;
}
const GameScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "red";
  return (
    <Badge fontSize="14px" colorScheme={color} borderRadius="4px" paddingX={2}>
      {score}
    </Badge>
  );
};

export default GameScore;
