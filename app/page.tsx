import Desc from "./components/description"
import TechSkill from "./components/Tech_Skill"
import Achievement from "./components/Achievement"
import Projects from "./components/Projects"
import Contacts from "./components/Contacts"

export default function Home() {
  return (
    <main className="max-w-2xl font-mono m-auto mb-10 text-sm">
      <header className="text-black dark:text-gray-600 flex items-center text-xs mb-6">
        {/* <span className="w-12 h-9 text-left">type</span>
        <span className="grow pl-2">content</span>
        <span className="text-black dark:text-black text-xs">status</span> */}
      </header>

      <ul>
        <li>
          
          <div className="flex transition-[background-color]  active:bg-gray-200 dark:active:bg-[#763a3a] border-y border-gray-200 dark:border-[#313131]">
            <div className="py-3 flex grow items-center">
              <span className="w-14 inline-block self-start shrink-0 text-black dark:text-black">
                About
              </span>
              <div className="grow  dark:text-blue-800">
                <Desc />
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className="flex transition-[background-color] hover:bg-gray-100 dark:hover:bg-[#242424] active:bg-gray-200 dark:active:bg-[#222] border-y border-gray-200 dark:border-[#313131] border-t-0">
            <div className="py-3 flex grow items-center">
              <span className="w-14 inline-block self-start shrink-0 text-black dark:text-black">
                skills
              </span>
              <div className="grow text-gray-600 dark:text-black">
                <TechSkill />
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className="flex transition-[background-color] hover:bg-gray-100 dark:hover:bg-[#242424] active:bg-gray-200 dark:active:bg-[#222] border-y border-gray-200 dark:border-[#313131] border-t-0">
            <div className="py-3 flex grow items-center">
              <span className="w-14 inline-block self-start shrink-0 text-black dark:text-black">
                badges
              </span>
              <div className="grow text-gray-600 dark:text-black">
                <Achievement />
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className="flex transition-[background-color] hover:bg-gray-100 dark:hover:bg-[#242424] active:bg-gray-200 dark:active:bg-[#222] border-y border-gray-200 dark:border-[#313131] border-t-0">
            <div className="py-3 flex grow items-center">
              <span className="w-14 inline-block self-start shrink-0 text-black dark:text-black">
                works
              </span>
              <div className="grow text-gray-600 dark:text-black">
                <Projects />
              </div>
            </div>
          </div>
        </li>

        <li>
          <div className="flex transition-[background-color] hover:bg-gray-100 dark:hover:bg-[#242424] active:bg-gray-200 dark:active:bg-[#222] border-y border-gray-200 dark:border-[#313131] border-t-0 border-b-0">
            <div className="py-3 flex grow items-center">
              <span className="w-14 inline-block self-start shrink-0 text-black dark:text-black">
                reach
              </span>
              <div className="grow text-gray-600 dark:text-black">
                <Contacts />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </main>
  )
}
