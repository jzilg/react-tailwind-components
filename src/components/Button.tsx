import type { ButtonHTMLAttributes, FC } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<Props> = ({ children, ...props }) => (
  <button
    {...props}
    className="text-white py-2 px-5 bg-gray-500 hover:bg-gray-700 cursor-pointer focus:outline-hidden focus-visible:ring-3 focus-visible:ring-blue-500 ring-offset-1 rounded-full transition-colors disabled:opacity-50 disabled:hover:bg-gray-500 disabled:hover:cursor-not-allowed"
  >
    {children}
  </button>
)
