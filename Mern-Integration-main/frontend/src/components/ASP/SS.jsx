import React from 'react'
import { useState, useEffect } from 'react';

import client1 from './client1.png';
import client2 from './client2.png';
import client3 from './client3.png';


const SS = () => {

    const securityServiceTemplates = [
        {
            category: "Network Security",
            templates: [
                {
                    img: "https://zd-brightspot.s3.us-east-1.amazonaws.com/wp-content/uploads/2021/01/12102658/Infograpghic-1_1.png",
                    title: "Firewall Protection",
                    description: "Safeguard your network with enterprise-grade firewall rules."
                },
                {
                    img: "https://lh4.googleusercontent.com/WFQOU0xXs0DzjrtJ_ZGYdm4hWB49KDM81xVhVY3Kg3X0TBOCt5GqfUVSp0G8o1FbtVzV9DMb3lKF16qY6TLDP49swP5DfAeE6rdz0xncsxDkTg4IGBYhOsuQy6Q1d-AHPmt02wA2C71pFSfoaHAoPlk",
                    title: "Intrusion Detection System",
                    description: "Monitor traffic and detect unauthorized access attempts in real time."
                }
            ]
        },
        {
            category: "Application Security",
            templates: [
                {
                    img: "https://purplesec.us/wp-content/uploads/2020/10/what-is-a-penetration-test.png",
                    title: "Penetration Testing",
                    description: "Simulate attacks to uncover security vulnerabilities in applications."
                },
                {
                    img: "https://appsierra-site.s3.ap-south-1.amazonaws.com/menskool_Blog_e7e7a061ec.jpg",
                    title: "Static Code Analysis",
                    description: "Scan source code for security flaws before deployment."
                }
            ]
        },
        {
            category: "Cloud Security",
            templates: [
                {
                    img: "https://storage.googleapis.com/gweb-cloudblog-publish/images/Security_Monitoring_in_Google_Cloud_-_How_.max-2200x2200.png",
                    title: "Cloud Security Monitoring",
                    description: "Continuously monitor and protect your cloud infrastructure."
                },
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa8ipauDSrMQEFh-TTnw8bVn8FhIiJD2r2qg&s",
                    title: "Cloud Data Encryption",
                    description: "Encrypt sensitive data stored in cloud services to ensure confidentiality."
                }
            ]
        }
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", ...securityServiceTemplates.map(item => item.category)];

    const filteredTemplates = selectedCategory === "All"
        ? securityServiceTemplates.flatMap(item => item.templates)
        : securityServiceTemplates.find(item => item.category === selectedCategory)?.templates || [];



    const clients = [
            {
                name: "GreenTech ",
                industry: "Tech Startups",
                logo: client1,
            },
            {
                name: "LearnSpere",
                industry: "Edu Startup",
                logo: client2,
            },
            {
                name: "Aditya RE",
                industry: "Business",
                logo: client3,
            },
            // {
            //     name: "LearnWell Academy",
            //     industry: "Education",
            //     logo: "/images/learnwell-academy-logo.jpg",
            // },
            // {
            //     name: "FitLife Gym",
            //     industry: "Fitness",
            //     logo: "/images/fitlife-gym-logo.jpg",
            // },
            // {
            //     name: "UrbanConsult",
            //     industry: "Consulting",
            //     logo: "/images/urban-consult-logo.jpg",
            // }
        ];
    
    
        const teamMembers = [
            {
                name: "Atharva Patekar",
                position: "Devops Eng",
                image: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
            },
            {
                name: "Kaustubh Bankar",
                position: "Lead Developer",
                image: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
            },
            {
                name: "Shlok Lad",
                position: "Designer",
                image: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
            },
            {
                name: "Aditya Wadje",
                position: "Project Manager",
                image: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
            },
            {
                name: "Vaibhav Solunke",
                position: "Marketing Specialist",
                image: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
            },
            {
                name: "Aditya Salkar",
                position: "Lead Developer",
                image: "https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg?semt=ais_hybrid&w=740",
            }
        ];
    
    
    //form
            const [error, setError] = useState("");
            const [successMessage, setSuccessMessage] = useState("");
        
            const [formData, setFormData] = useState({
                name: '',
                company: '',
                email: '',
                phone: '',
                serviceType: '',
                serviceProvider: '',
            
                message: ''
            });
        
        
        
            const handleChange = (e) => {
                const { id, value, type, checked } = e.target;
        
                if (type === 'checkbox') {
                    setFormData((prev) => ({
                        ...prev,
                        features: checked
                            ? [...prev.features, value]
                            : prev.features.filter((item) => item !== value)
                    }));
                } else {
                    setFormData((prev) => ({ ...prev, [id]: value }));
                }
            };
        
            const handleSubmit = async (e) => {
                e.preventDefault();
        
                try {
                    const response = await fetch('http://localhost:8080/api/asp/security/send-request', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(formData)
                    });
        
                    const data = await response.json();
        
                    if (response.ok) {
                        setSuccessMessage('Form submitted successfully!');
                        // reset
                        setFormData({
                            name: '',
                            company: '',
                            email: '',
                            phone: '',
                            serviceType: '',
                            serviceProvider: '',
                            
                            message: ''
                        });
                    } else {
                        setError('Error: ' + data.error);
                    }
                } catch (error) {
                    console.error('Submission error:', error);
                    setError('Something went wrong. Please try again later.');
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
                return () => clearTimeout(timer);
            }, [error, successMessage]);
        
    return (
        <>
           
            <div className="container mx-auto px-4 my-8 mt-20">

                <div className="contianer mx-auto px-4 py-8">
                    <div class="bg-white ">
                        <div class="py-8 px-4 mx-auto max-w-screen-xl text-start lg:py-16">
                            <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-700 sm:px-16  md:text-5xl lg:text-6xl ">Security Services
                            </h1>
                            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 ">We provide end-to-end application and infrastructure security solutions to protect digital assets from cyber threats and ensure compliance. From setting up SSL certificates to configuring firewalls, DDoS protection, and security monitoring, our services are designed for proactive defense and rapid incident response.</p>
                            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">

                            </div>
                        </div>
                    </div>

                </div>


                <div className="container mx-auto px-4 my-8">
                    <div className="p-6 max-w-7xl mx-auto">
                        <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">Security Services</h1>

                        <div className="flex flex-wrap gap-3 mb-10 justify-center">
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold transition ${selectedCategory === category
                                            ? "bg-[#5F9EA0] text-white"
                                            : "bg-gray-200 text-gray-700 hover:bg-blue-100"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredTemplates.map((template, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition p-4 flex flex-col"
                                >
                                    <img
                                        src={template.img}
                                        alt={template.title}
                                        className="w-full h-40 object-cover mb-4 rounded-lg"
                                    />
                                    <h3 className="text-xl font-bold mb-2 text-gray-700">{template.title}</h3>
                                    <p className="text-gray-500 text-sm">{template.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="contianer mx-auto px-4 my-8">
                    <div className="p-6 max-w-7xl mx-auto">
                        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Our Clients</h2>


                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {clients.map((client, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                                    <img src={client.logo} alt={client.name} className="w-32 h-32 object-contain mb-4 mx-auto" />
                                    <h3 className="text-xl font-bold text-center text-gray-700">{client.name}</h3>
                                    <p className="text-sm text-gray-500 text-center">{client.industry}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>


                <div className="container mx-auto px-4 my-8">

                    <h1 className="text-3xl font-bold text-start text-gray-700 mb-8 sm:px-30">Security Service Request Form</h1>

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

                    {/* <form class="max-w-3xl mx-auto">
                        <div class="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label for="full_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                            </div>

                            <div>
                                <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                                <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
                            </div>


                            <div >
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                                <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                            </div>
                            <div>
                                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                                <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                            </div>




                            <div>
                                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Security Service Type </label>
                                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Select Security Service Type</option>
                                    <option value="DDoS Protection">DDoS Protection</option>
                                    <option value=" SSL Setup"> SSL Setup</option>
                                    <option value="Firewall Config">Firewall Config</option>
                                    <option value="Vulnerability Scanning ">Vulnerability Scanning </option>
                                    <option value="Other ">Other</option>
                                </select>
                            </div>

                            <div>
                                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Hosting Provider</label>
                                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Select Current Hosting Provider</option>
                                    <option value="AWS">AWS</option>
                                    <option value="Azure">Azure</option>
                                    <option value="Firebase">Firebase</option>
                                    <option value="DigitalOcean">DigitalOcean</option>
                                    <option value="Other">Other</option>

                                </select>
                            </div>


        
                        </div>




                        <div className='mb-6'>
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                        </div>


                        <button type="submit" class="text-white bg-[#5F9EA0]  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Submit</button>
                    </form> */}






                    <form className="max-w-4xl mx-auto" onSubmit={handleSubmit}>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                            </div>

                            {/* Company */}
                            <div>
                                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">Company</label>
                                <input
                                    type="text"
                                    id="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone</label>
                                <input
                                    type="text"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                            </div>

                      


                            {/*  Security Service Type */}
                            <div>
                                <label htmlFor="serviceType" className="block mb-2 text-sm font-medium text-gray-900">Select Security Service Type</label>
                                <select
                                    id="serviceType"
                                    value={formData.serviceType}
                                    onChange={handleChange}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                >
                                       <option selected>Select Security Service Type</option>
                                    <option value="DDoS Protection">DDoS Protection</option>
                                    <option value=" SSL Setup"> SSL Setup</option>
                                    <option value="Firewall Config">Firewall Config</option>
                                    <option value="Vulnerability Scanning ">Vulnerability Scanning </option>
                                    <option value="Other ">Other</option>
                                </select>
                            </div>

                            {/* Service Provider */}
                            <div>
                                <label htmlFor="serviceProvider" className="block mb-2 text-sm font-medium text-gray-900">Current Hosting Provider</label>
                                <select
                                    id="serviceProvider"
                                    value={formData.serviceProvider}
                                    onChange={handleChange}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                >
                                     <option selected>Select Current Hosting Provider</option>
                                    <option value="AWS">AWS</option>
                                    <option value="Azure">Azure</option>
                                    <option value="Firebase">Firebase</option>
                                    <option value="DigitalOcean">DigitalOcean</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        

                            </div>
                    

                        {/* Message */}
                        <div className="mb-6">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                            <textarea
                                id="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Write your thoughts here..."
                                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="text-white bg-[#5F9EA0] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                            Submit
                        </button>
                    </form>
                </div>



                <div className="container mx-auto px-4 py-8">
                    <div className="p-6 max-w-7xl mx-auto">
                        <h2 className="text-2xl font-bold text-center mb-6">Our Team</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {teamMembers.map((member, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition text-center">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                                    />
                                    <h3 className="text-xl font-bold">{member.name}</h3>
                                    <p className="text-sm text-gray-600">{member.position}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>




            </div>
        </>
    )
}

export default SS