
export default function TechSkill() {
  return (
    <div className="my-5">
      <h2 className="group font-bold text-xl my-8 relative text-gray-900 dark:text-gray-100">
        Technical Skills
      </h2>
      <ul className="my-5 list-none list-inside">
        <li className="my-2 relative pl-4 before:text-gray-400 before:content-['–'] before:mr-2 before:absolute before:-ml-4 text-gray-800 dark:text-gray-300">
          <span className="font-medium">Languages:</span> C++, JavaScript, TypeScript, Python, Java
        </li>
        <li className="my-2 relative pl-4 before:text-gray-400 before:content-['–'] before:mr-2 before:absolute before:-ml-4 text-gray-800 dark:text-gray-300">
          <span className="font-medium">Tools:</span> Git, CI/CD (GitHub Actions, Jenkins), GitHub, AWS, NGINX, Docker
        </li>
        <li className="my-2 relative pl-4 before:text-gray-400 before:content-['–'] before:mr-2 before:absolute before:-ml-4 text-gray-800 dark:text-gray-300">
          <span className="font-medium">Core Knowledge:</span> Data Structures & Algorithms, OOP, System Design, Automated Testing, Debugging
        </li>
        <li className="my-2 relative pl-4 before:text-gray-400 before:content-['–'] before:mr-2 before:absolute before:-ml-4 text-gray-800 dark:text-gray-300">
          <span className="font-medium">Technologies/Frameworks:</span> React, Next.js, NestJS, Prisma, Mongoose, Express, PostgreSQL, MySQL, LangGraph
        </li>
      </ul>
    </div>
  )
}