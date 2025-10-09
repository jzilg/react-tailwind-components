import type { ButtonHTMLAttributes, FC } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<Props> = ({ children, ...props }) => (
  <button
    {...props}
    className="text-white py-2 px-5 bg-gray-500 hover:bg-gray-700 cursor-pointer outline-3 outline-offset-1 focus-visible:outline-blue-500 rounded-full transition-colors disabled:opacity-50 disabled:hover:bg-gray-500 disabled:hover:cursor-not-allowed"
  >
    {children}
  </button>
)
