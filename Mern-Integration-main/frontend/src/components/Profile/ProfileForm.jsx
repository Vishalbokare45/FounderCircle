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

      <div className='container mx-auto px-4 py-8 mt-20'>

        <div className="mx-auto px-4 ">
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
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="name" className="block mb-2 text-sm font-medium text-gray-700 ">Name</label>
                <input className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required />
              </div>
              <div>
                <label for="act" className="block mb-2 text-sm font-medium text-gray-700 ">Account Type</label>
                <select className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  id="act"
                  name="act"
                  value={formData.act}
                  onChange={handleChange}>
                  <option selected>Select Account Type</option>
                  <option value="Startup">Startup</option>
                  <option value="User">User(Buinsness,Investor)</option>
                </select>
              </div>
              <div>

                <label className="block mb-2 text-sm font-medium text-gray-700 " for="file_input">Upload file</label>
                <input className="block w-full  p-2.5 text-sm text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none  " aria-describedby="file_input_help"
                  type="file"
                  id="inputImage"
                  name="image"
                  accept="image/*"
                  onChange={handleChange} />
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>

              </div>
              <div >
                <label for="email" className="block mb-2 text-sm font-medium text-gray-700 ">Email address</label>
                <input id="email"
                  type="email"
                  name="email"
                  classNameName="form-control"
                  value={formData.email}
                  onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="integration@mail.com" required />
              </div>

              <div>
                <label for="phone" className="block mb-2 text-sm font-medium text-gray-700 ">Phone number</label>
                <input id="phone" type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="123-45-678"  required />
              </div>
              <div>
                <label for="website" className="block mb-2 text-sm font-medium text-gray-700 ">Website URL</label>
                <input id="website"
                  type="url"
                  name="web"
                  value={formData.web}
                  onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="integration.com" required />
              </div>

            </div>

            <div className="mb-6">
              <label for="bio" className="block mb-2 text-sm font-medium text-gray-700 ">Bio</label>
              <textarea id="bio" name="bio"
                value={formData.bio}
                onChange={handleChange} rows="3" className="block p-2.5 w-full text-sm text-gray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write about you"></textarea>
            </div>


            <p>Buisness Details</p>
            <div className="grid gap-6 mb-6 md:grid-cols-2">

              <div>
                <label for="cat" className="block mb-2 text-sm font-medium text-gray-700 ">Buisness Category</label>
                <select id="cat" name="cat"
                  value={formData.cat}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                  <option selected>Select Buisness Category</option>
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
              </div>


              <div>
                <label for="eyear" className="block mb-2 text-sm font-medium text-gray-700 ">Founded Year</label>
                <input id="name" type="number" name="eyear" value={formData.eyear}
                  onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="yyyy" required />
              </div>

            </div>

            <div classNameName='mb-6'>
              <label for="bdesc" className="block mb-2 text-sm font-medium text-gray-700 ">Buisness Description</label>
              <textarea id="bdesc" name="bdesc" value={formData.bdesc}
                onChange={handleChange} rows="3" className="block p-2.5 w-full text-sm text-gray-700 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="Write about your business"></textarea>
            </div>


            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="tm" className="block mb-2 text-sm font-medium text-gray-700 ">Target Market</label>
                <input id="tm" type="text"
                  name="tm" value={formData.tm}
                  onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
              </div>

              <div>
                <label for="cp" className="block mb-2 text-sm font-medium text-gray-700 ">Customer Problem</label>
                <input id="cp" type="text"
                  name="cp" value={formData.cp}
                  onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
              </div>

              <div>
                <label for="sms" className="block mb-2 text-sm font-medium text-gray-700 ">Sales/Marketing Strategy</label>
                <input id="sms" type="text"
                  name="sms" value={formData.sms}
                  onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
              </div>

              <div>
                <label for="bm" className="block mb-2 text-sm font-medium text-gray-700 ">Business Model</label>
                <input id="bm" type="text"
                  name="bm"
                  value={formData.bm}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
              </div>

              <div>
                <label for="mjc" className="block mb-2 text-sm font-medium text-gray-700 ">Major Competitors</label>
                <input id="mjc" type="text" value={formData.mjc}
                  onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
              </div>

              <div>
                <label for="cad" className="block mb-2 text-sm font-medium text-gray-700 ">Competitive Advantage</label>
                <input id="cad"
                  type="text"
                  value={formData.cad}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
              </div>


            </div>

            <p>Buinsess Finace Detail</p>

            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="tp" className="block mb-2 text-sm font-medium text-gray-700 ">Financial Year</label>
                <input id="tp" type="text" value={formData.tp}
                  onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="" required />
              </div>

              <div>
                <label for="fdesc" className="block mb-2 text-sm font-medium text-gray-700 ">Financial Description</label>
                <input id="fdesc" type="text" value={formData.fdesc}
                  onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required />
              </div>

            </div>

            <div className="grid gap-6 mb-6 md:grid-cols-3">
              <div>
                <label for="rev" className="block mb-2 text-sm font-medium text-gray-700 ">Revenue</label>
                <input id="rev" type="text" value={formData.rev}
                  onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required />
              </div>
              <div>
                <label for="expen" className="block mb-2 text-sm font-medium text-gray-700 ">Expenditure</label>
                <input id="expen" type="text" value={formData.expen}
                  onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required />
              </div>
              <div>
                <label for="net" className="block mb-2 text-sm font-medium text-gray-700 ">Net Profit</label>
                <input id="net" type="text" value={formData.net}
                  onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John" required />
              </div>


            </div>



            <button type="submit" className="text-white bg-[#5F9EA0] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
          </form>



        </div>
      </div>
    </>
  )
}

export default ProfileForm