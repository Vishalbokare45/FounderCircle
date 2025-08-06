import React from 'react'
import { useState, useEffect } from 'react';


import client1 from './client1.png';
import client2 from './client2.png';
import client3 from './client3.png';


const UIUX = () => {

    const designTemplates = [
        {
            category: "Web Design",
            templates: [
                {
                    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/b646bb84879231.5d6ad0b303a1e.png",
                    title: "Corporate Website UI",
                    description: "Clean, professional UI for business websites, focused on services and trust."
                },
                {
                    img: "https://wpengine.com/wp-content/uploads/2023/02/best-agency-websites-11-1568x786-1-1024x513.png",
                    title: "Creative Agency Website",
                    description: "Modern, bold designs for agencies to showcase portfolios and attract clients."
                },
                {
                    img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f2accd171594531.66c7f8eee53d8.png",
                    title: "Educational Platform UI",
                    description: "Designed for schools and e-learning platforms with course and student focus."
                }
            ]
        },
        {
            category: "Mobile App Design",
            templates: [
                {
                    img: "https://miro.medium.com/v2/resize:fit:1400/1*EjiVGqG-EhYUHQEi0m7IHg.png",
                    title: "E-commerce App UI",
                    description: "Product listings, filters, cart, and checkout flows with a user-first approach."
                },
                {
                    img: "https://cdn.dribbble.com/userupload/7274924/file/original-62f4f2a60e97f22afbfb3bba60e9ebc9.jpg",
                    title: "Fitness Tracker App",
                    description: "Workout plans, goal tracking, and gamified UI for mobile fitness experiences."
                },
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRonhjKzqrdOWF7WpahaKIl5igXpsqI7f9zIA&s",
                    title: "Fintech App UI",
                    description: "Clean and secure financial dashboards, transactions, and account management."
                }
            ]
        },
        {
            category: "SaaS Platform UI",
            templates: [
                {
                    img: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1709826266/catalog/1319365158401798144/juesf14u02kbl7d6jlfa.webp",
                    title: "SaaS Dashboard UI",
                    description: "Analytics-driven UI with charts, cards, and user account management."
                },
                {
                    img: "/images/uiux-saas-multitenant.jpg",
                    title: "Multi-Tenant SaaS UI",
                    description: "Interface designs for scalable SaaS platforms with role-based access."
                },
                {
                    img: "https://miro.medium.com/v2/resize:fit:21224/1*TykaYg8pKWdTSVISzZE45w.jpeg",
                    title: "Subscription Management UI",
                    description: "Pricing pages, billing dashboards, and upgrade workflows for SaaS apps."
                }
            ]
        },

        {
            category: "Marketing Site",
            templates: [
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_IIO5GITq2zEW5Xm2b-Ou7bWNVBBfEVaZQ&s",
                    title: "Tech Product Landing Page",
                    description: "Hero-driven layouts with CTAs, features, testimonials, and signups."
                },
                {
                    img: "https://i.pinimg.com/736x/65/9a/bb/659abb626047cf85cd64b62008af6c60.jpg",
                    title: "App Promotion Page",
                    description: "Conversion-focused landing for promoting mobile or desktop apps."
                },
                {
                    img: "https://muffingroup.com/blog/wp-content/uploads/2022/08/Be-Consultant.png",
                    title: "Consulting Service Site",
                    description: "Credibility-focused design with service listings, case studies, and contact forms."
                }
            ]
        }
    ];


    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", ...designTemplates.map(item => item.category)];

    const filteredTemplates = selectedCategory === "All"
        ? designTemplates.flatMap(item => item.templates)
        : designTemplates.find(item => item.category === selectedCategory)?.templates || [];


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
            designType: '',
            designPreference: '',
            pages: '',
            timeline: '',
            refrenceLink: '',
            features: [],
            message: ''
        });
    
        const featureOptions = [
            'User Authentication',
            'Push Notifications',
            'Payment Integration',
            'In-app Chat',
            'Admin Panel',
            'Analytics'
        ];
    
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
                const response = await fetch('http://localhost:8080/api/asp/design/send-request', {
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
                        designType: '',
                        designPreference: '',
                        pages: '',
                        timeline: '',
                        refrenceLink: '',
                        features: [],
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
                            <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-700 sm:px-16  md:text-5xl lg:text-6xl ">UI/UX Design
                            </h1>
                            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 ">We deliver user-centered UI/UX design solutions that enhance digital product usability, accessibility, and aesthetic appeal. From wireframes to interactive prototypes and pixel-perfect UI designs, our process ensures intuitive, engaging, and brand-consistent user experiences. Whether you're building a mobile app, SaaS platform, or enterprise dashboard, we tailor designs to your users’ needs and business goals.</p>
                            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">

                            </div>
                        </div>
                    </div>

                </div>



                <div className="container mx-auto px-4 my-8">
                    <div className="p-6 max-w-7xl mx-auto">
                        <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">
                            UI/UX Design Templates
                        </h1>

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
                                    <h3 className="text-xl font-bold mb-2 text-gray-700">
                                        {template.title}
                                    </h3>
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

                    <h1 className="text-3xl font-bold text-start text-gray-700 mb-8 sm:px-30">UI/UX Design Request Form</h1>
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
                                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Design Type </label>
                                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Select Design Type</option>
                                    <option value="Web ">Web </option>
                                    <option value=" Mobile App"> Mobile App</option>
                                    <option value="SaaS">SaaS</option>
                                    <option value="Admin Panel">Admin Panel</option>
                                    <option value="Marketing Site">Marketing Site</option>
                                </select>
                            </div>

                            <div>
                                <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Design Preference</label>
                                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Select Design Preference</option>
                                    <option value="Template-based">Template-based</option>
                                    <option value="Custom Design">Custom Design</option>

                                </select>
                            </div>


                            <div>
                                <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of Pages</label>
                                <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                            </div>

                            <div>
                                <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Timeline Expectation</label>
                                <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                            </div>

                        </div>



                        
                        <div className='mb-6'>
                            <label for="full_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Refrence Link(Optional)</label>
                            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                        </div>


                        <div className='mb-6'>
                            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Core Features Needed</label>
                            <ul class="grid w-full gap-6 md:grid-cols-3">
                                <li>
                                    <input type="checkbox" id="user-authentication" value="" class="hidden peer" required="" />
                                    <label for="user-authentication" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">


                                            <div class="w-full text-sm">User Authentication</div>

                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="push-notifications" value="" class="hidden peer" />
                                    <label for="push-notifications" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">


                                            <div class="w-full text-sm"> Push Notifications</div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="payment-integration" value="" class="hidden peer" />
                                    <label for="payment-integration" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">

                                            <div class="w-full text-sm">Payment Integration</div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="in-app-chat" value="" class="hidden peer" required="" />
                                    <label for="in-app-chat" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">


                                            <div class="w-full text-sm">In-app Chat</div>

                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="admin-panel" value="" class="hidden peer" />
                                    <label for="admin-panel" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">


                                            <div class="w-full text-sm">Admin Panel</div>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <input type="checkbox" id="analytics" value="" class="hidden peer" />
                                    <label for="analytics" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 dark:peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        <div class="block">

                                            <div class="w-full text-sm">Analytics</div>
                                        </div>
                                    </label>
                                </li>
                            </ul>

                        </div>




                        <div class="relative mb-6">
                            <label for="labels-range-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white " > Budget Range</label>
                            <input id="labels-range-input" type="range" value="1000" min="100" max="1500" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
                            <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min ($100)</span>
                            <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$500</span>
                            <span class="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$1000</span>
                            <span class="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max ($1500)</span>
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

                            {/* Number of Pages */}
                            <div>
                                <label htmlFor="pages" className="block mb-2 text-sm font-medium text-gray-900">Number of Pages</label>
                                <input
                                    type="number"
                                    id="pages"
                                    value={formData.pages}
                                    onChange={handleChange}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                            </div>

                            {/* Timeline Expectation */}
                            <div>
                                <label htmlFor="timeline" className="block mb-2 text-sm font-medium text-gray-900">Timeline Expectation (in weeks)</label>
                                <input
                                    type="number"
                                    id="timeline"
                                    value={formData.timeline}
                                    onChange={handleChange}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                />
                            </div>

                            {/* Design Type */}
                            <div>
                                <label htmlFor="designType" className="block mb-2 text-sm font-medium text-gray-900">Select Design Type</label>
                                <select
                                    id="designType"
                                    value={formData.designType}
                                    onChange={handleChange}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                >
                                    <option selected>Select Design Type</option>
                                    <option value="Web ">Web </option>
                                    <option value=" Mobile App"> Mobile App</option>
                                    <option value="SaaS">SaaS</option>
                                    <option value="Admin Panel">Admin Panel</option>
                                    <option value="Marketing Site">Marketing Site</option>
                                </select>
                            </div>

                            {/* Design Preference */}
                            <div>
                                <label htmlFor="designPreference" className="block mb-2 text-sm font-medium text-gray-900">Design Preference</label>
                                <select
                                    id="designPreference"
                                    value={formData.designPreference}
                                    onChange={handleChange}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                >
                                    <option value="">Select Design Preference</option>
                                    <option value="Template-based">Template-based</option>
                                    <option value="Custom Design">Custom Design</option>
                                </select>
                            </div>
                        </div>


                         {/* Refrence Link */}
                            <div>
                                <label htmlFor="refrenceLink" className="block mb-2 text-sm font-medium text-gray-900"> Refrence Link</label>
                                <input
                                    type="text"
                                    id="refrenceLink"
                                    value={formData.refrenceLink}
                                    onChange={handleChange}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-3"
                                />
                            </div>

                        {/* Features */}
                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-medium text-gray-900">Core Features Needed</label>
                            <ul className="grid w-full gap-4 md:grid-cols-3">
                                {featureOptions.map((feature, index) => (
                                    <li key={index}>
                                        <label className="flex items-center space-x-2">
                                            <input
                                                type="checkbox"
                                                value={feature}
                                                checked={formData.features.includes(feature)}
                                                onChange={handleChange}
                                                className="w-4 h-4"
                                            />
                                            <span className="text-sm text-gray-700">{feature}</span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
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

export default UIUX