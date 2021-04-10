import { Flex, useBreakpointValue, IconButton, Icon } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { SearchBox } from "./Search";
import { NotificationNav } from "./Notificationnav";
import { Profile } from "./Profile";
import { useSidebarDrawer } from "../../context/SidebarDrawerContext";
import { RiMenuLine } from "react-icons/ri";

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          mr="2"
          fontSize="20"
          variant="unstyled"
          onClick={onOpen}
          aria-label="Open navigation drawer"
        ></IconButton>
      )}
      <Logo />
      {isWideVersion && <SearchBox />}
      <Flex align="center" ml="auto">
        <NotificationNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
