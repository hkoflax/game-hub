import { Card, CardBody, Skeleton } from "@chakra-ui/react";
import { SkeletonText } from "./ui/skeleton";

export default function GameCardSkeleton() {
  return (
    <Card.Root width="300px" borderRadius="10px" overflow="hidden">
      <Skeleton height="200px"></Skeleton>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card.Root>
  );
}
