import { DarkThemeToggle } from "flowbite-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Dark mode toggle - positioned top right */}
      {/* <div className="fixed top-4 right-4 z-50">
        <DarkThemeToggle />
      </div> */}

      {/* Main Content Container */}
      <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12 text-center">
        {/* Decorative icon / illustration */}
        <div className="relative mb-8 h-32 w-32 md:h-40 md:w-40">
          <div className="absolute inset-0 animate-pulse rounded-full bg-amber-100 dark:bg-amber-900/30 blur-2xl"></div>
          <div className="relative flex h-full w-full items-center justify-center rounded-full bg-white/50 backdrop-blur-sm dark:bg-slate-800/50">
            <svg
              className="h-16 w-16 text-amber-600 dark:text-amber-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
              />
            </svg>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-6xl lg:text-7xl">
          Website
          <span className="bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent dark:from-amber-400 dark:to-orange-400">
            {" "}
            Not Available
          </span>
        </h1>

        {/* Status badge */}
        <div className="mb-6 inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800 dark:bg-red-900/50 dark:text-red-200">
          <span className="mr-1.5 inline-block h-2 w-2 rounded-full bg-red-500"></span>
          Not Accessible
        </div>

        {/* Main message */}
        <p className="mb-8 max-w-md text-lg text-slate-600 dark:text-slate-300 md:text-xl">
          The requested website is no longer active or accessible.
        </p>

        {/* Decorative divider */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-slate-300 dark:bg-slate-600"></div>
          <svg
            className="h-4 w-4 text-slate-400 dark:text-slate-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
              clipRule="evenodd"
            />
          </svg>
          <div className="h-px w-12 bg-slate-300 dark:bg-slate-600"></div>
        </div>


      </div>
    </main>
  );
}