
export default function Projects() {
  return (
    <div className="my-5">
      <h2 className="group font-bold text-xl my-8 relative text-gray-900 dark:text-gray-100">
        Projects
      </h2>
      
      <div className="my-8">
        <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
          TNP Portal | NextJS | NestJS | TypeScript
        </h3>
        <p className="my-5 text-gray-800 dark:text-gray-300">
          Architected a Full-stack Campus Placement Management System using NextJS, NestJS, and PostgreSQL with JWT authentication and role-based access control.
        </p>
        <ul className="my-5 list-none list-inside">
          <li className="my-2 relative pl-4 before:text-gray-400 before:content-['–'] before:mr-2 before:absolute before:-ml-4 text-gray-800 dark:text-gray-300">
            Engineered automated eligibility checks, helping placement cell manage 500+ student applications with 70% less manual effort
          </li>
          <li className="my-2 relative pl-4 before:text-gray-400 before:content-['–'] before:mr-2 before:absolute before:-ml-4 text-gray-800 dark:text-gray-300">
            Crafted intuitive dashboards for students and admins with status tracking, resume uploads, and analytics — improving application tracking efficiency by 80%
          </li>
        </ul>
      </div>

      <div className="my-8">
        <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
          Stock Exchange | NextJS | Express
        </h3>
        <p className="my-5 text-gray-800 dark:text-gray-300">
          Designed and implemented a real-time Stock Exchange platform using Next.js, TypeScript, Express, TimescaleDB, Redis, and WebSocket, following microservices architecture.
        </p>
        <ul className="my-5 list-none list-inside">
          <li className="my-2 relative pl-4 before:text-gray-400 before:content-['–'] before:mr-2 before:absolute before:-ml-4 text-gray-800 dark:text-gray-300">
            Developed high-performance, in-memory systems for orderbook management, user balances, and trade matching, leveraging Redis Pub/Sub and Node.js
          </li>
          <li className="my-2 relative pl-4 before:text-gray-400 before:content-['–'] before:mr-2 before:absolute before:-ml-4 text-gray-800 dark:text-gray-300">
            Integrated TimescaleDB and WebSocket for time-series analytics and real-time candlestick charting
          </li>
        </ul>
      </div>

      <div className="my-8">
        <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-gray-100">
          Rubik's Cube Solver | C++
        </h3>
        <p className="my-5 text-gray-800 dark:text-gray-300">
          Modeled a virtual Rubik's Cube(3x3) using standard Data Structures in C++. Implemented and compared BFS, DFS, and IDDFS algorithms.
        </p>
        <ul className="my-5 list-none list-inside">
          <li className="my-2 relative pl-4 before:text-gray-400 before:content-['–'] before:mr-2 before:absolute before:-ml-4 text-gray-800 dark:text-gray-300">
            Achieved sub-3-second solutions for 8-move configurations
          </li>
          <li className="my-2 relative pl-4 before:text-gray-400 before:content-['–'] before:mr-2 before:absolute before:-ml-4 text-gray-800 dark:text-gray-300">
            Designed and optimized Korf's IDA* algorithm implementation, solving complex 13-move configurations in under 10 seconds with 95% efficiency improvement
          </li>
        </ul>
      </div>
    </div>
  )
}