# ⌚ Watchex – Modern Watch Store Web App  

![React](https://img.shields.io/badge/Frontend-ReactJS-61DAFB?logo=react&logoColor=white&style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/Styling-TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white&style=for-the-badge)
![ExpressJS](https://img.shields.io/badge/Backend-ExpressJS-000000?logo=express&logoColor=white&style=for-the-badge)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-4EA94B?logo=mongodb&logoColor=white&style=for-the-badge)
![JWT](https://img.shields.io/badge/Auth-JWT-000000?logo=jsonwebtokens&logoColor=white&style=for-the-badge)
![Vite](https://img.shields.io/badge/Bundler-Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge)
![SweetAlert2](https://img.shields.io/badge/UI-SweetAlert2-FF6F61?style=for-the-badge)
![Mongoose](https://img.shields.io/badge/ODM-Mongoose-800000?style=for-the-badge)
![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)

---

### 🚧 Project Status
> **This project is actively in progress.**  
> Core authentication, UI design, and home sections are implemented — new pages and backend features (like product management & checkout) are currently being developed.

---

### 💎 Overview
**Watchex** is a **modern, creative, and secure watch store web app** built using the **MERN stack**.  
It features **JWT-based auto login**, **encrypted authentication**, and a **glassmorphism-inspired UI** with **ReactBits animations** for a premium shopping experience.

---

### 🚀 Tech Stack

| Category | Technologies |
|-----------|--------------|
| **Frontend** | React (Vite), TailwindCSS, ReactBits, SweetAlert2 |
| **Backend** | ExpressJS, NodeJS |
| **Database** | MongoDB + Mongoose |
| **Authentication** | JWT (Auto Login via HTTP-Only Cookies), bcrypt |
| **Styling** | TailwindCSS + Glassmorphism |
| **Environment** | dotenv, CORS |

---

### ✨ Key Features

✅ **User Authentication (Login + Signup)**  
✅ **Auto Login via Secure JWT Cookie**  
✅ **Password Encryption** using bcrypt  
✅ **Glassmorphism + Animated UI** with ReactBits  
✅ **Skeleton Cards** for smooth content loading  
✅ **Responsive Design** for all devices  
✅ **SweetAlert2 Toasts & Alerts**  
✅ **Clean Code Structure** for scalability  

---

### 📜 Pages Overview

| Page | Description |
|------|--------------|
| 🏠 **Home** | Two product sections (Luxury & Premium) with four watch cards each — includes skeleton loaders |
| 🔐 **Login** | Authenticated entry using JWT cookie |
| 🧾 **Signup** | Secure registration with password hashing |

---

### 📂 Project Structure

```

Watchex/
├── client/            # React + Vite Frontend
│   ├── src/
│   └── ...
└── server/            # Express Backend (Auth, MongoDB, JWT)
├── models/
├── routes/
└── ...

````

---

### 🧩 Installation & Setup

#### 1️⃣ Clone Repository
```bash
git clone https://github.com/MuhammadSobanSaleem/Watchex.git
cd Watchex
````

#### 2️⃣ Backend Setup (Express)

```bash
cd server
npm install
```

Create a `.env` file inside `/server`:

```ini
PORT=5000
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

Start backend:

```bash
npm start
```

#### 3️⃣ Frontend Setup (React + Vite)

```bash
cd ../client
npm install
npm run dev
```

---

### 🔒 Authentication Flow

* Passwords hashed with **bcrypt**
* Users receive **JWT in HTTP-Only cookie**
* Auto-login on refresh via cookie validation
* Routes protected using **JWT middleware**

---

### ⚙️ Backend Dependencies

```
bcrypt, jsonwebtoken, cors, dotenv, mongoose, express
```

### 🎨 Frontend Dependencies

```
react, vite, sweetalert2, reactbits, tailwindcss
```

---

### 🌟 Future Enhancements

* 🛒 Shopping Cart + Checkout System
* 💳 Stripe Payment Integration
* ⭐ Product Details Page
* 👤 User Dashboard
* 🛍️ Admin Product Management
* 🔁 Password Reset via Email

---

### 👨‍💻 Author

**Muhammad Soban Saleem**
💼 Full Stack Developer
🔗 [GitHub – MuhammadSobanSaleem](https://github.com/MuhammadSobanSaleem)
📧 *your-email-here*
🌐 *Portfolio link (optional)*

---

### ⭐ Support

If you like this project, please **star the repo** ⭐ — it motivates me to keep building amazing things!

---

### 📜 License

Licensed under the **MIT License**.

---

### 📷 Screenshots (Coming Soon)

> Will be added after the final UI and deployment phase.
