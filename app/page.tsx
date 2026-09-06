import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-zinc-950 font-sans overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/10 to-purple-500/10 dark:from-blue-500/20 dark:to-purple-500/20 blur-3xl rounded-full opacity-50 pointer-events-none"></div>

      <main className="relative z-10 flex w-full max-w-4xl flex-col items-center gap-10 p-6 sm:p-12">
        <div className="flex flex-col items-center gap-6">
          <div className="rounded-3xl bg-white dark:bg-zinc-900 shadow-xl dark:shadow-none p-6 ring-1 ring-zinc-200 dark:ring-zinc-800 transition-transform hover:scale-105 duration-300">
            <Image
              className="dark:invert h-8 w-auto sm:h-10"
              src="/next.svg"
              alt="Next.js logo"
              width={160}
              height={32}
              priority
            />
          </div>

          <div className="text-center space-y-3">
            <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              To get started, edit the{" "}
              <code className="inline-block rounded-lg bg-zinc-200 dark:bg-zinc-800 text-pink-600 dark:text-pink-400 px-3 py-1 font-mono text-xl sm:text-3xl font-bold mx-1 border border-zinc-300 dark:border-zinc-700 shadow-sm">
                page.tsx
              </code>{" "}
              file.
            </h1>
          </div>
        </div>

        <div className="w-full max-w-2xl bg-white dark:bg-zinc-900/60 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 shadow-md text-center">
          <p className="text-base sm:text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 font-medium">
            Looking for a starting point or more instructions?
            <br className="hidden sm:block" />
            Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500 hover:underline underline-offset-4 transition-colors mx-1"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-bold text-blue-600 dark:text-blue-400 hover:text-blue-500 hover:underline underline-offset-4 transition-colors mx-1"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>

        <div className="flex flex-col w-full sm:flex-row justify-center items-center gap-4 mt-2">
          <a
            className="group flex h-14 w-full sm:w-auto min-w-[200px] items-center justify-center gap-3 rounded-full bg-zinc-900 px-8 text-white font-semibold transition-all hover:bg-zinc-800 hover:-translate-y-1 hover:shadow-lg dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert-0 invert h-4 w-4 group-hover:rotate-12 transition-transform"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            <span>Deploy Now</span>
          </a>
          <a
            className="flex h-14 w-full sm:w-auto min-w-[200px] items-center justify-center rounded-full border-2 border-zinc-200 bg-white px-8 text-zinc-900 font-semibold transition-all hover:border-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-transparent dark:text-white dark:hover:border-white dark:hover:bg-zinc-900"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
