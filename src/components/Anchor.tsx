import { AnchorHTMLAttributes, FC } from 'react'

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>

export const Anchor: FC<AnchorProps> = ({ children, ...props }) => (
  <a
    {...props}
    className="outline-3 outline-offset-1 outline-transparent focus-visible:outline-blue-500 transition-colors"
  >
    {children}
  </a>
)
