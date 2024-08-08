export default function Pagination() {
  return (
    <div className="flex items-center space-x-2">
      <button className="px-3 py-1 text-gray-500 bg-white border border-gray-300 rounded hover:bg-gray-100">
        Previous
      </button>
      <div className="flex space-x-1">
        <button className="px-3 py-1 text-white bg-blue-500 border border-gray-300 rounded">
          1
        </button>
        <button className="px-3 py-1 text-blue-500 bg-white border border-gray-300 rounded hover:bg-gray-100">
          2
        </button>
        <button className="px-3 py-1 text-blue-500 bg-white border border-gray-300 rounded hover:bg-gray-100">
          3
        </button>
        <button className="px-3 py-1 text-blue-500 bg-white border border-gray-300 rounded hover:bg-gray-100">
          4
        </button>
        <button className="px-3 py-1 text-blue-500 bg-white border border-gray-300 rounded hover:bg-gray-100">
          5
        </button>
        <span className="px-3 py-1 text-gray-500">...</span>
        <button className="px-3 py-1 text-blue-500 bg-white border border-gray-300 rounded hover:bg-gray-100">
          11
        </button>
      </div>

      <button className="px-3 py-1 text-gray-500 bg-white border border-gray-300 rounded hover:bg-gray-100">
        Next
      </button>
    </div>
  );
}