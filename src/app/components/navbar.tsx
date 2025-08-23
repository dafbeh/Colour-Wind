"use client";

import React from 'react';
import ThemeToggle from './themeToggle';
import { Caveat } from 'next/font/google';

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export default function Navbar() {
    return (
        <div>
            <div className="w-full p-1 flex justify-between items-center">
            <div
                className={`${caveat.className} text-2xl font-bold pl-1 cursor-pointer select-none`}
                onClick={() => { window.location.href = '/' }}
            >
                Colour Wind
            </div>
                <ThemeToggle />
            </div>
            <hr className="dark:border-gray-300 border-gray-600"/>
        </div>
    );
}
