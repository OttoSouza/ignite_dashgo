import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export default function Pagination() {
  return (
    <Stack
      direction={["column", "row"]}
      mt="8"
      alignItems="center"
      justify="space-between"
      spacing="6"
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>
      <Stack direction="row" spacing="2">
        <PaginationItem numberPagination={1} isCurrent={true} />
        <PaginationItem numberPagination={2} />
        <PaginationItem numberPagination={3} />
        <PaginationItem numberPagination={4} />
      </Stack>
    </Stack>
  );
}
{
}
