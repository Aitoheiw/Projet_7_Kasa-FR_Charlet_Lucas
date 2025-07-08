import { ReactNode } from "react";
import "./header.scss";

interface HeaderProps {
  children: ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return <header>{children}</header>;
}
