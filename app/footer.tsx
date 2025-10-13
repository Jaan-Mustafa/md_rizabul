import { Logo } from "./logo"
export function Footer() {
  return (
    <footer className="p-6 pt-3 pb-6 flex text-xs text-center mt-3 dark:text-black-400 text-black-500 font-mono">
      <div className="grow text-left text-gray-800">
        <span><Logo/> </span>
        <span>
          (
          <a href="https://x.com/Jaan_Mustafa_" className="underline">
            @Jaan_Mustafa_
          </a>
          )
        </span>
      </div>
      <div className="text-gray-900 text-2xl">Md Rizabul</div>
    </footer>
  )
}
