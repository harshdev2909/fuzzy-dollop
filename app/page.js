import Image from "next/image";

import { Roboto } from 'next/font/google'
import Hero from "./components/Hero";
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <div className="container mx-auto">
      <header className="flex ">
      <h1 className="text-left m-2 p-5 text-4xl font-bold font-mono">100xDevs</h1>
      <div className="flex justify-end text-end items-end w-full gap-0 ">
      <h1 className="text-center m-2 p-5 text-3xl font-bold font-mono">Explore</h1>
      <h1 className="text-center m-2 p-5 text-3xl font-bold font-mono">About</h1>
      <h1 className="text-center m-2 p-5 text-3xl font-bold font-mono">Login</h1>
      </div>
      </header>
      <hr></hr>
      <Hero/>
    </div>
  );
}
