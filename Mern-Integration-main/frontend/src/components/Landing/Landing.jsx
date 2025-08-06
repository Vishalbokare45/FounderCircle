import React from 'react'
import bg from './bg.mp4'
import { Link } from 'react-router-dom'
import Logo from './integration.png'


import client1 from './client1.png';
import client2 from './client2.png';
import client3 from './client3.png';
import client4 from './client4.png';


const Landing = () => {
  // const teamMembers = [
  //   {
  //     name: "Aarav Mehta",
  //     position: "CEO & Co-Founder",
  //     img: "/images/team/aarav.jpg"
  //   },
  //   {
  //     name: "Sanya Kapoor",
  //     position: "CTO",
  //     img: "/images/team/sanya.jpg"
  //   },
  //   {
  //     name: "Rohan Desai",
  //     position: "Lead Developer",
  //     img: "/images/team/rohan.jpg"
  //   },
  //   {
  //     name: "Meera Sharma",
  //     position: "UI/UX Designer",
  //     img: "/images/team/meera.jpg"
  //   }
  // ];


  return (
    <>


      <div className='bg-white'>
        <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="#" className="flex items-center space-x-1 rtl:space-x-reverse">
              <img src={Logo} className="h-9" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-700">Integration</span>
            </Link>
            <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
              <Link to="/login">
                <button type="button" className="text-white bg-[#5F9EA0] font-medium rounded-lg text-sm px-4 py-2 text-center">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button type="button" className="text-white bg-[#5F9EA0] font-medium rounded-lg text-sm px-4 py-2 text-center">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </nav>
        <div className="relative w-full lg:h-screen md:h-[70vh] h-[50vh] bg-white mt-16 lg:mt-5">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={bg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70">
            <h1 className="text-gray-700 text-4xl md:text-5xl lg:text-6xl font-bold text-center px-4 sm:px-8">
              <span className="text-[#5F9EA0]">Integration</span> Uniting startups worldwide,
              <br /> fostering collaboration and <br /> growth in one interconnected hub.
            </h1>
          </div>
        </div>


        <div className="container mx-auto px-4 py-8 bg-white">
          {/* <h2 className="text-3xl font-bold text-gray-500 mb-2">About Integration</h2> */}

          <div className="px-4 py-4">
            <div className="flex flex-col lg:flex-row items-center gap-10">

              <div className="w-full lg:w-1/2">
                <img
                  src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Startup Support"
                  className="w-full h-auto rounded-xl shadow-md"
                />
              </div>


              <div className="w-full lg:w-1/2">
                <h5 className="text-3xl sm:text-4xl font-bold text-[#5F9EA0] mb-4 text-center lg:text-left">
                  Empowering Startups with Connections and Services
                </h5>
                <p className="text-base sm:text-lg md:text-xl font-normal text-gray-500 text-center lg:text-left">
                  Our platform is built to bridge the gap between startups, investors, and industry professionals. We not only enable profile sharing, updates, and networking — but also directly provide essential services like development, design, deployment, security, and maintenance, helping startups scale efficiently with trusted in-house support.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="container mx-auto px-4 py-8  bg-white">
          <div className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
              <h1 className="mb-2 text-4xl font-semibold tracking-tight leading-none md:text-5xl lg:text-5xl text-gray-500">
                What Our Features Include
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Startup & Investor Profiles",
                  desc: "Enable startups and investors to create detailed profiles, showcase offerings or interests, and make themselves discoverable within the network.",
                },
                {
                  title: " Connect & Follow System",
                  desc: "Users can follow each other (startups, investors, or service providers) to build meaningful connections and stay informed of updates.",
                },
                {
                  title: "Update & Announcement Sharing",
                  desc: "Startups can post updates, funding rounds, launches, and achievements — helping them stay active and visible in the ecosystem.",
                },
                {
                  title: "In-House ASP Services for Startups",
                  desc: "platform provides development, deployment, design, security, management, and maintenance services directly to startups ",
                },
                {
                  title: "Discover & Network Across Domains",
                  desc: "Smart filters help users find startups or investors in specific domains, technologies, or regions to foster collaboration and opportunity.",
                },
                {
                  title: "Platform-Verified Support & Services",
                  desc: "All services and profiles are verified by your team, ensuring credibility and trust between startups and service providers.",
                },
              ].map((card, i) => (
                <a key={i} href="#" className="block max-w-sm p-6  rounded-lg shadow-smbg-white border border-gray-200 shadow-md ">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#5F9EA0]">{card.title}</h5>
                  <p className="font-normal text-gray-500">{card.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>




        <div className="w-full px-4 py-8">
          <div className="w-full p-6 bg-[#e0f0f0]  shadow-md border rounded-md border-gray-200">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 py-8 text-gray-800">
              {[
                { number: "100+", label: "Startups" },
                { number: "150+", label: "Investors" },
                { number: "300", label: "Users" },
                { number: "9", label: "Asp/IT Services" },
                { number: "50+", label: "Team of Engineers" },
                { number: "10", label: "Projects" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center justify-center text-center">
                  <dt className="mb-2 text-3xl font-extrabold text-[#5F9EA0]">{stat.number}</dt>
                  <dd className="text-sm font-medium">{stat.label}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>




        <div className="container mx-auto px-4 py-8">
          <div className="bg-white py-12 px-6 w-full">
            <h2 className="text-3xl font-bold text-gray-500 mb-8 text-center lg:text-left">
              Our ASP/IT Services
            </h2>

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-8">

              <div className="w-full lg:w-1/2">
                <img
                  className="w-full h-72 sm:h-96 lg:h-[500px] object-cover rounded-xl shadow-lg"
                  src="https://plus.unsplash.com/premium_photo-1683134241482-4a3c44d2ab49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="ASP Services"
                />
              </div>


              <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  "Website Development",
                  "App Development",
                  "Custom Software Development",
                  "UI/UX Design",
                  "Deployment Services",
                  "Cloud Services",
                  "Security Services",
                  "Management Services",
                  "Maintenance Services",
                ].map((service, i) => (
                  <div
                    key={i}
                    className="h-32 flex items-center justify-center text-center p-4 border border-gray-200 rounded-lg shadow-md bg-white hover:shadow-lg transition duration-300"
                  >
                    <p className="text-[#5F9EA0] font-bold text-base sm:text-lg">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-gray-500 mb-5 text-center lg:text-left">
            Our Clients
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              {
                name: "GreenTech",
                image:client1,
              },
              {
                name: "Patter&Plattes",
                image:client2,
              },
              {
                name: "Aditya RE",
                image:client3,
              },
              {
                name: "Learn Sphere",
                image:client4,
              },
            ].map((client, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center">
                <img
                  src={client.image}
                  alt={client.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full mb-2 shadow-md"
                />
                <p className="text-sm sm:text-base font-medium text-gray-700">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="container mx-auto px-4 py-8">
          <Link
            to="#"
            className="bg-[#e0f0f0] text-[#5F9EA0] text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md mb-2"
          >
            <i className="bi bi-people-fill mr-1" />
            Team
          </Link>

          <h2 className="text-3xl font-extrabold text-gray-500 mb-6 ">Our Team</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover mb-3 border border-gray-200 shadow"
                />
                <h4 className="text-lg font-semibold text-gray-700">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.position}</p>
              </div>
            ))}
          </div>
        </div> */}







        {/* Footer */}
        <footer className="bg-gray-100 border-t border-gray-300 mt-12">
          <div className="max-w-screen-xl mx-auto py-10 px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="text-xl font-bold text-[#5F9EA0] mb-2">Integration</h3>
                <p className="text-gray-700">Connecting startups and IT professionals globally for innovation and growth.</p>
              </div>
              <div>
                {/* <h4 className="text-lg font-semibold text-[#5F9EA0] mb-2">Quick Links</h4>
                <ul className="text-gray-700 space-y-1">
                  <li><Link to="/" className="hover:underline">Home</Link></li>
                  <li><Link to="/about" className="hover:underline">About</Link></li>
                  <li><Link to="/services" className="hover:underline">Services</Link></li>
                  <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                </ul> */}
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#5F9EA0] mb-2">Contact Us</h4>
                <p className="text-gray-700">Email: integrationaspservice@gmail.com</p>
                <p className="text-gray-700">Phone: 7709740024</p>
                <p className="text-gray-700">Location: Mumbai(India)</p>
              </div>
            </div>
            <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-300 pt-4">
              © {new Date().getFullYear()} Integration. All rights reserved.
            </div>
          </div>
        </footer>

      </div>




    </>

  )
}

export default Landing