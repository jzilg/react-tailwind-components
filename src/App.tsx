import { type FC } from 'react'
import { Button } from './components/Button.tsx'

export const App: FC = () => {
  return (
    <div className="m-12">
      <h1 className="text-4xl font-bold mb-6">Components</h1>
      <h2 className="text-2xl font-bold mb-6">Button</h2>
      <Button>Submit</Button>
    </div>
  )
}
