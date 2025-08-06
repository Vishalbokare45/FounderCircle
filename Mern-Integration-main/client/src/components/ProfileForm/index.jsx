import React, { useEffect, useState } from "react";

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    bio: "",
    act: "",
    phone: "",
    image: null,
    cat: "",
    add: "",
    web: "",
    eyear: "",
    pone: "",
    pnone: "",
    ptwo: "",
    pntwo: "",
    pthree: "",
    pnthree: "",
    btitle: "",
    bdesc: "",

    tm: "",
    cp: "",
    sms: "",
    bm: "",
    mjc: "",
    cad: "",
    tp: "",
    fdesc: "",
    rev: "",
    expen: "",
    net: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = "http://localhost:8080/api/profile/edit-my-profile";
      const formDataUpload = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataUpload.append(key, value);
      });

      const response = await fetch(url, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formDataUpload,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Profile updated:", data);
      setSuccessMessage("Profile updated successfully");
      setError("");
    } catch (error) {
      setError(error.message);
      setSuccessMessage("");
      console.error("Error updating profile:", error);
    }
  };

  useEffect(() => {
    const getProfile = async () => {
      try {
        const url = "http://localhost:8080/api/profile/get-my-profile";
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    getProfile();
  }, []);


  useEffect(() => {
    if (successMessage || error) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setError("");
      }, 2000);


      return () => clearTimeout(timer);
    }
  }, [successMessage, error]);
  return (
    <div className='container mt-5'>
      <div class="container px-4 py-3">
        {error && <div className="alert alert-danger" role="alert">{error}</div>}
        {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}

        <div className="card text-center p-2 " style={{ color: "#5F9EA0", border: "none" }}>
  <h4 className="card-title">Update Profile Details</h4>
</div>



        <div className="container py-2">
          <h6  style={{ color: "#5F9EA0" }}>Basic Profile Details </h6>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="form-floating mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                id="floatingName"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <label htmlFor="floatingName">Name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                id="floatingEmail"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <label htmlFor="floatingEmail">Email</label>
            </div>

            <div className="form-file mb-3">
              <input
                type="file"
                name="image"
                className="form-file-input"
                id="inputImage"
                accept="image/*"
                onChange={handleChange}
              />
              <label className="form-file-label" htmlFor="inputImage">
                Choose image...
              </label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                name="phone"
                className="form-control"
                id="floatingPhone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <label htmlFor="floatingPhone">Phone</label>
            </div>

            <div className="form-floating mb-3">
              <textarea
                name="bio"
                className="form-control"
                id="floatingBio"
                placeholder="Bio"
                value={formData.bio}
                onChange={handleChange}
                style={{ height: "100px" }}
              ></textarea>
              <label htmlFor="floatingBio">Bio</label>
            </div>

            <div className="form-floating mb-3">
              <select
                className="form-select"
                id="floatingAct"
                name="act"
                value={formData.act}
                onChange={handleChange}
                aria-label="Floating label select example"
              >
                <option value="" disabled>Select Account Type</option>
                <option value="User/Business">User/Business</option>
                <option value="Startup">Startup</option>
              </select>
              <label htmlFor="floatingAct">Account Type</label>
            </div>

            <h6 style={{ color: "#5F9EA0" }}>Basic Business Details</h6>


            <div className="form-floating mb-3">
              <select
                className="form-select"
                id="floatingCat"
                name="cat"
                value={formData.cat}
                onChange={handleChange}
                aria-label="Floating label select example"
              >
                <option value="" disabled>Select Category</option>
                <option value="Technology">Technology</option>
                <option value="ECommerce">E-commerce</option>
                <option value="Fintech">Fintech</option>
                <option value="HealthTech">HealthTech</option>
                <option value="EdTech">EdTech</option>
                <option value="GreenTech">GreenTech</option>
                <option value="FoodTech">FoodTech</option>
                <option value="RealEstatePropTech">Real Estate/PropTech</option>
                <option value="TravelTourism">Travel & Tourism</option>
                <option value="SocialMediaNetworking">Social Media & Networking</option>
              </select>
              <label htmlFor="floatingCat">Select Business Category</label>
            </div>


            <div className="form-floating mb-3">
              <input
                type="text"
                name="add"
                className="form-control"
                id="floatingAddress"
                placeholder="Address"
                value={formData.add}
                onChange={handleChange}
              />
              <label htmlFor="floatingAddress">Address</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="number"
                name="eyear"
                className="form-control"
                id="floatingEstablishedYear"
                placeholder="Established Year"
                value={formData.eyear}
                onChange={handleChange}
              />
              <label htmlFor="floatingEstablishedYear">Established Year</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                name="web"
                className="form-control"
                id="floatingWebsite"
                placeholder="Website"
                value={formData.web}
                onChange={handleChange}
              />
              <label htmlFor="floatingWebsite">Website</label>
            </div>


            <h6 style={{ color: "#5F9EA0" }}>Business People Details</h6>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="pone"
                className="form-control"
                id="floatingPone"
                placeholder="Position one"
                value={formData.pone}
                onChange={handleChange}
              />
              <label htmlFor="floatingPone">Position one</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                name="pnone"
                className="form-control"
                id="floatingPnone"
                placeholder="Position one name"
                value={formData.pnone}
                onChange={handleChange}
              />
              <label htmlFor="floatingPnone">Position one name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                name="ptwo"
                className="form-control"
                id="floatingPtwo"
                placeholder="Position two"
                value={formData.ptwo}
                onChange={handleChange}
              />
              <label htmlFor="floatingPtwo">Position two</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                name="pntwo"
                className="form-control"
                id="floatingPntwo"
                placeholder="Position two name "
                value={formData.pntwo}
                onChange={handleChange}
              />
              <label htmlFor="floatingPntwo">Position two name</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                name="pthree"
                className="form-control"
                id="floatingPthree"
                placeholder="Position three"
                value={formData.pthree}
                onChange={handleChange}
              />
              <label htmlFor="floatingPthree">Position three</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                name="pnthree"
                className="form-control"
                id="floatingPnthree"
                placeholder="Position three name"
                value={formData.pnthree}
                onChange={handleChange}
              />
              <label htmlFor="floatingPnthree">Position three name</label>
            </div>


            <h6 style={{ color: "#5F9EA0" }}>Business Details</h6>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="btitle"
                className="form-control"
                id="floatingBtitle"
                placeholder="Business Title"
                value={formData.btitle}
                onChange={handleChange}
              />
              <label htmlFor="floatingBtitle">Business Title</label>
            </div>

            <div className="form-floating mb-3">
              <textarea
                name="bdesc"
                className="form-control"
                id="floatingBdesc"
                placeholder="Business Description"
                value={formData.bdesc}
                onChange={handleChange}
                style={{ height: "100px" }}
              ></textarea>
              <label htmlFor="floatingBdesc">Business Description</label>
            </div>



            <div className="form-floating mb-3">
              <input
                type="text"
                name="tm"
                className="form-control"
                id="floatingTm"
                placeholder="Target Market"
                value={formData.tm}
                onChange={handleChange}
              />
              <label htmlFor="floatingTm">Target Market</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                name="cp"
                className="form-control"
                id="floatingCp"
                placeholder="Competitive Positioning"
                value={formData.cp}
                onChange={handleChange}
              />
              <label htmlFor="floatingCp">Competitive Positioning</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                name="sms"
                className="form-control"
                id="floatingSms"
                placeholder="Sales/Marketing Strategies"
                value={formData.sms}
                onChange={handleChange}
              />
              <label htmlFor="floatingSms">Sales/Marketing Strategies</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                name="bm"
                className="form-control"
                id="floatingBm"
                placeholder="Business Model"
                value={formData.bm}
                onChange={handleChange}
              />
              <label htmlFor="floatingBm">Business Model</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                name="mjc"
                className="form-control"
                id="floatingMjc"
                placeholder="Major Customers"
                value={formData.mjc}
                onChange={handleChange}
              />
              <label htmlFor="floatingMjc">Major Customers</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                name="cad"
                className="form-control"
                id="floatingCad"
                placeholder="Competitive Advantages"
                value={formData.cad}
                onChange={handleChange}
              />
              <label htmlFor="floatingCad">Competitive Advantages</label>
            </div>

            <h6 style={{ color: "#5F9EA0" }}>Business Finance Details</h6>
            <div className="form-floating mb-3">
              <input
                type="text"
                name="tp"
                className="form-control"
                id="floatingTp"
                placeholder="Time Duration"
                value={formData.tp}
                onChange={handleChange}
              />
              <label htmlFor="floatingTp">Time Duration</label>
            </div>

            <div className="form-floating mb-3">
              <textarea
                name="fdesc"
                className="form-control"
                id="floatingFdesc"
                placeholder="Financial Description"
                value={formData.fdesc}
                onChange={handleChange}
                style={{ height: "100px" }}
              ></textarea>
              <label htmlFor="floatingFdesc">Financial Description</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                name="rev"
                className="form-control"
                id="floatingRev"
                placeholder="Revenue"
                value={formData.rev}
                onChange={handleChange}
              />
              <label htmlFor="floatingRev">Revenue</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                name="expen"
                className="form-control"
                id="floatingExpen"
                placeholder="Expenses"
                value={formData.expen}
                onChange={handleChange}
              />
              <label htmlFor="floatingExpen">Expenses</label>
            </div>

            <div className="form-floating mb-3">
              <input
                type="text"
                name="net"
                className="form-control"
                id="floatingNet"
                placeholder="Net Profit"
                value={formData.net}
                onChange={handleChange}
              />
              <label htmlFor="floatingNet">Net Profit</label>
            </div>

            <button
              type="submit"
              className="btn my-2 px-4"
              style={{ backgroundColor: '#5F9EA0', borderColor: '#5F9EA0', color: '#fff' }}
            >
              Update Profile
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;




