import { AnchorHTMLAttributes, FC } from 'react'

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const Anchor: FC<AnchorProps> = ({ children, ...props }) => (
  <a
    {...props}
    className="focus-visible:outline-3 focus-visible:outline-blue-500 outline-offset-1"
  >
    {children}
  </a>
)
