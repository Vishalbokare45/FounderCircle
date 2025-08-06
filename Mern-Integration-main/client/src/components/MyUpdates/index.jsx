import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import NavbarS from "../Navbar";

export const MyUpdates = () => {
    const [updates, setUpdates] = useState([]);
    const [currentUpdateId, setCurrentUpdateId] = useState(null);
    const [formData, setFormData] = useState({ desc: "" });
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [alert, setAlert] = useState({ message: '', type: '' });
    const modalRef = useRef(null); // Reference for the modal close button

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
                setAlert({ message: 'Update deleted successfully!', type: 'success' });
            } else {
                throw new Error(`Failed to delete, status code: ${response.status}`);
            }
        } catch (error) {
            console.error('Error deleting update:', error);
            setAlert({ message: 'Failed to delete update.', type: 'danger' });
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
                    setSuccessMessage("");
                    setAlert({ message: '', type: '' });
                    modalRef.current.click(); // Close the modal
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
        if (alert.message) {
            setTimeout(() => {
                setAlert({ message: '', type: '' });
            }, 2000);
        }
    }, [alert]);

    return (
        <>
            <NavbarS />
            <div className="container mt-5">
                <div className="container my-5 px-4 pt-5">
                    <div className="d-grid gap-2 d-md-block text-end">
                        <h6>
                            <Link to="/updates" className="mx-2" style={{ textDecoration: "none", color: "#5F9EA0" }}>updates</Link>
                            <Link to="/updateforme" className="mx-2" style={{ textDecoration: "none", color: "#5F9EA0" }}>updatesForMe</Link>
                        </h6>

                    </div>

                    {alert.message && (
                        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                            {alert.message}
                            <button type="button" className="btn-close" onClick={() => setAlert({ message: '', type: '' })} aria-label="Close"></button>
                        </div>
                    )}

                    {Array.isArray(updates) && updates.length > 0 ? (
                        updates.map((update) => (
                            <div className="col-md-12" key={update._id}>
                                <Link to={`/updateview/${update._id}`} className='mx-2' style={{ textDecoration: "none" }}>
                                    <div className="card text-start">
                                        <div className="card-header">
                                            <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">
                                                <h5 className="d-flex align-items-center mb-2 mb-md-0">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="25"
                                                        height="25"
                                                        fill="currentColor"
                                                        className="bi bi-person-circle me-2"
                                                        viewBox="0 0 16 16"
                                                    >
                                                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                                                        />
                                                    </svg>
                                                    {update.name}
                                                </h5>
                                                <div className="d-flex">
                                                    <Link
                                                        to=""
                                                        className="mx-2 text-decoration-none "
                                                        style={{ color: "#5F9EA0" }}
                                                        data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal"
                                                        onClick={() => {
                                                            setCurrentUpdateId(update._id);
                                                            setFormData({ desc: update.desc });
                                                        }}
                                                    >
                                                        Update
                                                    </Link>

                                                    <Link
                                                        to=""
                                                        className="mx-2 text-danger text-decoration-none"
                                                        onClick={() => handleDelete(update._id)}
                                                    >
                                                        Delete
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-body">
                                            <p className="card-text">{update.desc}</p>
                                            <p className="card-text"><small className="text-body-secondary">{update.createdAt}</small></p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>No Updates Found.</p>
                    )}

                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="btn-close" ref={modalRef} data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <form onSubmit={handleSubmit}>
                                    <div className="modal-body">
                                        {error && <div className="alert alert-danger" role="alert">{error}</div>}
                                        {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}

                                        <div className="form-floating mb-3">
                                            <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" name="desc" value={formData.desc} onChange={handleChange}></textarea>
                                            <label htmlFor="floatingTextarea">Description</label>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="submit" className="btn mx-2 px-4" style={{ backgroundColor: "#5F9EA0", borderColor: "#5F9EA0", color: "#fff" }}>Update</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyUpdates;
