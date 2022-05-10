import React from "react"
import { Link } from "react-router-dom"

function Pagination({
  postsPerPage,
  paginateBack,
  paginateFront,
  totalPosts,
  currentPage,
  paginateFirst,
  paginateLast,
}) {

  return (
    <div className="my-10 text-center">
      <div>
        <p className="text-sm text-gray-700 mb-[8px]">
          Showing
          <span className="font-medium">
            {" "}
            {currentPage * postsPerPage - postsPerPage + 1}{" "}
          </span>
          to
          <span className="font-medium"> {currentPage * postsPerPage} </span>
          results
        </p>
      </div>
      <nav
        className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
        aria-label="Pagination"
      >
        <Link
          onClick={() => {
            paginateFirst()
          }}
          to="#"
          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <span>First</span>
        </Link>
        <Link
          onClick={() => {
            paginateBack()
          }}
          to="#"
          className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <span>Previous</span>
        </Link>

        <Link
          onClick={() => {
            paginateFront()
          }}
          to="#"
          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <span>Next</span>
        </Link>

        <Link
          onClick={() => {
            paginateLast()
          }}
          to="#"
          className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
        >
          <span>Last</span>
        </Link>
      </nav>
    </div>
  )
}

export default Pagination
