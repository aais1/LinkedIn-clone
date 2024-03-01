const NewJob = () => {
  return (
    <div className="bg-zinc-50">
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-4">Software Engineer</h2>
          <p className="text-gray-600 mb-4">Company: XYZ Tech</p>
          <p className="text-gray-600 mb-4">Location: Remote</p>
          <p className="text-gray-800">
            We are looking for a skilled Software Engineer to join our team.
            Apply now for exciting opportunities!
          </p>
          <div className="mt-4">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewJob