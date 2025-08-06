require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const profileRoutes = require('./routes/profile');
const aspRoutes = require('./routes/asp');

const updatesRoutes = require('./routes/updates');
const followRoutes = require('./routes/follow');
const commentRoutes = require('./routes/comment');
const cloudinary = require('cloudinary').v2;
// const multer = require('multer');
// const { CloudinaryStorage } = require('multer-storage-cloudinary');


// database connection
connection();



// Configure Cloudinary
cloudinary.config({
    
    cloud_name:  process.env.CN,
    api_key: process.env.AK,
    api_secret: process.env.AS
});

// // Multer configuration with Cloudinary storage
// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//         folder: 'uploads',
//         format: async (req, file) => 'png', // supports promises as well
//         public_id: (req, file) => Date.now() + path.extname(file.originalname)
//     }
// });

// const upload = multer({ storage: storage });



// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);

app.use("/api/updates", updatesRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/follow", followRoutes);
app.use("/api/asp", aspRoutes);

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));