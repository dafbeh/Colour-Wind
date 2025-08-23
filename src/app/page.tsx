"use client";
import SilverButton from './components/silver-button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-[calc(100vh-200px)] w-full bg-[#D3DAD9]
      dark:bg-[#37353E] transition-all duration-300">    
      <div className="flex flex-col items-center justify-center h-full w-full">
        <h1 className="sm:text-6xl text-5xl font-bold text-transparent bg-clip-text 
        bg-gradient-to-r from-blue-500 to-sky-500 text-center"
        >Colour Wind</h1>
        <p className="my-3 text-xl text-center">Tailwind palettes made easy.</p>
        <div className="w-64">
          <Link href="/create"><SilverButton>Try it out 🚀</SilverButton></Link>
        </div>
      </div>
      <a href="https://dafbeh.xyz" target='_blank'>
        <span className="absolute bottom-0 right-0 p-2">dafbeh</span>
      </a>
    </div>
  );
}