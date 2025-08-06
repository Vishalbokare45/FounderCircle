const express = require('express');
const router = express.Router();

const nodemailer = require("nodemailer");
require("dotenv").config();

// Route to handle form submissions
router.post('/wd/send-request', async (req, res) => {
  const {
    name,
    company,
    email,
    phone,
    webType,
    designPreference,
    pages,
    timeline,
    features,
    message
  } = req.body;

  // Email configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
    }
  });

  const mailOptions = {
    from: email,
    to: 'integrationmernproject@gmail.com', // <-- Replace with the email where you want to receive the request
    subject: 'Website Development Request',
    html: `
      <h2>Website Development Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Web Type:</strong> ${webType}</p>
      <p><strong>Design Preference:</strong> ${designPreference}</p>
      <p><strong>Pages:</strong> ${pages}</p>
      <p><strong>Timeline:</strong> ${timeline} weeks</p>
      <p><strong>Core Features:</strong> ${features?.join(', ')}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  };


  //  console.log("Sending email with data:", {
  //   name, company, email, phone, webType, designPreference, pages, timeline, features, message
  // });


  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Request sent successfully!' });
  } catch (error) {
    console.error('Error sending mail:', error);
    res.status(500).json({ error: 'Failed to send request. Please try again later.' });
  }
});




router.post('/app/send-request', async (req, res) => {
  const {
    name,
    company,
    email,
    phone,
    pages,
    timeline,
    appType,
    targetPlatform,
    monetizationModel,
    designPreference,
    features,
    message
  } = req.body;

  // Setup email transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // your email (e.g., youremail@gmail.com)
      pass: process.env.EMAIL_PASS, // app-specific password
    }
  });

  const mailOptions = {
    from: email,
    to: 'integrationmernproject@gmail.com', // Change to your desired receiver
    subject: 'New App Development Request',
    html: `
      <h2>App Development Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Number of Pages (Screens):</strong> ${pages}</p>
      <p><strong>Timeline:</strong> ${timeline} weeks</p>
      <p><strong>App Type:</strong> ${appType}</p>
      <p><strong>Target Platform:</strong> ${targetPlatform}</p>
      <p><strong>Monetization Model:</strong> ${monetizationModel}</p>
      <p><strong>Design Preference:</strong> ${designPreference}</p>
      <p><strong>Features:</strong> ${features?.join(', ')}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  };

  console.log('App Request Submission:', {
    name,
    company,
    email,
    phone,
    pages,
    timeline,
    appType,
    targetPlatform,
    monetizationModel,
    designPreference,
    features,
    message
  });

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Request sent successfully!' });
  } catch (error) {
    console.error('Error sending mail:', error);
    res.status(500).json({ error: 'Failed to send request. Please try again later.' });
  }
});





