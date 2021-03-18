import { ReactNode } from 'react';
import '../styles/content.scss';

interface Props {
  children: ReactNode
}

export function Content({ children }: Props) {
  // Complete aqui
  return (
    <div className="container">
      { children }
  </div>
  )
}