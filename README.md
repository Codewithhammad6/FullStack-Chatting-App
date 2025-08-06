# 💬 WhatsApp Clone - Full Stack Chat Application

<div align="center" style="font-family: Arial; max-width: 300px; margin: 0 auto; border: 1px solid #25D366; border-radius: 10px; overflow: hidden;">
  <!-- Chat Header -->
  <div style="background: #075E54; color: white; padding: 10px; display: flex; align-items: center;">
    <div style="width: 40px; height: 40px; background: #25D366; border-radius: 50%; margin-right: 10px;"></div>
    <div>
      <div style="font-weight: bold;">WhatsApp Clone</div>
      <div style="font-size: 12px;">Online</div>
    </div>
  </div>
  
  <!-- Chat Messages -->
  <div style="padding: 10px; background: #ECE5DD; height: 200px; overflow-y: scroll;">
    <div style="display: flex; justify-content: flex-start; margin-bottom: 10px;">
      <div style="background: white; padding: 8px 12px; border-radius: 0 8px 8px 8px; max-width: 70%;">
        Hey there! 👋
      </div>
    </div>
    <div style="display: flex; justify-content: flex-end; margin-bottom: 10px;">
      <div style="background: #DCF8C6; padding: 8px 12px; border-radius: 8px 0 8px 8px; max-width: 70%;">
        Hi! This is a self-generated demo 🚀
      </div>
    </div>
    <div style="display: flex; justify-content: flex-start; margin-bottom: 10px;">
      <div style="background: white; padding: 8px 12px; border-radius: 0 8px 8px 8px; max-width: 70%;">
        Try recording your actual app with <a href="https://www.screentogif.com/">ScreenToGif</a>!
      </div>
    </div>
  </div>
  
  <!-- Typing Indicator -->
  <div style="background: white; padding: 8px; display: flex; align-items: center;">
    <div style="width: 30px; height: 30px; background: #075E54; border-radius: 50%; margin-right: 10px;"></div>
    <div style="display: flex;">
      <div style="width: 8px; height: 8px; background: #25D366; border-radius: 50%; margin: 0 2px; animation: bounce 1s infinite;"></div>
      <div style="width: 8px; height: 8px; background: #25D366; border-radius: 50%; margin: 0 2px; animation: bounce 1s infinite 0.2s;"></div>
      <div style="width: 8px; height: 8px; background: #25D366; border-radius: 50%; margin: 0 2px; animation: bounce 1s infinite 0.4s;"></div>
    </div>
  </div>
</div>

<style>
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }
</style>

A real-time messaging app with:
- ✨ **1:1 & group chats**
- 🔒 **User authentication**
- 📨 **Message read receipts**
- 🌐 **Online status indicators**
- 📷 **Image/file sharing**

## 🛠 Tech Stack
**Frontend**:  
![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react)
![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=flat&logo=socket.io)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css)

**Backend**:  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb)

## 🚀 Quick Start

### Prerequisites
- Node.js ≥16
- MongoDB Atlas account

### Installation
```bash
# Clone repo
git clone https://github.com/yourusername/chat-app.git
cd chat-app

# Install dependencies
cd backend && npm install
cd ../frontend && npm install

# Configure environment variables
# (Create .env files in both folders)
