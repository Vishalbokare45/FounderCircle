import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import NavbarS from '../Navbar';

export const Updates = () => {
  const [updates, setUpdates] = useState([]);
  const [formData, setFormData] = useState({ desc: "" });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [userProfile, setUserProfile] = useState({ name: "" });
  const modalRef = useRef(null); // Reference for the modal

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
        setUserProfile(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    getProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/api/updates";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Update Share:", data);
      setSuccessMessage("Update shared successfully");
      setError("");

      // Close modal and clear alert after 2 seconds
      setTimeout(() => {
        setSuccessMessage("");
        modalRef.current.click(); // Close the modal
      }, 2000);

    } catch (error) {
      setError(error.message);
      setSuccessMessage("");
      console.error("Error sharing update", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/updates');
        setUpdates(response.data);
      } catch (error) {
        console.error('Error fetching updates:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavbarS />
      <div className='container mt-5'>
        <div className="container px-4 py-5">
          <div className="d-grid gap-2 d-md-block text-end">
          <h6>
  <Link to="#" className="mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ textDecoration: "none", color: "#5F9EA0" }}>addUpdates</Link>
  <Link to="/updateforme" className="mx-2" style={{ textDecoration: "none", color: "#5F9EA0" }}>updatesForMe</Link>
  <Link to="/myupdates" style={{ textDecoration: "none", color: "#5F9EA0" }}>myUpdates</Link>
</h6>

          </div>

          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <form onSubmit={handleSubmit}>
                  <div className="modal-header">
                    <h3 className="modal-title fs-5" id="exampleModalLabel">
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle me-2" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                      </svg>
                      {userProfile.name}
                    </h3>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ref={modalRef}></button>
                  </div>

                  <div className="modal-body">
                    {error && <div className="alert alert-danger" role="alert">{error}</div>}
                    {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}

                    <div className="mb-3">
                      <label htmlFor="message-text" className="col-form-label">Description:</label>
                      <textarea className="form-control" id="message-text" name="desc" value={formData.desc} onChange={handleChange}></textarea>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="submit"
                      className="btn mx-2 px-4"
                      style={{ backgroundColor: "#5F9EA0", borderColor: "#5F9EA0", color: "#fff" }}
                    >
                      Share
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {Array.isArray(updates) && updates.length > 0 ? (
            updates.map((update) => (
              <div className="col-md-12" key={update._id}>
                <Link to={`/updateview/${update._id}`} className='mx-2' style={{ textDecoration: "none" }}>
                  <div className="card text-start">
                    <div className="card-header p-2">
                      <h5>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-circle me-2" viewBox="0 0 16 16">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                          <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                        </svg>
                        {update.name}
                      </h5>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        {update.desc.split(' ').slice(0, 50).join(' ') + (update.desc.split(' ').length > 50 ? '...' : '')}
                      </p>
                      <p className="card-text"><small className="text-body-secondary">{update.createdAt}</small></p>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            <p>No Updates Found.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Updates;
