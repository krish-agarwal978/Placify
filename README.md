# Placify 🏡

Placify is a full-stack travel accommodation listing platform inspired by Airbnb. Users can explore destinations, create listings, upload images, write reviews, and manage their own properties through a secure authentication system.

## 🌐 Live Demo

https://placify-1-mjbw.onrender.com

## 🚀 Features

* User Registration and Login Authentication
* Secure Session Management with Passport.js
* Create, Edit, and Delete Property Listings
* Image Upload using Cloudinary
* Property Reviews and Ratings
* Ownership-based Authorization
* Flash Messages for User Feedback
* Server-side Form Validation
* Responsive User Interface
* MongoDB Atlas Cloud Database
* Deployed on Render

## 🛠️ Tech Stack

### Frontend

* EJS
* HTML5
* CSS3
* Bootstrap

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas
* Mongoose

### Authentication & Security

* Passport.js
* Express Session
* Connect Mongo

### Media Storage

* Cloudinary
* Multer

### Deployment

* Render

## 📂 Project Structure

```text
Placify/
├── controllers/
├── models/
├── routes/
├── views/
├── public/
├── utils/
├── app.js
├── middleware.js
├── schema.js
└── package.json
```

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
cd Placify
```

### Install Dependencies

```bash
npm install
```

### Create Environment Variables

Create a `.env` file in the root directory:

```env
ATLASDB_URL=your_mongodb_connection_string

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

### Run Locally

```bash
npm start
```

Open:

```text
http://localhost:8080/listings
```

## 🔑 Core Functionalities

### Authentication

* User Signup
* User Login
* User Logout

### Listing Management

* Create Listing
* Update Listing
* Delete Listing
* View Listing Details

### Reviews

* Add Review
* Delete Review

### Image Handling

* Upload Images
* Cloud-based Image Storage

## 🎯 Learning Outcomes

This project helped strengthen practical knowledge of:

* RESTful Routing
* MVC Architecture
* Authentication & Authorization
* Session Management
* Cloud Storage Integration
* Database Design
* Deployment & Production Configuration
* Full Stack Web Development

## 👨‍💻 Author

Krish Agarwal

GitHub: https://github.com/krish-agarwal978

## 📜 License

This project is intended for educational and portfolio purposes.
