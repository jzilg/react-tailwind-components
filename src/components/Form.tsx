import type { FC, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

export const Input: FC<InputProps> = (props) => (
  <input
    {...props}
    className="py-2 px-3 border border-gray-500 rounded-sm focus-visible:outline-3 focus-visible:outline-blue-500 outline-offset-1 disabled:opacity-50 disabled:bg-gray-200 disabled:hover:cursor-not-allowed"
  />
)

export const Checkbox: FC<InputProps> = (props) => (
  <input
    {...props}
    type="checkbox"
    className="size-6 accent-gray-500 hover:cursor-pointer focus-visible:outline-3 focus-visible:outline-blue-500 outline-offset-1 disabled:opacity-50 disabled:hover:cursor-not-allowed"
  />
)

export const Radio: FC<InputProps> = (props) => (
  <input
    {...props}
    type="radio"
    className="size-6 accent-gray-500 hover:cursor-pointer focus-visible:outline-3 focus-visible:outline-blue-500 outline-offset-1 disabled:opacity-50 disabled:hover:cursor-not-allowed"
  />
)

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea: FC<TextareaProps> = (props) => (
  <textarea
    {...props}
    className="py-2 px-3 border border-gray-500 rounded-sm focus-visible:outline-3 focus-visible:outline-blue-500 outline-offset-1 disabled:opacity-50 disabled:bg-gray-200 disabled:hover:cursor-not-allowed"
  />
)

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>

export const Select: FC<SelectProps> = ({ children, ...props }) => (
  <select
    {...props}
    className="py-2 px-3 border bg-transparent border-gray-500 hover:cursor-pointer rounded-sm focus-visible:outline-3 focus-visible:outline-blue-500 outline-offset-1 disabled:opacity-50 disabled:bg-gray-200 disabled:hover:cursor-not-allowed"
  >
    {children}
  </select>
)
