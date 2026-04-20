# Medical Record Management API

A RESTful backend API built with Node.js, Express, and MongoDB for managing patients and their medical prescriptions. This project demonstrates modular MVC architecture, database relationship mapping, and full CRUD functionality.

---

## Technologies Used

- **Node.js & Express.js** — Server-side logic and routing
- **MongoDB Atlas & Mongoose** — Cloud database storage and object data modeling
- **Dotenv** — Environment variable management

---

## Project Structure

The codebase follows a modular structure for maintainability:

```
/models        # Mongoose schemas defining data structure and relationships
/controllers   # Core CRUD logic and database interactions
/routes        # HTTP methods mapped to controller functions
/app           # App configuration and route aggregation
```

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory and add:

```
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0...
```

### 4. Run the server

```bash
npm run dev
```

---

## API Endpoints

### Prescriptions

| Method | Endpoint                    | Description                                        |
| ------ | --------------------------- | -------------------------------------------------- |
| GET    | `/api/v1/prescriptions`     | Retrieve all prescriptions (includes patient data) |
| GET    | `/api/v1/prescriptions/:id` | Retrieve a single prescription by ID               |
| POST   | `/api/v1/prescriptions`     | Create a new prescription                          |
| PUT    | `/api/v1/prescriptions/:id` | Update an existing prescription                    |
| DELETE | `/api/v1/prescriptions/:id` | Delete a prescription                              |

---

### Patients

| Method | Endpoint           | Description                 |
| ------ | ------------------ | --------------------------- |
| POST   | `/api/v1/patients` | Create a new patient record |

Additional CRUD routes for patients follow standard REST conventions.

---

## Error Handling

The API uses standard HTTP status codes:

- **200 OK** — Request succeeded
- **201 Created** — Resource successfully created
- **400 Bad Request** — Validation error or malformed request
- **404 Not Found** — Resource does not exist

---

## Notes

- Built with scalability and maintainability in mind
- Follows MVC architecture principles
- Designed for easy extension (e.g., authentication, role management)
