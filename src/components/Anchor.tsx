import { AnchorHTMLAttributes, FC } from 'react'

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const Anchor: FC<AnchorProps> = ({ children, ...props }) => (
  <a
    {...props}
    className="focus:outline-hidden focus-visible:ring-3 focus-visible:ring-blue-500 ring-offset-1"
  >
    {children}
  </a>
)
