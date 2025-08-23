"use client";
import SilverButton from './components/silver-button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="h-full w-full bg-[#D3DAD9] dark:bg-[#37353E] 
      transition-all duration-300">    
      <div className="flex flex-col items-center justify-center h-full w-full pb-50">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text 
        bg-gradient-to-r from-blue-500 to-sky-500"
        >Colour Wind</h1>
        <p className="my-3 text-xl">Tailwind palettes made easy.</p>
        <div className="w-64">
          <Link href="/generator"><SilverButton>Try it out 🚀</SilverButton></Link>
        </div>
      </div>
    </div>
  );
}