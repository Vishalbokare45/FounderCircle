import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import moment from 'moment';


const Network = () => {
    const [followings, setFollowings] = useState([]);
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");




    useEffect(() => {
        const fetchData = async () => {
            try {

                const token = localStorage.getItem('token');

                const response = await fetch('http://localhost:8080/api/follow/send-follow', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });


                if (!response.ok) {
                    throw new Error('Failed to fetch followings');
                }


                const data = await response.json();

                setFollowings(data);
            } catch (error) {
                console.error('Error fetching followings:', error);
            }
        };

        fetchData();
    }, []);



    const handleRemove = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/follow/${id}`, {
                headers: {

                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (response.status === 200) {
                setFollowings((prevFollowings) => prevFollowings.filter(following => following._id !== id));

                setSuccessMessage("Connection Remove Successfully");
                setError("");

            } else {
                throw new Error(`Failed remove connection, status code: ${response.status}`);
            }
        } catch (error) {
            setError("Failed to remove connection.");
            setSuccessMessage("");
            console.error('Error remove connection:', error);

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
        return () => clearTimeout(timer); // cleanup
    }, [error, successMessage]);


    return (
        <>

            <div className="cotainer mx-auto px-4 py-6 mt-20">

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


                {Array.isArray(followings) && followings.length > 0 ? (
                    followings.map((following) => (

                        <div key={following._id} class="w-full max-w-5xl mx-auto p-6 mb-3 bg-white rounded-xl shadow-md">
                            <div class="flex items-start">
                                <div class="relative w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
                                            <img
                                                src={following.ftimg || "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740"}
                                                alt="User"
                                                className="w-12 h-12 rounded-full object-cover"
                                            />

                                        </div>

                                <div className="ml-4 flex-1 flex items-center justify-between">
                                    <div>
                                        <h4 className="text-base font-semibold text-gray-800 ">{following.ftname}</h4>
                                        <span class="text-sm text-gray-500  mb-3 mt-0">Followed on {moment(following.createdAt).format('MMM D, YYYY, h:mm A')}</span>
                                       
                                    </div>
                                    <p className="text-sm text-red-600">
                                        <Link to="#"
                                            onClick={() => handleRemove(following._id)}>-Remove</Link>
                                    </p>
                                </div>


                            </div>
                        </div>


                    ))
                ) : (

                    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
                        <span className="font-medium"> <p>No following</p></span>
                    </div>

                )}

            </div>
        </>
    )
}

export default Network