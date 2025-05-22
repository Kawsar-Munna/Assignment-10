# 🎨 HobbyHub – Local Hobby Group Organizer
![image](https://github.com/user-attachments/assets/4ff4efa9-669e-4ae0-926d-e1ff1462c801)

**HobbyHub** is a full-stack MERN application that lets users discover, create, join, and manage local hobby-based groups. Whether it's painting, hiking, gaming, or cooking — HobbyHub connects people through shared passions.

---

## 🚀 Live Site & Repos

- 🌐 **Client (React) Live Site**: [https://hobbyhublondon.netlify.app](https://hobbyhublocal.netlify.app/)
- 🛠️ **Server (Express) API**: [https://server-pyv6.onrender.com](https://server-pyv6.onrender.com)
- 💻 **Client GitHub Repo**: [github.com/yourusername/hobbyhub-client](#)
- 📦 **Server GitHub Repo**: [github.com/yourusername/hobbyhub-server](#)

---

## 🔑 Features

- 🏠 Home page with animated banner & featured hobby groups
- 🔒 Secure login & registration (Email + Google/GitHub)
- 🧑‍💻 Authenticated users can:
  - Create hobby groups
  - Join or leave groups
  - View personal groups (created/joined)
  - Update/delete groups they created
- 🧭 Responsive design for desktop, tablet & mobile
- 🌗 Light/Dark mode toggle
- ⚡ Toast notifications (success & error handling)
- 🎨 Lottie animations & reveal transitions

---

## 🛠️ Tech Stack

**Frontend:**
- React
- React Router
- Firebase Auth
- Tailwind CSS
- React Toastify
- React Awesome Reveal / Lottie

**Backend:**
- Node.js
- Express.js
- MongoDB (Atlas)
- CORS / dotenv

**Deployment:**
- Client: Netlify
- Server: Render

---

## 🔧 Setup Instructions

### 📦 Client Setup

```bash
cd client
npm install
# Create .env file
echo "REACT_APP_API=https://server-pyv6.onrender.com" > .env
npm run dev
