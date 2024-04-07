import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<"a"> {
  active: boolean;
}

export function NavLink(props: NavLinkProps) {
  return (
    <a
      {...props}
      className={
        props.active
          ? "font-medium text-sm"
          : "text-sm text-white/50"
      }
    >
      {props.children}
    </a>
  );
}
