

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';


export const UpdateView = () => {
  const { id } = useParams();
  const [update, setUpdate] = useState({});

  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    uid: id,
    msg: "",
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


  useEffect(() => {
    const fetchUpdate = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/updates/${id}`);
        if (response.ok) {
          const data = await response.json();
          setUpdate(data);
        } else {
          throw new Error('Faild to fetch update');
        }

      } catch (error) {
        console.error('Error fecthing update:', error);

      }
    };
    fetchUpdate();
  }, [id]);


  //comment part
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const commentFormData = { ...formData, uid: id };

      const url = "http://localhost:8080/api/comment";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(commentFormData),

      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("comment share:", data);
      setSuccessMessage("comment add successfully");
      setError("");
    } catch (error) {
      setError(error.message);
      setSuccessMessage("");
      console.log("Error adding comment:", error);

    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/comment');
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);

      }
    };
    fetchData();
  }, []);

  const filteredComments = comments.filter(comments => comments.uid === id);

  return (
    <>
      <div className="coantiner mt-5">
        <div className="container my-4">
          {error && <div className="alert alert-danger" role="alert">{error}</div>}
          {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}
          <div class="card  text-start">
            <div class="card-header p-2">

              <h5><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person-circle me-2" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
              </svg>{update.name}</h5>
            </div>
            <div class="card-body">

              <p class="card-text">{update.desc}</p>
              <p class="card-text"><small class="text-body-secondary">{update.createdAt} </small></p>

            </div>


            <form onSubmit={handleSubmit}>

              <div class="card-footer ">
                <div className=" d-flex align-items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="gray"
                    className="bi bi-person-circle me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fillRule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>

                  <div className="form-floating flex-grow-1">
                    <textarea
                      className="form-control"
                      placeholder="Leave a comment here"
                      id="floatingTextarea"
                      name="msg"
                      value={formData.msg}
                      onChange={handleChange}
                    ></textarea>
                    <label htmlFor="floatingTextarea">Comments</label>
                  </div>
                  <button
                    type="submit"
                    className="btn mx-2 px-4"
                    style={{ backgroundColor: "#5F9EA0", borderColor: "#5F9EA0", color: "#fff" }}
                  >
                    Add
                  </button>

                </div>

              </div>
            </form>
          </div>


          <div className='my-2'>
            {Array.isArray(comments) && comments.length > 0 ? (
              filteredComments.map((comment) => (


                <div class="card mb-3">
                  <div class="card-body">
                    <div class="d-flex align-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="gray"
                        class="bi bi-person-circle me-2"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                          fill-rule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                      </svg>
                      <h6 class="mb-0 text-secondary">{comment.name}</h6>
                    </div>

                    <p class="text-start m-2 mb-0">
                      {comment.msg}
                    </p>

                    <small class="text-body-secondary text-end d-block">{comment.date}</small>
                  </div>
                </div>

              ))
            ) : (
              <p>No Comments Found.</p>
            )}


          </div>


        </div>
      </div>

    </>
  )
}


export default UpdateView;