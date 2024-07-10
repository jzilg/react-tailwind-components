import type { ButtonHTMLAttributes, FC } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="text-white py-2 px-5 bg-gray-500 hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 ring-offset-1 rounded-full transition-colors disabled:opacity-50 disabled:hover:bg-gray-500 disabled:hover:cursor-not-allowed"
    >
      {children}
    </button>
  )
}
