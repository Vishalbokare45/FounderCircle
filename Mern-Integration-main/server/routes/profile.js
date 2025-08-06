const express = require('express');
const router = express.Router();
const Profile = require('../models/profile');
const validateToken = require('../middlewares/validateToken');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;
const path = require('path');

// Multer configuration with Cloudinary storage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads',
    format: async (req, file) => 'png', // supports promises as well
    public_id: (req, file) => Date.now() + path.extname(file.originalname),
  },
});

const upload = multer({ storage: storage });

// Create a new profile with image upload
router.post('/', validateToken, upload.single('image'), async (req, res) => {
  try {
    const { name, email, bio, act, add,cat, web, eyear,   tm, cp, sms, bm, mjc, cad, tp, fdesc, rev, expen, net } = req.body;
    const profile = new Profile({
      user: req.user._id,
      name,
      email,
      bio,
      act,
      uimg: req.file ? req.file.path : undefined, // Save the uploaded image URL
      cat,
      add,
      web,
      eyear,
      
      
      
      tm,
      cp,
      sms,
      bm,
      mjc,
      cad,
      tp,
      fdesc,
      rev,
      expen,
      net
    });
    await profile.save();
    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ error: 'Could not create profile' });
  }
});

// Fetch all user profiles
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.status(200).json(profiles);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch profiles' });
  }
});




// // Get profiles with all required fields filled and act is 'Startup'
router.get('/complete', async (req, res) => {
  try {
    // Define the required fields
    const requiredFields = [
      'name', 'email', 'bio', 'act','cat', 'add', 'web', 'eyear', 'bdesc',  
      'tm', 'cp', 'sms', 'bm', 'mjc', 'cad', 'tp', 'fdesc', 'rev', 'expen', 'net'
    ];

    // Fetch all profiles where act is 'Startup'
    const profiles = await Profile.find({ act: 'Startup' });

    // Filter profiles that have all required fields filled
    const completeProfiles = profiles.filter(profile => 
      requiredFields.every(field => profile[field] !== undefined && profile[field] !== null && profile[field] !== '')
    );

    res.status(200).json(completeProfiles);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch profiles' });
  }
});

// // Backend Route - Express.js
// router.get('/completecat/:category?', async (req, res) => {
//   try {
//     const { category } = req.params;

//     // If category is provided, filter by it; otherwise, fetch all profiles
//     const query = category ? { cat: category } : {};

//     // Fetch profiles based on the query
//     const profiles = await Profile.find(query);

//     // If no profiles are found
//     if (!profiles || profiles.length === 0) {
//       return res.status(404).json({ message: 'No profiles found' });
//     }

//     // Return the found profiles
//     res.status(200).json(profiles);
//   } catch (error) {
//     console.error('Error fetching profiles:', error);
//     res.status(500).json({ error: 'Could not fetch profiles' });
//   }
// });

router.get('/completecat/:category?', async (req, res) => {
  try {
    const { category } = req.params;

    // If category is provided, use regex for case-insensitive matching; otherwise, fetch all profiles
    const query = category ? { cat: { $regex: new RegExp(category, 'i') } } : {};

    // Fetch profiles based on the query
    const profiles = await Profile.find(query);

    // If no profiles are found
    if (!profiles.length) {
      return res.status(404).json({ message: 'No profiles found' });
    }

    // Return the found profiles
    res.status(200).json(profiles);
  } catch (error) {
    console.error('Error fetching profiles:', error);
    res.status(500).json({ error: 'Could not fetch profiles' });
  }
});






// Get user profile data by user ID
router.get('/get-my-profile', validateToken, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});



// // Get profile by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const profile = await Profile.findById(id);

    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch profile details' });
  }
});


// Edit user profile with image upload
router.patch('/edit-my-profile', validateToken, upload.single('image'), async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    const { name, email, bio, act, phone,cat, add, web, eyear,  bdesc,  tm, cp, sms, bm, mjc, cad, tp, fdesc, rev, expen, net } = req.body;
    profile.name = name || profile.name;
    profile.email = email || profile.email;
    profile.bio = bio || profile.bio;
    profile.act = act || profile.act;
    profile.phone = phone || profile.phone;

    profile.cat = cat || profile.cat;
    profile.add = add || profile.add;
    profile.web = web || profile.web;
    profile.eyear = eyear || profile.eyear;

    
    profile.bdesc = bdesc || profile.bdesc;

    profile.tm = tm || profile.tm;
    profile.cp = cp || profile.cp;

    profile.sms = sms || profile.sms;
    profile.bm = bm || profile.bm;

    profile.mjc = mjc || profile.mjc;
    profile.cad = cad || profile.cad;

    profile.tp = tp || profile.tp;
    profile.fdesc = fdesc || profile.fdesc;

    profile.rev = rev || profile.rev;
    profile.expen = expen || profile.expen;
    profile.net = net || profile.net;
    if (req.file) {
      profile.uimg = req.file.path; // Update the image URL if a new image is uploaded
    }
    await profile.save();
    res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;


