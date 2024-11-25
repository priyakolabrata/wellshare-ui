'use client'

import Image from "next/image";
import WellshareNavbar from "@/custom/WellshareNavbar";
import { useState, useEffect } from 'react'
import { Repo } from "@/types/Repo";

export default function Home() {


  const [data, setData] = useState<Repo>();

  useEffect(() => {
    fetch('https://api.github.com/repos/vercel/next.js')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }, [])

  return (
    <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen pt-16 p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <WellshareNavbar />
      <h1>{data?.name} is available</h1>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.tsx
            </code>
            .
          </li>
        </ol>
      </main>
    </div>
  );
}

