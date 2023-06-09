import Image from 'next/image'
import Bump from './bump'
import Form from './form'
import Data from './data.json'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-screen z-10 w-full max-w-8xl items-center justify-between font-mono text-sm lg:flex">
      <Bump data={Data}></Bump>
      <Form></Form>
      </div>
    </main>
  )
}
