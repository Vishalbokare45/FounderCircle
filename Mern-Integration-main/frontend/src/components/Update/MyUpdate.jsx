import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import moment from 'moment';

const MyUpdate = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);


  const [profile, setprofile] = useState({ name: "", userimg: "" });

  const [updates, setUpdates] = useState([]);
  const [currentUpdateId, setCurrentUpdateId] = useState(null);
  const [formData, setFormData] = useState({ desc: "" });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");




  useEffect(() => {
    const getProfile = async () => {
      try {
        const url = "http://localhost:8080/api/profile/get-my-profile";
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setprofile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    getProfile();
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/updates/user', {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        setUpdates(response.data);
      } catch (error) {
        console.error('Error fetching updates:', error);
      }
    };

    fetchData();
  }, []);


  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/updates/${id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      if (response.status === 200) {
        setUpdates((prevUpdates) => prevUpdates.filter(update => update._id !== id));
        setSuccessMessage('Update deleted successfully!');
      } else {
        throw new Error(`Failed to delete, status code: ${response.status}`);
      }
    } catch (error) {
      console.error('Error deleting update:', error);
      setError('Failed to delete update.');
    }
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = `http://localhost:8080/api/updates/${currentUpdateId}`;
      const response = await axios.patch(url, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        setSuccessMessage("Update successfully saved");
        setError("");

        const updatedList = updates.map((update) =>
          update._id === currentUpdateId ? { ...update, desc: formData.desc } : update
        );
        setUpdates(updatedList);

        // Close modal and clear alert after 2 seconds
        setTimeout(() => {
          setSuccessMessage("Update successfully saved");
          setError("");
          closeModal();


        }, 2000);

      } else {
        throw new Error(`Failed to update, status code: ${response.status}`);
      }
    } catch (error) {
      setError(error.message);
      setSuccessMessage("");
      console.error("Error updating update:", error);
    }
  };



  useEffect(() => {
    let timer;
    if (error || successMessage) {
      timer = setTimeout(() => {
        setError("");
        setSuccessMessage("");
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [error, successMessage]);


  return (
    <>

      <div className="cotainer mx-auto px-4 py-8 mt-20">
        <div className='text-right'>


          <Link to="/update" className="mx-2 py-2 px-3 text-gray-700rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5F9EA0] md:p-0">Update</Link>
          <Link to="/updateforme" className="mx-2 py-2 px-3 text-gray-700rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5F9EA0] md:p-0">UpateForMe</Link>

        </div>


      </div>


      <div className="cotainer mx-auto px-4 py-8">
        {error && (
          <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
            <span className="font-medium">Error!</span> {error}
          </div>
        )}

        {successMessage && (
          <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 " role="alert">
            <span className="font-medium">Success!</span> {successMessage}
          </div>
        )}


        <div>
          {Array.isArray(updates) && updates.length > 0 ? (
            updates.map((update) => (
              <div key={update._id} className='mb-6 '>
                <Link to={`/updateview/${update._id}`}>

                  <div class="w-full max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-md">
                    <div class="flex items-start">
                      <div class="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
                        <img
                          src={update.userimg || "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740"}
                          alt="User"
                          className="w-12 h-12 rounded-full object-cover"
                        />

                      </div>
                      <div className="ml-3 flex-1 flex items-center justify-between">
                        <div>
                          <h4 class="text-base font-semibold text-gray-700 ">{update.name}</h4>
                          <span class="text-sm text-gray-500  mb-3 mt-0">Posted on {moment(update.createdAt).format('MMM D, YYYY, h:mm A')}</span>
                          <p class="text-sm text-gray-600 mb-2">
                            {update.desc.split(' ').slice(0, 50).join(' ') + (update.desc.split(' ').length > 50 ? '...' : '')}
                          </p>
                        </div>

                        <div>
                          <p>
                            <Link to="#"
                              onClick={() => {
                                openModal();
                                setCurrentUpdateId(update._id);
                                setFormData({ desc: update.desc });
                              }}
                              class="text-sm text-gray-600 mb-3 mx-2">Update</Link>
                            <Link to="#" onClick={() => handleDelete(update._id)} class="text-sm text-red-600 mb-3 mx-2">Delete</Link>

                          </p>
                        </div>


                      </div>
                    </div>
                  </div>
                </Link>
              </div>

            ))
          ) : (

            <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
              <span className="font-medium">  <p>No Updates Found.</p></span>
            </div>

          )}


        </div>








        {isOpen && (
          <div
            id="crud-modal"
            tabIndex="-1"
            aria-hidden={!isOpen}
            className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-screen  bg-opacity-50"
          >
            <div className="relative p-4 w-full max-w-md">
              <div className="relative bg-white rounded-lg shadow ">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t  border-gray-200">
                  <div class="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
                    <img
                      src={profile.uimg || "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740"}
                      alt="User"
                      className="w-12 h-12 rounded-full object-cover"
                    />

                  </div>

                  <h3 className="text-lg mx-2 font-semibold text-gray-700 ">

                    {profile.name}
                  </h3>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-700 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>

                {error && (
                  <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                    <span className="font-medium">Error!</span> {error}
                  </div>
                )}

                {successMessage && (
                  <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 " role="alert">
                    <span className="font-medium">Success!</span> {successMessage}
                  </div>
                )}

                <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Update Description
                    </label>
                    <textarea
                      id="description"
                      rows="4"
                      className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg "
                      name="desc" value={formData.desc} onChange={handleChange}
                      placeholder="Write update description here"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex justify-center items-center py-2 px-5 text-base font-medium text-white rounded-lg bg-[#5F9EA0]"
                  >

                    Update
                  </button>

                </form>
              </div>
            </div>
          </div>
        )}

      </div>


    </>
  )
}

export default MyUpdate