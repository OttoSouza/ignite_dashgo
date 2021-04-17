import React from "react";
import { Box, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalCountRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export default function Pagination({
  totalCountRegisters,
  currentPage = 1,
  registersPerPage = 10,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalCountRegisters / registersPerPage);

  // Se a pagina atual for maior que um, tem-se um irmao
  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

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
        {currentPage > 1 + siblingsCount && (
          <>
            <PaginationItem onPageChange={onPageChange}  numberPagination={1} />

            {currentPage > 2 + siblingsCount && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page) => (
            <PaginationItem onPageChange={onPageChange} numberPagination={page} key={page} />
          ))}

        <PaginationItem onPageChange={onPageChange} numberPagination={currentPage} isCurrent />

        {nextPages.length > 0 &&
          nextPages.map((page) => (
            <PaginationItem onPageChange={onPageChange} numberPagination={page} key={page} />
          ))}

        {currentPage + siblingsCount < lastPage && (
          <>
            {currentPage + 1 + siblingsCount < lastPage && (
              <Text color="gray.300" width="8" textAlign="center">
                ...
              </Text>
            )}
            <PaginationItem onPageChange={onPageChange} numberPagination={lastPage} />
          </>
        )}
      </Stack>
    </Stack>
  );
}
{
}
