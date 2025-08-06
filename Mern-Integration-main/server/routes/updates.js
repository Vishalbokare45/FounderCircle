const express = require('express');
const router = express.Router();
const validateToken = require('../middlewares/validateToken');
const Updates = require('../models/updates');
const Profile = require('../models/profile');



// Create a new update for the authenticated user
router.post('/', validateToken, async (req, res) => {
  try {
    const userId = req.user._id;
    const {desc} = req.body;

    const profile = await Profile.findOne({user: userId});

    if(!profile){
      return res.status(404).json({message: 'Profile not found'});
    }

    const newUpdates = new Updates({
      user: userId,
      name: profile.name,
      // userimg: req.file ? req.file.path : profile.uimg,
      userimg: profile.uimg || null,

      desc
    })

    await newUpdates.save();
    res.status(201).json(newUpdates);
    
  } catch (error) {
    res.status(5000).json({error: 'Could not crate update'}); 
  }
});

//Fetch all updates
router.get('/', async(req,res) => {
  try {
    const updates = await Updates.find();
    res.status(200).json(updates);
    
  } catch (error) {
    res.status.json({error: 'Could not fetch updates'});
    
  }
  
});




// Fetch all updates for the authenticated user
router.get('/user', validateToken, async (req, res) => {
  try {
    const userId = req.user._id; // Confirm this value is correctly set
   

    const updates = await Updates.find({ user: userId });

    if (!updates || updates.length === 0) {
      return res.status(404).json({ message: 'No updates found for this user' });
    }

    res.status(200).json(updates);
  } catch (error) {
    console.error('Error fetching updates:', error); // Detailed logging
    res.status(500).json({ error: 'Could not fetch updates' });
  }
});

// Get update by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const update = await Updates.findById(id);

    if (!update) {
      return res.status(404).json({ error: 'Update not found' });
    }

    res.status(200).json(update);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch update details' });
  }
});


// Edit an update
router.patch('/:id', validateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { desc } = req.body;

    const update = await Updates.findById(id);

    if (!update) {
      return res.status(404).json({ error: 'Update not found' });
    }

    // Check if the update belongs to the authenticated user
    if (update.user.toString() !== req.user._id) {  // Fixed here
      return res.status(403).json({ message: 'Unauthorized' });
    }

    update.desc = desc || update.desc;
    await update.save();

    res.status(200).json(update);
  } catch (error) {
    res.status(500).json({ error: 'Could not update update' });
  }
});

// Delete an update
router.delete('/:id', validateToken, async (req, res) => {
  try {
    const { id } = req.params;

    const update = await Updates.findById(id);

    if (!update) {
      return res.status(404).json({ error: 'Update not found' });
    }

    // Check if the update belongs to the authenticated user
    if (update.user.toString() !== req.user._id) {  // Fixed here
      return res.status(403).json({ message: 'Unauthorized' });
    }

    await update.deleteOne({ _id: id });
    res.status(200).json({ message: 'Update deleted successfully' });
  } catch (error) {
    console.error('Error deleting update:', error);
    res.status(500).json({ error: 'Could not delete update' });
  }
});

module.exports = router;
