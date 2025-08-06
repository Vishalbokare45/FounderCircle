import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import NavbarS from '../Navbar';
export const MyNetwork = () => {
  const [followings, setFollowings] = useState([]);
  const [alert, setAlert] = useState({ message: '', type: '' });


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
            setAlert({ message: 'Connection Remove Successfully', type: 'success' });

        
        } else {
            throw new Error(`Failed remove connection, status code: ${response.status}`);
        }
    } catch (error) {
        console.error('Error remove connection:', error);
        setAlert({ message: 'Failed to remove connection.', type: 'danger' });
    }
};


useEffect(() => {
  if(alert.message) {
      setTimeout(() => {
          setAlert({ message: '', type: '' });
      }, 2000);
  }
},[alert] );

  return (

    <>
      <NavbarS />
      <div className='container mt-5'>
        <div className='container px-4 py-5'>
        {alert.message && (
                        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                            {alert.message}
                            <button type="button" className="btn-close" onClick={() => setAlert({ message: '', type: '' })} aria-label="Close"></button>
                        </div>
                    )}
          {Array.isArray(followings) && followings.length > 0 ? (
            followings.map((following) => (
             
              <div className="col-md-12 mb-3 " key={following._id}>

                <div class="card">
                  <div class="card-body">
                    <div className="d-flex align-items-center justify-content-between" style={{ gap: '5px' }}>
                      <p className="mb-0">{following.ftname}</p>
                      <Link  className="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" style={{ marginLeft: '10px' }}
                      onClick={() => handleRemove(following._id)}>
                        -remove
                      </Link>
                    </div>

                    <p ><small class="text-body-secondary ">{following.date}</small></p>
                  </div>
                </div>


             
              </div>

            ))
          ) : (
            <p>No following</p>
          )}



        </div>

      </div>







    </>
  )
}

export default MyNetwork;