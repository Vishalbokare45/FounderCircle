import React from 'react'
import { useState,useEffect } from 'react';

import client1 from './client1.png';
import client2 from './client2.png';
import client3 from './client3.png';


const AD = () => {

    const appDevelopmentTemplates = [
        {
            category: "Business Apps",
            templates: [
                {
                    img: "https://peoplemanagingpeople.com/wp-content/cache/peoplemanagingpeople.com/static/static.crozdesk.com/web-app-library-categories-providers-screenshots-000-910-330-pub-connecteam-screenshot-1704933821.png",
                    title: "Business Management App",
                    description: "Manage operations, staff, and reports with an all-in-one business app."
                },
                {
                    img: "https://topflightapps.com/wp-content/uploads/2023/08/patient-scheduling-software-metaphore.jpg",
                    title: "Appointment Scheduling App",
                    description: "Allow users to book appointments, send reminders, and manage availability."
                },
                {
                    img: "https://cfw.paymoapp.com/wp-content/uploads/2021/09/2-invoiceninja@2x.png",
                    title: "Invoicing & Finance App",
                    description: "Track income, expenses, and send invoices to clients."
                }
            ]
        },
        {
            category: "E-commerce Apps",
            templates: [
                {
                    img: "https://i0.wp.com/jmango360.com/wp-content/uploads/2021/06/Boxed-app-on-of-the-top-ecommerce-apps-for-2021.png?fit=780%2C390&ssl=1",
                    title: "Retail E-commerce App",
                    description: "Sell products with cart, checkout, and payment gateway integration."
                },
                {
                    img: "https://miro.medium.com/v2/resize:fit:1400/1*eWbNRY_UnGFJC5YqcqBSwA.jpeg",
                    title: "Food Delivery App",
                    description: "List restaurants, accept orders, and track delivery in real-time."
                },
                {
                    img: "https://cdn.shopify.com/app-store/listing_images/80b36c79c341ba709db28b0a5294fda0/desktop_screenshot/CP_u3dPvovsCEAE=.png?height=720&width=1280",
                    title: "Subscription Box App",
                    description: "Offer monthly product subscriptions with renewal and delivery management."
                }
            ]
        },
        {
            category: "Education Apps",
            templates: [
                {
                    img: "https://cdn.sanity.io/images/ordgikwe/production/790e795b5348fe828fab8002e3175e352eb9f049-1600x1200.jpg?w=1600&h=1200&auto=format",
                    title: "E-learning Platform",
                    description: "Host courses, quizzes, and track student progress."
                },
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN3_SZj2VBAJWdoJ8O5877teOmUALLj8Pt5g&s",
                    title: "School Management App",
                    description: "Manage student records, attendance, and class schedules."
                },
                {
                    img: "https://cdn.dribbble.com/userupload/14256820/file/original-6cb59c84a2b7c6672eb9e18d6fde3eba.png?format=webp&resize=400x300&vertical=center",
                    title: "Quiz & Learning App",
                    description: "Interactive quizzes, flashcards, and gamified learning."
                }
            ]
        },
        {
            category: "Utility Apps",
            templates: [
                {
                    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtdnaGlHNGuMmsurIlujWIog4dh9jNupajRA&s",
                    title: "Note Taking App",
                    description: "Organize personal and work notes with sync and tagging."
                },
                {
                    img: "https://cdn.dribbble.com/userupload/7274924/file/original-62f4f2a60e97f22afbfb3bba60e9ebc9.jpg",
                    title: "Fitness Tracker App",
                    description: "Track workouts, diet, and health metrics."
                },
                {
                    img: "https://i.pinimg.com/736x/d2/27/0c/d2270ca9d11c2fddd40343b74401e248.jpg",
                    title: "Weather & Alerts App",
                    description: "Real-time weather updates with push notifications."
                }
            ]
        }
    ];

    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", ...appDevelopmentTemplates.map((item) => item.category)];

    const filteredTemplates = selectedCategory === "All"
        ? appDevelopmentTemplates.flatMap(item => item.templates)
        : appDevelopmentTemplates.find(item => item.category === selectedCategory)?.templates || [];


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
    
    


    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        pages: '',
        timeline: '',
        appType: '',
        targetPlatform: '',
        monetizationModel: '',
        designPreference: '',
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
            const key = id || e.target.name; // For select inputs
            setFormData((prev) => ({
                ...prev,
                [key]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/asp/app/send-request', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setSuccessMessage('Form submitted successfully!');
                setFormData({
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    pages: '',
                    timeline: '',
                    appType: '',
                    targetPlatform: '',
                    monetizationModel: '',
                    designPreference: '',
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
                            <h1 class="mb-4 text-4xl font-bold tracking-tight leading-none text-gray-700 sm:px-16  md:text-5xl lg:text-6xl ">App Development
                            </h1>
                            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 ">We specialize in building high-quality, user-friendly mobile applications tailored to your business needs. Whether you need a simple app for brand presence or a complex platform with custom integrations, we deliver scalable, secure, and engaging solutions for iOS, Android, or cross-platform development. All apps are designed for performance, intuitive user experience, and seamless backend connectivity.</p>
                            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">

                            </div>
                        </div>
                    </div>

                </div>



                <div className="container mx-auto px-4 my-8">
                    <div className="p-6 max-w-7xl mx-auto">
                        <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">App Templates</h1>

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


                    <h1 className="text-3xl font-bold text-start text-gray-700 mb-8 sm:px-30">App Development Request Form</h1>

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
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                <input type="text" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
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
                                <input type="text" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                            </div>


                            <div>
                                <label for="apt" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Target Platform </label>
                                <select id="apt" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Platform Target</option>
                                    <option value="iOS">iOS</option>
                                    <option value="Android"> Android </option>
                                    <option value="Both">Both</option>

                                </select>
                            </div>

                            <div>
                                <label for="at" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select App Type </label>
                                <select id="at" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Select App Type</option>
                                    <option value="Business Apps">Business Apps</option>
                                    <option value="E-commerce Apps">E-commerce Apps</option>
                                    <option value="Education Apps">Education Apps</option>
                                    <option value="Utility Apps">Utility Apps</option>
                                </select>
                            </div>

                            <div>
                                <label for="adp" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Design Preference</label>
                                <select id="adp" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Select Design Preference</option>
                                    <option value="Template-based">Template-based</option>
                                    <option value="Custom Design">Custom Design</option>

                                </select>
                            </div>

                            <div>
                                <label for="amm" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Monetization Model</label>
                                <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Select Monetization Model</option>
                                    <option value="Paid App">Paid App</option>
                                    <option value="Free with Ads">Free with Ads</option>
                                    <option value="Subscription-based">Subscription-based</option>
                                    <option value="In-App Purchases">In-App Purchases</option>

                                </select>
                            </div>


                            <div>
                                <label for="anp" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of Pages</label>
                                <input type="number" id="anp" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                            </div>

                            <div>
                                <label for="ate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Timeline Expectation</label>
                                <input type="number" id="ate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                            </div>

                        </div>


                        <div className='mb-6'>
                            <label for="af" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Core Features Needed</label>
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


                            {/* app Type */}
                            <div>
                                <label htmlFor="webType" className="block mb-2 text-sm font-medium text-gray-900">Select App Type</label>
                                <select
                                    id="appType"
                                    value={formData.appType}
                                    onChange={handleChange}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                >

                                    <option value="">Select App Type</option>
                                    <option value="Business Apps">Business Apps</option>
                                    <option value="E-commerce Apps">E-commerce Apps</option>
                                    <option value="Education Apps">Education Apps</option>
                                    <option value="Utility Apps">Utility Apps</option>
                                </select>
                            </div>

                            {/*app target platform */}
                            <div>
                                <label htmlFor="targetPlatform" className="block mb-2 text-sm font-medium text-gray-900">App Target Platform</label>
                                <select
                                    id="targetPlatform"
                                    value={formData.targetPlatform}
                                    onChange={handleChange}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                >
                                    <option value="">Platform Target</option>
                                    <option value="ios">ios</option>
                                    <option value="Android">Android</option>
                                    <option value="Both">Both</option>

                                </select>
                            </div>



                            {/*Monetization Model*/}
                            <div>
                                <label htmlFor="monetizationModel" className="block mb-2 text-sm font-medium text-gray-900">App Target Platform</label>
                                <select
                                    id="monetizationModel"
                                    value={formData.monetizationModel}
                                    onChange={handleChange}
                                    required
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                >
                                    <option selected>Select Monetization Model</option>
                                    <option value="Paid App">Paid App</option>
                                    <option value="Free with Ads">Free with Ads</option>
                                    <option value="Subscription-based">Subscription-based</option>
                                    <option value="In-App Purchases">In-App Purchases</option>

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

export default AD