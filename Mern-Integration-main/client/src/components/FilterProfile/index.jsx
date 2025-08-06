import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';
import NavbarS from '../Navbar';
const FilterProfile = () => {
  const { category } = useParams();  // Get category from URL params
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState('');


  const [followedProfiles, setFollowedProfiles] = useState(new Set());
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [followings, setFollowings] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        setLoading(true);
        setError('');

        // If category is not defined, do not append it in the query URL
        const query = category ? `/${category}` : '';

        // Make the API request
        const response = await axios.get(`http://localhost:8080/api/profile/completecat${query}`);
        setProfiles(response.data);
      } catch (err) {
        console.error('Error fetching profiles:', err);
        setError(err.response?.data?.message || 'An error occurred while fetching profiles');
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, [category]);  // Refetch when the category changes

  // if (loading) return <p>Loading profiles...</p>;
  // if (error) return <p>{error}</p>;




  useEffect(() => {
    const fetchFollowings = async () => {
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
        const followedSet = new Set(data.map(follow => follow.ftid));
        setFollowings(data);
        setFollowedProfiles(followedSet);
      } catch (error) {
        console.error('Error fetching followings:', error);
      }
    };
    fetchFollowings();
  }, []);

  const handleSubmit = async (e, profileid, profilename) => {
    e.preventDefault();

    try {
      const url = "http://localhost:8080/api/follow";
      const payload = { ftid: profileid, ftname: profilename };

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setSuccessMessage("You followed this account");
      setFollowedProfiles(prev => new Set([...prev, profileid]));

      setTimeout(() => setSuccessMessage(""), 2000);
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(""), 2000);
    }
  };

  const handleUnfollow = async (e, followId, profileid) => {
    e.preventDefault();

    try {
      const url = `http://localhost:8080/api/follow/${followId}`;
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setSuccessMessage("Connection Remove Successfully");
      setFollowedProfiles(prev => {
        const updated = new Set(prev);
        updated.delete(profileid);
        return updated;
      });

      setTimeout(() => setSuccessMessage(""), 2000);
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(""), 2000);
    }
  };

  return (
    // <div>
    //   <h1>Filtered Profiles</h1>
    //   {profiles.length > 0 ? (
    //     <ul>
    //       {profiles.map((profile) => (
    //         <li key={profile._id}>
    //           <h3>{profile.name}</h3>
    //           <p>{profile.bio}</p>
    //           <p>Category: {profile.cat}</p>
    //         </li>
    //       ))}
    //     </ul>
    //   ) : (
    //     <p>No profiles found.</p>
    //   )}
    // </div>


<>
<NavbarS />

<div className="container px-4 py-5 mt-5">
<div className="container mb-2">
{/* <h6 className="mb-3">Category: {category}</h6> */}
<h5 className="mb-3">
              <span style={{ color: '#5F9EA0' }}>Startup Profiles Category:</span>
              <span className="text-muted"> {category}</span>
            </h5>
 { error && <div className="alert alert-danger">{error}</div>}
 { successMessage && <div className="alert alert-success">{successMessage}</div> }
<div className="row">
  {profiles.length > 0 ? (
    profiles.map(profile => (
      <div className="col-md-3 mb-4" key={profile._id}>
        <Link to={`/profileview/${profile._id}`} style={{ textDecoration: "none" }}>
          <div className="card">
            <img
              src={profile.uimg}
              className="card-img-top img-fluid"
              alt="Profile"
              style={{ height: '250px', objectFit: 'cover' }}
            />
            <div className="card-body text-center">
              <h5 className="card-title mb-2">{profile.name}</h5>
              <p className="card-text mb-1">{profile.cat}</p>
              <p className="card-text mb-3">{profile.bio?.slice(0, 50) || profile.bdesc}</p>
              <div className="d-grid col-6 mx-auto">
                {followedProfiles.has(profile._id) ? (
                  <button
                    className="btn"
                    onClick={(e) => {
                      const follow = followings.find(f => f.ftid === profile._id);
                      handleUnfollow(e, follow?._id, profile._id);
                    }}
                    style={{ backgroundColor: '#D3D3D3', color: 'black' }}
                  >
                    Following
                  </button>
                ) : (
                  <button
                    className="btn"
                    onClick={(e) => handleSubmit(e, profile._id, profile.name)}
                    style={{ backgroundColor: '#5F9EA0', color: 'white' }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
          </div>
        </Link>
      </div>
    ))
  ) : (
    <p>No complete profiles found.</p>
  )}

</div>
</div>
</div>

</>
  );
};

export default FilterProfile;
