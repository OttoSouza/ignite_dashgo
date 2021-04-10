import { ReactElement, cloneElement } from "react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/dist/client/router";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  shouldMatchExactyHref?: boolean;
}

export function ActiveLink({
  children,
  shouldMatchExactyHref = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter();
  let isActive = false;

  if (shouldMatchExactyHref && (asPath === rest.href || asPath === rest.as)) {
    isActive = true;
  }

  if (
    !shouldMatchExactyHref &&
    (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))
  ) {
    isActive = true;
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? "pink.500" : "gray.50",
      })}
    </Link>
  );
}
