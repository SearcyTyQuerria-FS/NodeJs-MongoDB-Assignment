# 🏥 Patient Management System (Full‑Stack MERN App)

A full‑stack medical dashboard built with **React, Node.js, Express, and MongoDB**
for managing patient records and prescriptions.  
This project demonstrates real‑world CRUD operations, validation on both frontend
and backend, clean UI/UX, and modular MVC architecture.

---

## 🚀 Features

- Add, edit, and delete patient records
- Inline prescription editing
- Frontend + backend validation
- Styled medical dashboard UI
- Welcome header for branding
- MongoDB database with Mongoose models
- RESTful API with full CRUD
- Clean component structure (React)
- Error handling with red alert boxes
- Auto‑refresh after actions

---

## 🧰 Technologies Used

### **Frontend**

- React (Hooks, Components)
- CSS (custom styling)
- Fetch API

### **Backend**

- Node.js & Express.js
- MongoDB Atlas
- Mongoose (ODM)
- Dotenv (environment variables)

---

## 📁 Project Structure

```
/client
  /src
    /components
      AddPatientForm.jsx
      PatientsList.jsx
    App.jsx
    index.css
/server
  /models        # Mongoose schemas
  /controllers   # CRUD logic + validation handling
  /routes        # API routes
  app.js         # Express app config
```

---

## 🛠 Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```
PORT=3000
MONGO_URI=mongodb+srv<username>:<password>@cluster0...
```

### 4. Run the backend server

```bash
npm run dev
```

### 5. Run the React frontend

```bash
npm start
```

---

## 🔌 API Endpoints

### **Patients**

| Method | Endpoint               | Description                      |
| ------ | ---------------------- | -------------------------------- |
| GET    | `/api/v1/patients`     | Get all patients                 |
| GET    | `/api/v1/patients/:id` | Get a single patient             |
| POST   | `/api/v1/patients`     | Create a new patient             |
| PUT    | `/api/v1/patients/:id` | Update patient (with validation) |
| DELETE | `/api/v1/patients/:id` | Delete patient                   |

### **Prescriptions**

| Method | Endpoint                    | Description                     |
| ------ | --------------------------- | ------------------------------- |
| GET    | `/api/v1/prescriptions`     | Retrieve all prescriptions      |
| GET    | `/api/v1/prescriptions/:id` | Retrieve a single prescription  |
| POST   | `/api/v1/prescriptions`     | Create a new prescription       |
| PUT    | `/api/v1/prescriptions/:id` | Update an existing prescription |
| DELETE | `/api/v1/prescriptions/:id` | Delete a prescription           |

---

## 🧪 Validation

### **Backend Validation**

- Required fields
- Min/max age
- String trimming
- Custom error messages
- `runValidators: true` on updates
- Clean JSON error responses

### **Frontend Validation**

- Prevent empty fields
- Age must be a number
- Inline red error box
- Disabled submission until valid

---

## 🎨 UI/UX Enhancements

- Welcome header: _“Welcome to the Patient Management System”_
- Soft medical blue‑gray background
- Clean card layout for patients
- Inline edit form for prescriptions
- Red bold error alerts
- Consistent spacing and typography
