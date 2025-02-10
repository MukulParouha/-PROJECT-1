import React, { useState } from "react";

const CareerPage = () => {
  // Sample job data
  const jobs = [
    {
      id: 1,
      role: "Frontend Developer",
      description:
        "We are looking for a skilled Frontend Developer to join our team and help build amazing user interfaces.",
    },
    {
      id: 2,
      role: "Backend Developer",
      description:
        "We are hiring a Backend Developer to design and implement scalable server-side applications.",
    },
    {
      id: 3,
      role: "UI/UX Designer",
      description:
        "We need a creative UI/UX Designer to design intuitive and user-friendly interfaces.",
    },
  ];

  // State for managing modal visibility and selected job
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  // State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
  });

  // Function to handle the "Apply" button click
  const handleApply = (jobId) => {
    setSelectedJob(jobId);
    setIsModalOpen(true); // Open the modal
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      resume: e.target.files[0],
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert("Application submitted successfully!");
    setIsModalOpen(false); // Close the modal after submission
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="w-full max-w-5xl p-8">
        <h1 className="text-4xl font-bold text-center text-red-600 mb-8">
          Join Our Team
        </h1>
        <ul className="space-y-6">
          {jobs.map((job) => (
            <li
              key={job.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {job.role}
              </h2>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <button
                onClick={() => handleApply(job.id)}
                className="w-auto items-center py-2 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300"
              >
                Apply Now
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Modal for application form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Apply for Job
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="resume" className="block text-gray-700">
                  Upload Resume
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  accept=".pdf, .doc, .docx"
                  required
                />
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={closeModal}
                  className="py-2 px-4 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerPage;
