# Supplier Invoice Management System

A modern React Single Page Application (SPA) designed to help companies and freelancers manage supplier invoices, payments, and expenses efficiently.

The application is connected to a secure backend API using JWT authentication and provides a complete workflow for supplier, invoice, and payment management.

---

# Project Objective

The goal of this project is to build a frontend application that:

- Consumes a secure REST API using JWT authentication
- Manages global application state
- Handles protected routes and navigation
- Dynamically displays and updates data
- Centralizes frontend business logic
- Provides a clean and responsive user experience

---

# Features

## Authentication

### Routes
- `/login`
- `/register`

### Functionalities
- User registration
- User login with JWT token retrieval
- Token storage using `localStorage`
- Fetch authenticated user profile (`/api/auth/me`)
- Protected routes using `PrivateRoute`

---

## Dashboard

### Route
- `/`

### Functionalities
- Display total invoices
- Display total expenses
- Show overdue invoices
- Global statistics summary from `/api/dashboard`

---

## Supplier Management

### Routes
- `/suppliers`
- `/suppliers/:id`

### Functionalities
- Display all suppliers
- Navigate to supplier details
- Display supplier information
- Display supplier statistics (`/api/suppliers/:id/stats`)
- Create a new supplier

---

## Invoice Management

### Routes
- `/invoices`
- `/invoices/:id`

### Functionalities
- Display all invoices
- Filter invoices by status:
  - unpaid
  - partially_paid
  - paid
- Display invoice amount, due date, and status
- Display complete invoice details
- Display supplier information inside invoice details
- Create new invoices

---

## Payment Management

### Integrated In
- `/invoices/:id`

### Functionalities
- Add payments
- Display payment history
- Dynamically update invoice payment status

---

# Routing Structure

| Route | Description |
|---|---|
| `/` | Dashboard |
| `/login` | User Authentication |
| `/register` | User Registration |
| `/suppliers` | Suppliers List |
| `/suppliers/:id` | Supplier Details |
| `/invoices` | Invoices List |
| `/invoices/:id` | Invoice Details |

---

# Technologies Used

- React.js
- React Router
- Context API
- JavaScript (ES6+)
- CSS3
- REST API
- JWT Authentication

---

# Learning Objectives

This project focuses on:

- Context API state management
- JWT authentication handling
- React routing
- API calls with `useEffect`
- Component architecture and organization
- Dynamic rendering and state updates

---

# Team Work

This project was developed collaboratively during a 5-day sprint.

### Project Timeline
- Start Date: 11/05/2026
- Submission Deadline: 15/05/2026

---

# Team Contributions

## **Mehdi El-Hajjame**
Worked on:
- Invoice page (`/invoices`)
- Invoice detail page (`/invoices/:id`)
- Payment management integration
- Fetching supplier data from the API
- Displaying supplier information inside invoice detail pages
- Dynamic payment status updates
- Invoice UI components and frontend logic

---

## **Ayoub Jabiri**
Worked on:
- Login page
- Register page
- JWT authentication integration
- User authentication flow

---

## **Salima**
Worked on:
- Supplier pages
- Supplier management features
- Supplier details interface

---

## **Khadija**
Worked on:
- Dashboard page
- Dashboard statistics and summary cards
- Global overview UI

---

# Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate into the project
cd project-name

# Install dependencies
npm install

# Start development server
npm run dev
```

---

# Backend Requirements

Make sure the backend API is running and properly configured before starting the frontend application.

The frontend communicates with secure API endpoints using JWT authentication.

---

# Future Improvements

- Search functionality
- Advanced invoice filtering
- Export invoices to PDF
- Notifications system
- Responsive mobile optimization
- Dark mode support

---

# Authors

- **Mehdi El-Hajjame**
- **Ayoub Jabiri**
- **Salima**
- **Khadija**
