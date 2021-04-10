import { Flex, Input } from "@chakra-ui/react";

import { Icon } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { RiSearchLine } from "react-icons/ri";

// controllers components
// uncontrollers components

export function SearchBox() {
  return (
    <Flex
      as="label"
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxW={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar na plataforma"
        mr="4"
        px="4"
        _placeholder={{
          color: "gray.400",
        }}
      />

      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  );
}
