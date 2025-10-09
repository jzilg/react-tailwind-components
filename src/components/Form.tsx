import type { FC, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react'

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>

export const Input: FC<InputProps> = (props) => (
  <input
    {...props}
    className="py-2 px-3 border border-gray-500 rounded-sm outline-3 outline-offset-1 outline-transparent focus-visible:outline-blue-500  disabled:opacity-50 disabled:bg-gray-200 disabled:hover:cursor-not-allowed transition-colors"
  />
)

export const Checkbox: FC<InputProps> = (props) => (
  <input
    {...props}
    type="checkbox"
    className="size-6 accent-gray-500 hover:cursor-pointer outline-3 outline-offset-1 outline-transparent focus-visible:outline-blue-500  disabled:opacity-50 disabled:hover:cursor-not-allowed transition-colors"
  />
)

export const Radio: FC<InputProps> = (props) => (
  <input
    {...props}
    type="radio"
    className="size-6 accent-gray-500 hover:cursor-pointer outline-3 outline-offset-1 outline-transparent focus-visible:outline-blue-500  disabled:opacity-50 disabled:hover:cursor-not-allowed transition-colors"
  />
)

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export const Textarea: FC<TextareaProps> = (props) => (
  <textarea
    {...props}
    className="py-2 px-3 border border-gray-500 rounded-sm outline-3 outline-offset-1 outline-transparent focus-visible:outline-blue-500  disabled:opacity-50 disabled:bg-gray-200 disabled:hover:cursor-not-allowed transition-colors"
  />
)

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>

export const Select: FC<SelectProps> = ({ children, ...props }) => (
  <select
    {...props}
    className="appearance-none py-2 pl-3 pr-8 border bg-transparent border-gray-500 hover:cursor-pointer rounded-sm outline-3 outline-offset-1 outline-transparent focus-visible:outline-blue-500  disabled:opacity-50 disabled:bg-gray-200 disabled:hover:cursor-not-allowed transition-colors"
    style={{
      backgroundImage: 'url(\'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 5 L10 15 L0 5" stroke="currentColor" stroke-width="2" fill="none"></path></svg>\')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right .5rem center',
      backgroundSize: '1rem',
    }}
  >
    {children}
  </select>
)
