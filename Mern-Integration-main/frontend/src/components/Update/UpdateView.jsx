
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UpdateView = () => {
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
  const [profile, setprofile] = useState("");

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
      <div className="container mx-auto px-4 my-8 mt-20">
        <div className="w-full max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-md">
          <div className="flex items-start">
            <div class="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
              <img
                src={update.userimg || "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740"}
                alt="User"
                className="w-12 h-12 rounded-full object-cover"
              />

            </div>

            <div className="ml-3 flex-1">
              <h4 className="text-base font-semibold text-gray-700 "> {update.name}</h4>
              <span className="text-sm text-gray-500  mb-3 mt-0">Posted on {moment(update.createdAt).format('MMM D, YYYY, h:mm A')}</span>
              <p className="text-md text-gray-600 mb-2">
                {update.desc}
              </p>
            </div>
          </div>

          <div>
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

            <form className="w-full" onSubmit={handleSubmit}>
              <label for="chat" className="sr-only">Your comment</label>
              <div className="flex items-center px-3 py-2 rounded-lg bg-gray-50">


                <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full">
                  <img
                    src={profile.uimg || "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740"}
                    alt="User"
                    className="w-10 h-10 rounded-full object-cover"
                  />

                </div>


                <textarea
                  id="chat"
                  rows="1"
                  className="block mx-4 px-3 py-2.5 flex-1 text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  name="msg"
                  value={formData.msg}
                  onChange={handleChange}
                  placeholder="Your message..."></textarea>

                <button type="submit" className="flex items-center justify-center p-2  rounded-full  ">
               <Link  className=" py-2 px-2 font-semibold text-gray-700 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5F9EA0] md:p-0">Send</Link>
                  
                </button>
   
              </div>
            </form>


          </div>
        </div>

      </div>


      <div className="cotainer mx-auto px-4 py-6">

        {Array.isArray(comments) && comments.length > 0 ? (
          filteredComments.map((comment) => (
            <div className='mb-6 '>

              <div class="w-full max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-md">
                <div class="flex items-start">
                  <div class="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
                    <img
                      src={comment.userimg || "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740"}
                      alt="User"
                      className="w-12 h-12 rounded-full object-cover"
                    />

                  </div>

                  <div class="ml-3 flex-1">
                    <h4 class="text-base font-semibold text-gray-800 ">{comment.name}</h4>
                    <span class="text-sm text-gray-500  mb-3 mt-0">{moment(comment.date).format('MMM D, YYYY, h:mm A')}</span>
                    <p class="text-md text-gray-600 ">
                      {comment.msg}
                    </p>
                  </div>
                </div>
              </div>

            </div>



          ))
        ) : (

          <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
            <span className="font-medium"> <p>No Comments Found.</p></span>
          </div>

        )}


      </div>



    </>
  )
}

export default UpdateView