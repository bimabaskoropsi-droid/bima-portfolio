import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 font-mono dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-10 px-20 bg-black dark:bg-white sm:items-start">
        <Image
          className="dark:invert border-4 border-sky-500 border-dashed shadow-md"
          src="/Monkey2.jpg"
          alt="Next.js logo"
          width={200}
          height={150}
          priority
        />
        <div className="flex flex-row items-center gap-9 text-center sm:items-start sm:text-left">
          <h1 className="max-w-64 text-2xl font-semibold leading-8 tracking-tight text-white dark:text-zinc-50">
            Hi, I'm a Inspiring Network Engineer.
          </h1>
          <p className="max-w-1000 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            <div className="overflow-visible">Hi, I'm Bima a network engineer. I experience installation network infrastructure, collaboration and integrations. Experience 12 years as network engineer in Packet Systems Indonesia member of Logicalis-Metrodata tech-company. 
            I'm strong on Cisco product specially on Cisco call manager and experience in multiple Cisco product solution (Cisco routing-switching, wireless, ironport, Meraki). 
            Now i'm learning new thing which is AWS cloud & DevOps.</div>
           
          </p>
        </div>
        <div className="min-h-30 flex flex-10 gap-2 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-1 rounded-full bg-foreground px-50 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/RangeROverMK1.jpg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            DownloadCV
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation CV
          </a>
        </div>
        <div className="relative">
          <div className="max-w-64 text-2xl font-semibold leading-8 tracking-tight text-white dark:text-zinc-50 font-mono">MySkill</div>
          <div>
            <div>
              <article>
              <div className="text-white"></div> 
              <img className="float-left text-white border-4 border-sky-500 border-dashed" src="/PSI logo2026.jpg" />
              <p>Cisco Call Manager</p>
              </article>
            </div>
          <div>
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-forestgreen px-40 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/PSI logo2026.jpg"
              alt="PSI logo2026.jpg"
              width={100}
              height={100}
            />
            Cisco Meraki
          </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
