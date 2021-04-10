import { Stack } from "@chakra-ui/react";
import { NavSection } from "./NavSection";
import { NavLink } from "./NavLink";
import { RiDashboardLine } from "react-icons/ri";
import { RiContactsLine } from "react-icons/ri";
import { RiInputMethodLine } from "react-icons/ri";
import { RiGitMergeLine } from "react-icons/ri";

const navigation = {
  dash: "/dashboard",
  users: "/users",
};

export function SidebarNav() {
  return (
    <Stack spacing="12" alignItems="flex-start">
      <NavSection title="GERAL">
        <NavLink
          children="Dashboard"
          icon={RiDashboardLine}
          href={navigation.dash}
        />
        <NavLink
          children="Usuarios"
          icon={RiContactsLine}
          href={navigation.users}
        />
      </NavSection>

      <NavSection title="AUTOMACAO">
        <NavLink children="Formularios" icon={RiInputMethodLine} href="#" />
        <NavLink children="Automacao" icon={RiGitMergeLine} href="#" />
      </NavSection>
    </Stack>
  );
}
