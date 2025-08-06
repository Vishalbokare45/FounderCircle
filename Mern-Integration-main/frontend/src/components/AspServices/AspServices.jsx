import React from 'react'
import {Link} from 'react-router-dom'

import WDI from "./wdi.png";
import ADI from "./adi.png";
import CSDI from "./csdi.png";
import UIUXI from "./uiuxi.png";
import DSI from "./dsi.png";
import CSI from "./csi.png";
import SSI from "./ssi.png";
import MSI from "./msi.png";
import MTSI from "./mtsi.png";


function AspServices() {
    return (
        <>
           
            <div className="container mx-auto px-4 my-8 mt-24">


                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 ">

                    <Link to="/wd">
                    <div class="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md ">
                        <img src={WDI} alt="WDI Icon" style={{ height: '35px', width: '35px' }} />
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700 ">

                        Website Development</h5>
                        <p class="mb-2 font-normal text-gray-500 ">Static/Dynamic Websites (Portfolio, Landing Page)</p>
                        <p class="mb-2 font-normal text-gray-500 ">E-commerce Websites</p>
                        <p class="mb-2 font-normal text-gray-500 ">Web Applications (e.g., CRM, ERP)</p>
                    </div>
                    </Link>


                    <Link to="/ad">
                    <div class="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md ">
                    <img src={ADI} alt="WDI Icon" style={{ height: '35px', width: '40px' }} />
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700 ">App Development</h5>
                        <p class="mb-2 font-normal text-gray-500 ">Mobile App Development (Android/iOS)</p>
                        <p class="mb-2 font-normal text-gray-500 ">Cross-platform Apps (Flutter/React Native)</p>
                        <p class="mb-2 font-normal text-gray-500 ">Web Applications (e.g., CRM, ERP)</p>
                        <p class="mb-2 font-normal text-gray-500 ">E-commerce</p>
                    </div>
                    </Link>


                    <Link to="/csd">
                    <div class="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md ">
                    <img src={CSDI} alt="WDI Icon" style={{ height: '35px', width: '40px' }} />
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700 ">Custom Software Development</h5>
                        <p class="mb-2 font-normal text-gray-500 ">Tailored software for specific business needs</p>
                        <p class="mb-2 font-normal text-gray-500 ">Automation tools (Inventory, Sales, HR, etc.)</p>
                        <p class="mb-2 font-normal text-gray-500 ">SaaS product development</p>
                        <p class="mb-2 font-normal text-gray-500 ">Backend APIs & Microservices</p>
                    </div>
                    </Link>

                    <Link to="/uiux">
                    <div class="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md ">
                    <img src={UIUXI} alt="WDI Icon" style={{ height: '35px', width: '35px' }} />
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700 ">UI/UX Design</h5>
                        <p class="mb-2 font-normal text-gray-500 ">Wireframes and Prototypes</p>
                        <p class="mb-2 font-normal text-gray-500 ">Mobile & Web UI design</p>
                        <p class="mb-2 font-normal text-gray-500 ">Design systems and branding</p>
                        <p class="mb-2 font-normal text-gray-500 ">Usability Testing</p>
                    </div>
                    </Link>

                    <Link to="/ds">
                    <div class="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md ">
                    <img src={DSI} alt="WDI Icon" style={{ height: '35px', width: '35px' }} />
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700 "> Deployment Services</h5>
                        <p class="mb-2 font-normal text-gray-500 ">Web/App Deployment </p>
                        <p class="mb-2 font-normal text-gray-500 ">Serverless Deployment </p>
                        <p class="mb-2 font-normal text-gray-500 ">Containerized Deployment </p>
                       
                        <p class="mb-2 font-normal text-gray-500 ">Static Website Hosting </p>
                    </div>
                    </Link>

                    <Link to="/cs">
                    <div class="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md ">
                    <img src={CSI} alt="WDI Icon" style={{ height: '35px', width: '35px' }} />
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700 ">Cloud  Services</h5>
                        <p class="mb-2 font-normal text-gray-500 ">Cloud Infrastructure Setup </p>
                        <p class="mb-2 font-normal text-gray-500 ">Cloud Storage Configuration </p>
                        <p class="mb-2 font-normal text-gray-500 ">Cloud Database Setup </p>
                      
                        <p class="mb-2 font-normal text-gray-500 ">Load Balancer Setup</p>
                    </div>
                    </Link>


                    <Link to="/ss">
                    <div class="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md ">
                    <img src={SSI} alt="WDI Icon" style={{ height: '35px', width: '35px' }} />
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700 "> Security Services</h5>
                        <p class="mb-2 font-normal text-gray-500 ">DDoS Protection Setup </p>
                        <p class="mb-2 font-normal text-gray-500 ">SSL Certificate Installation & Renewal </p>
                        <p class="mb-2 font-normal text-gray-500 ">Firewall & Network Rule Configuration </p>
                      
                    </div>
                    </Link>


                    <Link to="/ms">
                    <div class="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md ">
                    <img src={MSI} alt="WDI Icon" style={{ height: '35px', width: '35px' }} />
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700 ">Management Services</h5>
                        <p class="mb-2 font-normal text-gray-500 ">Domain Management </p>
                        <p class="mb-2 font-normal text-gray-500 ">DNS Configuration & Routing</p>
                        <p class="mb-2 font-normal text-gray-500 ">SSL Certificate Management </p>
                        <p class="mb-2 font-normal text-gray-500 ">Hosting Dashboard Management </p>
                    </div>
                    </Link>

                    <Link to="/mts">
                    <div class="max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md ">
                    <img src={MTSI} alt="WDI Icon" style={{ height: '35px', width: '35px' }} />
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-700 "> Maintenance Services</h5>
                        <p class="mb-2 font-normal text-gray-500 ">Server Monitoring & Alerts </p>
                        <p class="mb-2 font-normal text-gray-500 ">Backup & Restore Scheduling </p>
                        <p class="mb-2 font-normal text-gray-500 ">Software Updates & Patch Management </p>
                        <p class="mb-2 font-normal text-gray-500 ">Performance Tuning </p>
                    </div>
                    </Link>

                </div>





            </div>
        </>
    )
}

export default AspServices