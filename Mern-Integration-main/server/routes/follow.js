const express = require('express');
const router = express.Router();
const validateToken = require('../middlewares/validateToken');
const Profile = require('../models/profile');
const Follow = require('../models/follow');

// POST - Follow a profile
router.post('/', validateToken, async (req, res) => {
  try {
    const userId = req.user._id; 
    const { ftid, ftname, ftimg } = req.body; 

   
    const profile = await Profile.findOne({ user: userId });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    
    const isFollowing = await Follow.findOne({ fbid: profile._id, ftid });
    if (isFollowing) {
      return res.status(400).json({ message: 'You are already following this user' });
    }

    
    const newFollow = new Follow({
      user: userId,
      fbid: profile._id, 
      fbname: profile.name,
      ftid,
      ftname,
      ftimg,
    });

    await newFollow.save();
    res.status(201).json({ message: 'You are now following this user', newFollow });
  } catch (error) {
    console.error('Error following user:', error);
    res.status(500).json({ error: 'Could not follow the user' });
  }
});

// GET - Fetch all follow relationships
router.get('/', async (req, res) => {
  try {
    const follows = await Follow.find();
    res.status(200).json(follows);
  } catch (error) {
    console.error('Error fetching follows:', error);
    res.status(500).json({ error: 'Could not fetch follows' });
  }
});

// GET - Fetch followers of the logged-in user
router.get('/recived-follow', validateToken, async (req, res) => {
  try {
    const userId = req.user._id;

    
    const profile = await Profile.findOne({ user: userId });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    
    const followers = await Follow.find({ ftid: profile._id }).populate('user fbid', 'name'); 
    res.status(200).json(followers);
  } catch (error) {
    console.error('Error fetching followers:', error);
    res.status(500).json({ error: 'Could not fetch followers' });
  }
});

// GET - Fetch profiles the logged-in user is following
router.get('/send-follow', validateToken, async (req, res) => {
  try {
    const userId = req.user._id;

    
    const profile = await Profile.findOne({ user: userId });
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    
    const following = await Follow.find({ fbid: profile._id })
    res.status(200).json(following);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch followings' });
  }
});




// DELETE - Remove a follow by the authenticated user
router.delete('/:id', validateToken, async (req, res) => {
  try {
    const { id } = req.params; 
    const userId = req.user._id; 

    
    const follow = await Follow.findById(id);

    if (!follow) {
      return res.status(404).json({ error: 'Follow not found' });
    }

    
    if (follow.user.toString() !== userId.toString()) {
      return res.status(403).json({ message: 'Unauthorized' });
    }

    
    await follow.deleteOne();
    res.status(200).json({ message: 'Follow removed successfully' });
  } catch (error) {
    console.error('Error removing follow:', error);
    res.status(500).json({ error: 'Could not remove follow' });
  }
});



module.exports = router;
