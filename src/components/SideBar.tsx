import { ReactNode } from "react";
import '../styles/sidebar.scss';

interface Props {
  children: ReactNode
}

export function SideBar({ children }: Props) {
  // Complete aqui
  return(
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>
      { children }
    </nav>
  )
}