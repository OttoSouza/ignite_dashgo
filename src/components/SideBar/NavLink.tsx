import { Link as ChakraLink, IconProps, LinkProps } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { ActiveLink } from '../ActiveLink';
interface NavLinkProps extends LinkProps {
  children: string;
  icon: ElementType;
  href: string;
}
export function NavLink({ href, children, icon, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontSize="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}
