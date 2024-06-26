import type { ButtonHTMLAttributes, FC } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<Props> = ({ children }) => {
  return (
    <button className="text-white py-2 px-5 bg-gray-500 hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-red-500 rounded-full transition-colors">
      {children}
    </button>
  )
}
