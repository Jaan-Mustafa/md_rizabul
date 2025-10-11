
export default function Contacts() {
  return (
    <div className="my-5">
      <h2 className="group font-bold text-xl my-8 relative text-gray-900 dark:text-gray-100">
        Contact
      </h2>
      <ul className="my-5 list-none list-inside">
        <li className="my-2 relative pl-4 before:text-gray-400 before:content-['–'] before:mr-2 before:absolute before:-ml-4 text-gray-800 dark:text-gray-300">
          <span className="font-medium">Email:</span> mustafamustafa9891@gmail.com
        </li>
        <li className="my-2 relative pl-4 before:text-gray-400 before:content-['–'] before:mr-2 before:absolute before:-ml-4 text-gray-800 dark:text-gray-300">
          <span className="font-medium">Phone:</span> +91 7838397736
        </li>
      </ul>
      <blockquote className="my-5 text-gray-500 pl-3 border-l-4 dark:border-gray-600 dark:text-gray-400">
        Available for freelance projects and full-time opportunities
      </blockquote>
    </div>
  )
}