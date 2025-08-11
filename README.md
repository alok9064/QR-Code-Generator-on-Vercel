
# QR Code Generator  🚀

A full-stack QR Code Generator web application built with **Node.js**, **Express**, and **HTML/CSS/JS**.
 
--- 

## 🚀 Features

 This app allows users to:

- 🔗 Generate QR codes for any URL
- 📥 Download QR code as PNG
- ✉️ Send contact messages via email using Web3Forms
- 🌗 Toggle between Light/Dark mode

---

## 🔗 Live Demo

[👉 View Live on Render](https://your-live-url.render.com)  
_(Replace with your actual Render URL)_

---

## 📂 Project Structure
```

QR-Code-Generator/
├── public/  #  Frontend (HTML, CSS, JS)
│ ├── assets/ #   Icons and media
│ ├── style.css #  Styling
│ └── script.js  # Frontend JS logic
├── generated_qr/  # Stores generated PNG QR codes (auto-created)
├── .env #  Environment variables (e.g., Web3Forms key)
├── .gitignore  # Ignores node_modules, .env, etc.
├── package.json  # Node dependencies
└── server.js  # Express backend
```

---

## 🛠️ Installation

### Prerequisites

- Node.js & npm installed
- Git

### Steps

```bash
git clone https://github.com/alok9064/QR-Code-Generator.git
cd QR-Code-Generator
npm install

```

---

## 🚀 Run the App

```bash
node server.js
```
Visit http://localhost:3000

---

## 🛡️ Deployment

This project is deployed on Render.
- Go to https://render.com

- Log in with GitHub and click "New Web Service"

- Choose your GitHub repo (QR-Code-Generator).

Make sure to:

- Keep generated_qr/ folder tracked with a .gitkeep
#### Configure :
- Build Command: 
```bash 
npm install
```
- Start Command: 
```bash
node server.js
```
- Environment:
```bash
Node
```
- Root Directory: (leave blank unless your server is in a subfolder)

- Click **Deploy**.
💡 After deployment, Render gives you a live URL like:

https://qr-code-generator.onrender.com

---

## 📬 Contact Form Integration

Using [Web3Forms](https://web3forms.com/), an access key is used to handle form submissions via API.

Don't worry — Web3Forms keys are public-safe!

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo, make changes, and submit a pull request.


## 🧑‍💻 Author
Alok Thakur

[GitHub](https://github.com/alok9064)

## 📄 License

This project is licensed under the MIT License

# Thank You!






