# 📝 Thinkboard

A full stack note-taking web app built with the MERN stack. Create, view, update, and delete notes with a clean and responsive UI.

🔗 **Live Demo:** [thinkboard-7bhl.onrender.com](https://thinkboard-7bhl.onrender.com)

---

## ✨ Features

- 📄 Create, read, update, and delete notes (full CRUD)
- ⚡ Fast and responsive UI built with React and Tailwind CSS
- 🛡️ Rate limiting to prevent API abuse
- 🌐 REST API backend with Express.js
- 🗄️ Data persistence with MongoDB

---

## 🛠️ Tech Stack

**Frontend**
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5A0EF8?style=flat&logo=daisyui&logoColor=white)

**Backend**
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)

---

## 📁 Project Structure

```
Thinkboard/
├── Backend/
│   ├── config/        # Database connection
│   ├── controllers/   # Route logic (CRUD operations)
│   ├── middleware/    # Logger, rate limiter
│   ├── models/        # Mongoose Note model
│   ├── routes/        # API routes
│   └── app.js         # Express app entry point
├── Frontend/
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── libs/        # Axios instance
│   │   └── pages/       # Homepage
│   └── index.html
└── package.json         # Root scripts for build & start
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js
- MongoDB URI

### Installation

```bash
# Clone the repo
git clone https://github.com/DeepanshuSharma-code/Thinkboard.git
cd Thinkboard

# Install dependencies
npm install --prefix Backend
npm install --prefix Frontend
```

### Environment Variables

Create a `.env` file inside the `Backend` folder:
```
MONGO_URI=your_mongodb_connection_string
PORT=8000
NODE_ENV=development
```

### Run Locally

```bash
# Start backend
npm run start --prefix Backend

# Start frontend (in a new terminal)
npm run dev --prefix Frontend
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| POST | `/api/notes` | Create a note |
| GET | `/api/notes/:id` | Get note by ID |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

---

## 👨‍💻 Author

**Deepanshu Sharma**
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Deepanshu%20Sharma-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/deepanshusharma1/)