router.post('/software/send-request', async (req, res) => {
  const {
    name,
    company,
    email,
    phone,
    softwareType,
    designPreference,
    pages,
    timeline,
    features,
    message
  } = req.body;

  // Email configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
    }
  });

  const mailOptions = {
    from: email,
    to: 'integrationmernproject@gmail.com', // <-- Replace with the email where you want to receive the request
    subject: 'Custom Software Development Request',
    html: `
      <h2>Website Development Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Web Type:</strong> ${softwareType}</p>
      <p><strong>Design Preference:</strong> ${designPreference}</p>
      <p><strong>Pages:</strong> ${pages}</p>
      <p><strong>Timeline:</strong> ${timeline} weeks</p>
      <p><strong>Core Features:</strong> ${features?.join(', ')}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  };




  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Request sent successfully!' });
  } catch (error) {
    console.error('Error sending mail:', error);
    res.status(500).json({ error: 'Failed to send request. Please try again later.' });
  }
});





router.post('/design/send-request', async (req, res) => {
  const {
    name,
    company,
    email,
    phone,
    designType,
    designPreference,
    pages,
    timeline,
    refrenceLink,
    features,
    message
  } = req.body;

  // Email configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
    }
  });

  const mailOptions = {
    from: email,
    to: 'integrationmernproject@gmail.com', // <-- Replace with the email where you want to receive the request
    subject: ' UI/UX Design Development Request',
    html: `
      <h2>Website Development Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Design Type:</strong> ${designType}</p>
      <p><strong>Design Preference:</strong> ${designPreference}</p>
      <p><strong>Pages:</strong> ${pages}</p>
      <p><strong>Timeline:</strong> ${timeline} weeks</p>
       <p><strong>Refrence Link:</strong> ${refrenceLink}</p>
      <p><strong>Core Features:</strong> ${features?.join(', ')}</p>
      <p><strong>Message:</strong> ${message}</p>
    `
  };




  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Request sent successfully!' });
  } catch (error) {
    console.error('Error sending mail:', error);
    res.status(500).json({ error: 'Failed to send request. Please try again later.' });
  }
});






router.post('/deployment/send-request', async (req, res) => {
  const {
    name,
    company,
    email,
    phone,
    deploymentType,
    cloudProvider,
    load,
    timeline,
    codeLink,
   
    message
  } = req.body;

  // Email configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
    }
  });

  const mailOptions = {
    from: email,
    to: 'integrationmernproject@gmail.com', // <-- Replace with the email where you want to receive the request
    subject: ' Deployment Services Request',
    html: `
      <h2>Website Development Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Deployment Type:</strong> ${deploymentType}</p>
      <p><strong>Cloud Provider:</strong> ${cloudProvider}</p>
      <p><strong>Load:</strong> ${load}</p>
      <p><strong>Timeline:</strong> ${timeline} weeks</p>
       <p><strong>Code Link:</strong> ${codeLink}</p>
      
      <p><strong>Message:</strong> ${message}</p>
    `
  };




  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Request sent successfully!' });
  } catch (error) {
    console.error('Error sending mail:', error);
    res.status(500).json({ error: 'Failed to send request. Please try again later.' });
  }
});




router.post('/cloudservices/send-request', async (req, res) => {
  const {
    name,
    company,
    email,
    phone,
    cloudserviceType,
    cloudProvider,
    load,
    timeline,

    message
  } = req.body;

  // Email configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
    }
  });

  const mailOptions = {
    from: email,
    to: 'integrationmernproject@gmail.com', // <-- Replace with the email where you want to receive the request
    subject: ' Cloud Service Request',
    html: `
      <h2>Website Development Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Cloud Type:</strong> ${cloudserviceType}</p>
      <p><strong>Cloud Provider:</strong> ${cloudProvider}</p>
      <p><strong>Load:</strong> ${load}</p>
      <p><strong>Timeline:</strong> ${timeline} weeks</p>
       
      
      <p><strong>Message:</strong> ${message}</p>
    `
  };




  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Request sent successfully!' });
  } catch (error) {
    console.error('Error sending mail:', error);
    res.status(500).json({ error: 'Failed to send request. Please try again later.' });
  }
});



router.post('/security/send-request', async (req, res) => {
  const {
    name,
    company,
    email,
    phone,

    serviceType,
    serviceProvider,
    message
  } = req.body;

  // Setup email transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // your email (e.g., youremail@gmail.com)
      pass: process.env.EMAIL_PASS, // app-specific password
    }
  });

  const mailOptions = {
    from: email,
    to: 'integrationmernproject@gmail.com', // Change to your desired receiver
    subject: 'Security Services  Request',
    html: `
      <h2>Security Services  Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>

      <p><strong>Service Type:</strong> ${serviceType}</p>
      <p><strong>Service Provider:</strong> ${serviceProvider}</p>
  
   
      <p><strong>Message:</strong> ${message}</p>
    `
  };

  console.log('App Request Submission:', {
    name,
    company,
    email,
    phone,
   
    serviceType,
    serviceProvider,

    message
  });

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Request sent successfully!' });
  } catch (error) {
    console.error('Error sending mail:', error);
    res.status(500).json({ error: 'Failed to send request. Please try again later.' });
  }
});




router.post('/management/send-request', async (req, res) => {
  const {
    name,
    company,
    email,
    phone,

    serviceType,
    noSites,
    message
  } = req.body;

  // Setup email transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // your email (e.g., youremail@gmail.com)
      pass: process.env.EMAIL_PASS, // app-specific password
    }
  });

  const mailOptions = {
    from: email,
    to: 'integrationmernproject@gmail.com', // Change to your desired receiver
    subject: 'Management Service Request',
    html: `
      <h2>Management Service Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>

      <p><strong>Service Type:</strong> ${serviceType}</p>
      <p><strong>No Sites:</strong> ${noSites}</p>
  
   
      <p><strong>Message:</strong> ${message}</p>
    `
  };

  console.log('App Request Submission:', {
    name,
    company,
    email,
    phone,
   
    serviceType,
    noSites,

    message
  });

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Request sent successfully!' });
  } catch (error) {
    console.error('Error sending mail:', error);
    res.status(500).json({ error: 'Failed to send request. Please try again later.' });
  }
});



router.post('/maintenance/send-request', async (req, res) => {
  const {
    name,
    company,
    email,
    phone,

    serviceType,
    serviceProvider,
    toolName,
   
    message
  } = req.body;

  // Email configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
    }
  });

  const mailOptions = {
    from: email,
    to: 'integrationmernproject@gmail.com', // <-- Replace with the email where you want to receive the request
    subject: 'Maintenance Services Request',
    html: `
      <h2>Website Development Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service Type:</strong> ${serviceType}</p>
      <p><strong>Service Provider:</strong> ${serviceProvider}</p>
      
       <p><strong>Tool Name:</strong> ${toolName}</p>
      
      <p><strong>Message:</strong> ${message}</p>
    `
  };




  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Request sent successfully!' });
  } catch (error) {
    console.error('Error sending mail:', error);
    res.status(500).json({ error: 'Failed to send request. Please try again later.' });
  }
});








module.exports = router;