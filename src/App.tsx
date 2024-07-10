import { type FC } from 'react'
import { Button } from './components/Button.tsx'
import { Checkbox, Input, Radio, Select, Textarea } from './components/Form.tsx'

export const App: FC = () => {
  return (
    <div className="m-12">
      <h1 className="text-4xl font-bold mb-6">Components</h1>
      <h2 className="text-2xl font-bold mb-6">Button</h2>
      <ul className="flex gap-3">
        <li>
          <Button>Submit</Button>
        </li>
        <li>
          <Button disabled>Disabled</Button>
        </li>
      </ul>
      <hr className="my-6" />
      <h2 className="text-2xl font-bold mb-6">Input</h2>
      <ul className="flex gap-3">
        <li>
          <Input placeholder="Text" />
        </li>
        <li>
          <Input placeholder="Disabled" disabled />
        </li>
      </ul>
      <hr className="my-6" />
      <h2 className="text-2xl font-bold mb-6">Checkbox</h2>
      <ul className="flex gap-3">
        <li>
          <label className="flex items-center gap-1 hover:cursor-pointer">
            <Checkbox />
            Checkbox
          </label>
        </li>
        <li>
          <label className="flex items-center gap-1 hover:cursor-pointer">
            <Checkbox disabled />
            Checkbox (Disabled)
          </label>
        </li>
      </ul>
      <hr className="my-6" />
      <h2 className="text-2xl font-bold mb-6">Radio</h2>
      <ul className="flex gap-3">
        <li>
          <label className="flex items-center gap-1 hover:cursor-pointer">
            <Radio name="demo" value="1" />
            Radio Option I
          </label>
        </li>
        <li>
          <label className="flex items-center gap-1 hover:cursor-pointer">
            <Radio name="demo" value="2" />
            Radio Option II
          </label>
        </li>
        <li>
          <label className="flex items-center gap-1 hover:cursor-pointer">
            <Radio disabled />
            Checkbox (Disabled)
          </label>
        </li>
      </ul>
      <hr className="my-6" />
      <h2 className="text-2xl font-bold mb-6">Select</h2>
      <ul className="flex gap-3">
        <li>
          <Select>
            <option value="1">
              Option I
            </option>
            <option value="2">
              Option II
            </option>
          </Select>
        </li>
        <li>
          <Select disabled>
            <option value="1">
              Option I
            </option>
          </Select>
        </li>
      </ul>
      <hr className="my-6" />
      <h2 className="text-2xl font-bold mb-6">Textarea</h2>
      <ul className="flex gap-3">
        <li>
          <Textarea />
        </li>
        <li>
          <Textarea disabled />
        </li>
      </ul>
    </div>
  )
}
