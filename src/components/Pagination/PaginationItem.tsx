import { Button } from "@chakra-ui/react";

interface PaginationProps {
  numberPagination: number;
  isCurrent?: boolean;
  onPageChange: (page:number) => void;
}

export function PaginationItem({
  isCurrent = false,
  numberPagination,
  onPageChange
}: PaginationProps) {
  return isCurrent ? (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      colorScheme={isCurrent ? "pink" : ""}
      disabled
      _disabled={{
        bg: "pink.500",
        cursor: "default",
      }}
    >
      {numberPagination}
    </Button>
  ) : (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="gray.700"
      _hover={{
        bg: "gray.300",
      }}
      onClick={() => onPageChange(numberPagination)}
    >
      {numberPagination}
    </Button>
  );
}
