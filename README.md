# ⌚ Watchex – Modern Watch Store Web App  

![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white&style=for-the-badge)
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
> Core authentication, UI design, and home sections are implemented — new backend features like product management & checkout are currently being developed.

---

### 🌐 Live Demo  
🔗 **[Watchex Live Website](https://watchex-seven.vercel.app/)**  
🧠 Backend API: [https://watchex-server-three.vercel.app](https://watchex-server-three.vercel.app)

---

### 💎 Overview  
**Watchex** is a **modern, secure, and visually rich watch store web app** built with the **MERN stack**.  
It features **JWT-based authentication**, **secure cookies**, and a **glassmorphism-inspired animated UI** designed for a premium shopping experience.

---

### 🚀 Tech Stack  

| Category | Technologies |
|-----------|--------------|
| **Frontend** | React (Vite), TailwindCSS, SweetAlert2 |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB + Mongoose |
| **Authentication** | JWT (HTTP-Only Cookie), bcrypt |
| **Environment** | dotenv, CORS |
| **Deployment** | Vercel (Frontend + Backend) |

---

### ✨ Key Features  

✅ Secure **User Authentication (Login + Signup)**  
✅ **JWT Auto Login** with HTTP-Only Cookies  
✅ **Password Hashing** using bcrypt  
✅ **Glassmorphism + Animated UI**  
✅ **Skeleton Loading Cards** for smooth UX  
✅ Fully **Responsive** design  
✅ **SweetAlert2 Alerts** for better interaction  
✅ **Scalable folder structure** for future expansion  

---

### 📜 Pages Overview  

| Page | Description |
|------|--------------|
| 🏠 **Home** | Displays premium & luxury watch sections with skeleton loaders |
| 🔐 **Login** | Authenticates user via JWT cookies |
| 🧾 **Signup** | Registers new users securely |
| 🚪 **Logout** | Clears JWT cookie and logs user out |

---

### 📂 Project Structure  
```

Watchex/
├── client/         # React + Vite Frontend
│   ├── src/
│   └── ...
└── server/         # Express Backend (Auth, MongoDB, JWT)
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

#### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create `.env` file:

```
PORT=5000
MONGODB_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

Run backend:

```bash
npm start
```

#### 3️⃣ Frontend Setup

```bash
cd ../client
npm install
npm run dev
```

---

### 🔒 Authentication Flow

* Passwords hashed using **bcrypt**
* JWT token stored in **HTTP-Only Cookie**
* Auto-login supported on refresh
* Protected routes handled via **JWT middleware**

---

### ⚙️ Dependencies

**Backend:**
`bcrypt`, `jsonwebtoken`, `cors`, `dotenv`, `mongoose`, `express`

**Frontend:**
`react`, `vite`, `sweetalert2`, `tailwindcss`

---

### 🌟 Future Enhancements

🛒 Shopping Cart + Checkout
💳 Stripe Payment Integration
⭐ Product Details Page
👤 User Dashboard
🛍️ Admin Product Management
🔁 Password Reset via Email

---

### 👨‍💻 Author

**Muhammad Soban Saleem**
💼 MERN Stack Developer
📧 [sobansaleem713@gmail.com](mailto:sobansaleem713@gmail.com)
🔗 [LinkedIn – Soban Saleem](https://www.linkedin.com/in/soban-saleem333)
🌐 [Live Project – Watchex](https://watchex-seven.vercel.app/)

---

### ⭐ Support

If you like this project, please **star the repo** ⭐ — it helps me grow and stay motivated!

---

### 📷 Screenshots (Coming Soon)

> Will be added after final UI updates and backend integration.
