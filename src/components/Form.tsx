import type { FC, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input: FC<InputProps> = (props) => {
  return (
    <input
      {...props}
      className="py-2 px-3 border border-gray-500 rounded focus:outline-none focus-visible:ring focus-visible:ring-blue-500 disabled:opacity-50 disabled:bg-gray-200 disabled:hover:cursor-not-allowed"
    />
  )
}

export const Checkbox: FC<InputProps> = (props) => {
  return (
    <input
      {...props}
      type="checkbox"
      className="size-6 accent-gray-500 hover:cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-blue-500 ring-offset-1 disabled:opacity-50 disabled:hover:cursor-not-allowed"
    />
  )
}

export const Radio: FC<InputProps> = (props) => {
  return (
    <input
      {...props}
      type="radio"
      className="size-6 accent-gray-500 hover:cursor-pointer focus:outline-none focus-visible:ring focus-visible:ring-blue-500 ring-offset-1 disabled:opacity-50 disabled:hover:cursor-not-allowed"
    />
  )
}

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea: FC<TextareaProps> = (props) => {
  return (
    <textarea
      {...props}
      className="py-2 px-3 border border-gray-500 rounded focus:outline-none focus-visible:ring focus-visible:ring-blue-500 disabled:opacity-50 disabled:bg-gray-200 disabled:hover:cursor-not-allowed"
    />
  )
}

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>

export const Select: FC<SelectProps> = ({ children, ...props}) => {
  return (
    <select
      {...props}
      className="py-2 px-3 border bg-transparent border-gray-500 hover:cursor-pointer rounded focus:outline-none focus-visible:ring focus-visible:ring-blue-500 disabled:opacity-50 disabled:bg-gray-200 disabled:hover:cursor-not-allowed"
    >
      {children}
    </select>
  )
}
