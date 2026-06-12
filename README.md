# 🚦 Traffic Fine Payment System

A full-stack digital traffic fine management platform for the Sri Lanka Police Department — developed as part of the Software Architecture module at the University of Ruhuna.

The system modernizes traffic fine collection by enabling motorists to pay fines digitally through mobile and web platforms while allowing senior police officials to monitor nationwide fine collections through an administrative dashboard.

---

# 📋 Table of Contents

- [Overview](#overview)
- [Problem Statement](#problem-statement)
- [System Objectives](#system-objectives)
- [System Architecture](#system-architecture)
- [Architecture Rationale](#architecture-rationale)
- [Technology Stack](#technology-stack)
- [Core Features](#core-features)
- [User Roles](#user-roles)
- [System Workflow](#system-workflow)
- [Database Design](#database-design)
- [Project Structure](#project-structure)
- [REST API Endpoints](#rest-api-endpoints)
- [Authentication & Security](#authentication--security)
- [Error Handling Strategy](#error-handling-strategy)
- [Logging & Monitoring](#logging--monitoring)
- [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
- [Git Workflow](#git-workflow)
- [Testing Strategy](#testing-strategy)
- [Future Enhancements](#future-enhancements)
- [Team Members](#team-members)
- [License](#license)

---

# Overview

The Traffic Fine Payment System is designed to digitalize and simplify the process of issuing, paying, and monitoring traffic fines in Sri Lanka.

Traditionally, drivers must manually settle fines through physical payment processes, resulting in delays, inconvenience, and inefficient monitoring. This system introduces a centralized digital solution that supports:

- On-the-spot traffic fine payments via Android application
- Online fine payments through a web portal
- SMS notifications after successful payments
- Administrative monitoring and reporting dashboards
- Secure JWT-based authentication and authorization

The platform consists of:

| Application         | Purpose                                        |
| ------------------- | ---------------------------------------------- |
| 📱 Android App      | On-the-spot fine payment                       |
| 🌐 Payment SPA      | Online fine payment portal                     |
| 🖥️ Admin Portal     | Monitoring and reporting dashboard             |
| ⚙️ Backend REST API | Centralized business logic and data management |

---

# Problem Statement

The traditional traffic fine collection process in Sri Lanka is mostly manual and inefficient.

Common issues include:

- Long delays in fine settlement
- Difficulty tracking payments
- Lack of centralized monitoring
- Inconvenience for motorists
- Poor nationwide reporting and analytics
- Manual communication between officers and drivers

This project aims to address these issues through a secure and scalable digital platform.

---

# System Objectives

The primary objectives of the system are:

- Digitize traffic fine payment operations
- Enable immediate on-site fine payment
- Provide online payment accessibility
- Improve monitoring and transparency
- Reduce paperwork and manual processes
- Improve efficiency of traffic law enforcement
- Provide centralized nationwide reporting

---

# System Architecture

The system follows a Modular Monolith Architecture.

A single deployable backend application is internally separated into independent feature modules.

```text
Clients (Android / Payment SPA / Admin Portal)
          │
          ▼ HTTPS / REST API (JSON)
┌──────────────────────────────────────────┐
│           Express.js Backend             │
│                                          │
│ ┌──────────────────────────────────────┐ │
│ │         Global Middleware            │ │
│ │ JWT · CORS · Helmet · Rate Limit     │ │
│ └──────────────────────────────────────┘ │
│                                          │
│ ┌───────┐ ┌───────┐ ┌─────────┐          │
│ │ auth  │ │ fines │ │payment  │          │
│ └───────┘ └───────┘ └─────────┘          │
│                                          │
│ ┌──────────────┐ ┌───────────┐           │
│ │notifications │ │ reports   │           │
│ └──────────────┘ └───────────┘           │
│                                          │
│              Prisma ORM                  │
└──────────────────────────────────────────┘
          │                      │
          ▼                      ▼
    MySQL/PostgreSQL        SMS Gateway
                              (Twilio)
```

---

# Architecture Rationale

A Modular Monolith Architecture was selected because:

- It simplifies deployment and maintenance
- It reduces operational complexity
- It is suitable for medium-scale government systems
- It allows clean module separation
- It improves maintainability and extensibility
- It can later evolve into microservices if required

This architecture balances simplicity and scalability while supporting rapid development.

---

# Technology Stack

## Backend

| Technology         | Purpose                 |
| ------------------ | ----------------------- |
| Node.js            | Runtime environment     |
| Express.js         | REST API framework      |
| Prisma ORM         | Database access layer   |
| JWT                | Authentication          |
| bcryptjs           | Password hashing        |
| PostgreSQL / MySQL | Database                |
| Twilio API         | SMS notifications       |
| Helmet             | HTTP security           |
| CORS               | Cross-origin protection |
| express-rate-limit | Rate limiting           |
| express-validator  | Input validation        |
| Morgan/Winston     | Logging                 |

---

## Frontend (Web)

| Technology   | Purpose             |
| ------------ | ------------------- |
| React + Vite | Frontend framework  |
| Axios        | HTTP communication  |
| Tailwind CSS | UI styling          |
| React Router | Client-side routing |

---

## Mobile Application

| Technology        | Purpose            |
| ----------------- | ------------------ |
| Kotlin or Flutter | Android mobile app |

---

# Core Features

## Authentication & Authorization

- JWT-based authentication
- Role-based access control
- Officer and Admin roles
- Password hashing using bcrypt

---

## Traffic Fine Management

- Issue traffic fines
- Generate unique reference numbers
- Lookup traffic fines by reference number
- Categorize traffic fines

---

## Payment System

- On-the-spot mobile payments
- Online web portal payments
- Payment validation
- Digital receipt generation

---

## SMS Notification System

- Notify officers after successful payment
- Automated payment confirmation alerts
- Future support for driver notifications

---

## Reporting Dashboard

- District-wise collections
- Fine category analysis
- Nationwide summaries
- Revenue monitoring

---

# User Roles

| Role           | Responsibilities                              |
| -------------- | --------------------------------------------- |
| 👮 Officer     | Issue fines and receive payment notifications |
| 🧑 Public User | Pay fines via mobile or web portal            |
| 🛡️ Admin       | Monitor nationwide reports and collections    |

---

# System Workflow

## On-the-Spot Payment Flow

```text
Traffic officer issues fine
        ↓
Driver receives reference number
        ↓
Driver opens Android application
        ↓
Driver enters fine details
        ↓
Backend validates fine
        ↓
Payment processed
        ↓
Database updated
        ↓
SMS sent to officer
        ↓
Driver retrieves license
```

---

## Online Payment Flow

```text
Driver visits payment web portal
        ↓
Enter reference number and category
        ↓
System validates fine details
        ↓
Driver submits payment
        ↓
Payment saved to database
        ↓
SMS notification sent
        ↓
Receipt generated
```

---

# Database Design

## Core Entities

| Entity       | Description                   |
| ------------ | ----------------------------- |
| User         | Stores authentication details |
| Officer      | Police officer information    |
| Fine         | Traffic fine details          |
| FineCategory | Fine type and amount          |
| Payment      | Payment records               |
| District     | District information          |
| SMSLog       | SMS notification logs         |

---

## Entity Relationships

```text
Officer ─── issues ─── Fine
Fine ─── belongs to ─── FineCategory
Fine ─── has ─── Payment
Officer ─── belongs to ─── District
Payment ─── generates ─── SMSLog
```

---

## Example Prisma Models

```prisma
model User {
  id        Int      @id @default(autoincrement())
  name      String
  email     String   @unique
  password  String
  role      Role
  createdAt DateTime @default(now())
}

model Fine {
  id            Int      @id @default(autoincrement())
  referenceNo   String   @unique
  category      String
  amount        Float
  isPaid        Boolean  @default(false)
  createdAt     DateTime @default(now())
}

model Payment {
  id          Int      @id @default(autoincrement())
  fineId      Int
  amount      Float
  paidAt      DateTime @default(now())
}
```

---

# Project Structure

```text
traffic-fine-system/
│
├── backend/
│   ├── prisma/
│   │   └── schema.prisma
│   │
│   ├── src/
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   │   ├── auth.routes.js
│   │   │   │   ├── auth.controller.js
│   │   │   │   └── auth.service.js
│   │   │   │
│   │   │   ├── fines/
│   │   │   │   ├── fines.routes.js
│   │   │   │   ├── fines.controller.js
│   │   │   │   └── fines.service.js
│   │   │   │
│   │   │   ├── payments/
│   │   │   │   ├── payments.routes.js
│   │   │   │   ├── payments.controller.js
│   │   │   │   └── payments.service.js
│   │   │   │
│   │   │   ├── notifications/
│   │   │   │   ├── notifications.routes.js
│   │   │   │   └── sms.service.js
│   │   │   │
│   │   │   └── reports/
│   │   │       ├── reports.routes.js
│   │   │       ├── reports.controller.js
│   │   │       └── reports.service.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── jwtVerify.js
│   │   │   ├── errorHandler.js
│   │   │   └── rateLimiter.js
│   │   │
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── env.js
│   │   │
│   │   └── app.js
│   │
│   ├── .env.example
│   └── package.json
│
├── payment-web/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── services/api.js
│   └── package.json
│
├── admin-web/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── services/api.js
│   └── package.json
│
├── android/
│   └── ...
│
└── README.md
```

---

# REST API Endpoints

Base URL: `http://localhost:5000/api/v1`

---

## 🔐 Authentication — `/api/v1/auth`

| Method | Endpoint         | Description                                                                                                                                | Access        |
| ------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| POST   | `/auth/register` | Register a new user (Officer/Admin). Requires `name`, `email`, `password`, `role`. Officers also require `badgeNo`, `phone`, `districtId`. | Public        |
| POST   | `/auth/login`    | Login with `email` and `password`. Returns `accessToken`, `refreshToken`, and user profile.                                                | Public        |
| POST   | `/auth/refresh`  | Obtain a new `accessToken` using a valid `refreshToken`.                                                                                   | Public        |
| POST   | `/auth/logout`   | Invalidate the current refresh token.                                                                                                      | Authenticated |
| GET    | `/auth/me`       | Get the authenticated user's profile including district and officer details.                                                               | Authenticated |

---

## 👥 Users — `/api/v1/users`

| Method | Endpoint     | Description                                                                                              | Access |
| ------ | ------------ | -------------------------------------------------------------------------------------------------------- | ------ |
| GET    | `/users`     | List all users with pagination (`page`, `limit`).                                                        | Admin  |
| GET    | `/users/:id` | Get a specific user by ID, including officer and district info.                                          | Admin  |
| POST   | `/users`     | Create a new user. Officers also require `badgeNo`, `phone`, `districtId`.                               | Admin  |
| PUT    | `/users/:id` | Update user details. Automatically creates or updates the linked officer profile if `role` is `OFFICER`. | Admin  |
| DELETE | `/users/:id` | Soft-delete a user (sets `isActive: false`, clears refresh token).                                       | Admin  |

---

## 🏛️ Districts — `/api/v1/districts`

| Method | Endpoint         | Description                                | Access        |
| ------ | ---------------- | ------------------------------------------ | ------------- |
| GET    | `/districts`     | List all districts ordered alphabetically. | Authenticated |
| GET    | `/districts/:id` | Get a specific district by ID.             | Authenticated |
| POST   | `/districts`     | Create a new district. Requires `name`.    | Admin         |
| PUT    | `/districts/:id` | Update a district's name.                  | Admin         |

---

## 🏷️ Fine Categories — `/api/v1/categories`

| Method | Endpoint          | Description                                                               | Access |
| ------ | ----------------- | ------------------------------------------------------------------------- | ------ |
| GET    | `/categories`     | List all active fine categories ordered by name.                          | Public |
| GET    | `/categories/:id` | Get a specific active category by ID.                                     | Public |
| POST   | `/categories`     | Create a new category. Requires `name`, `amount`. Optional `description`. | Admin  |
| PUT    | `/categories/:id` | Update category fields (`name`, `amount`, `description`, `isActive`).     | Admin  |
| DELETE | `/categories/:id` | Soft-delete a category (sets `isActive: false`).                          | Admin  |

---

## 🚗 Fines — `/api/v1/fines`

| Method | Endpoint                     | Description                                                                                                                                                                         | Access          |
| ------ | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| POST   | `/fines`                     | Issue a new fine. Requires `vehicleNo`, `driverName`, `offenseDate`, `location`, `categoryId`. Optional `driverPhone`, `driverNIC`, `notes`. Auto-generates a unique `referenceNo`. | Officer         |
| GET    | `/fines`                     | List all fines with pagination. Filterable by `status`, `districtId`, `vehicleNo`, `officerId`.                                                                                     | Admin           |
| GET    | `/fines/me`                  | List fines issued by the authenticated officer, with pagination.                                                                                                                    | Officer         |
| GET    | `/fines/:referenceNo`        | Get full fine details by reference number, including category, officer, and payment.                                                                                                | Public          |
| GET    | `/fines/:referenceNo/verify` | Verify a fine for payment. Requires `fineCategoryId` in the request body. Returns `valid`, `amount`, and `driverName`.                                                              | Public          |
| PATCH  | `/fines/:id/cancel`          | Cancel a fine by ID. Cannot cancel a `PAID` fine.                                                                                                                                   | Admin / Officer |

---

## 💳 Payments — `/api/v1/payments`

| Method | Endpoint                        | Description                                                                                                                                                                                                  | Access        |
| ------ | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| POST   | `/payments`                     | Pay a fine. Requires `referenceNo`, `payerName`, `payerPhone`. Optional `paymentMethod` (default: `ONLINE`), `transactionId`. Marks fine as `PAID`, generates a receipt, and triggers an SMS to the officer. | Public        |
| GET    | `/payments`                     | List all payments with pagination. Filterable by `status`, `districtId`, `from` (date), `to` (date).                                                                                                         | Admin         |
| GET    | `/payments/:id`                 | Get payment details by payment ID.                                                                                                                                                                           | Authenticated |
| GET    | `/payments/receipt/:receiptNo`  | Get payment details by receipt number.                                                                                                                                                                       | Public        |
| GET    | `/payments/status/:referenceNo` | Get fine payment status by reference number. Returns `status`, `paid`, and payment record if available.                                                                                                      | Public        |

---

## 📲 Notifications (SMS) — `/api/v1/notifications`

| Method | Endpoint                               | Description                                                                   | Access |
| ------ | -------------------------------------- | ----------------------------------------------------------------------------- | ------ |
| GET    | `/notifications/sms`                   | List all SMS logs with pagination, including linked payment and fine details. | Admin  |
| GET    | `/notifications/sms/:paymentId`        | Get the latest SMS log for a specific payment ID.                             | Admin  |
| POST   | `/notifications/sms/:paymentId/resend` | Resend the payment confirmation SMS to the officer for a given payment.       | Admin  |

---

### Query Parameters Summary

**Pagination** (available on all list endpoints):

| Parameter | Default | Max   | Description      |
| --------- | ------- | ----- | ---------------- |
| `page`    | `1`     | —     | Page number      |
| `limit`   | `10`    | `100` | Results per page |

**Fine Filters** (`GET /fines`):

| Parameter    | Description                                            |
| ------------ | ------------------------------------------------------ |
| `status`     | Filter by fine status (`PENDING`, `PAID`, `CANCELLED`) |
| `districtId` | Filter by officer's district                           |
| `vehicleNo`  | Partial match on vehicle number                        |
| `officerId`  | Filter by officer ID                                   |

**Payment Filters** (`GET /payments`):

| Parameter    | Description                  |
| ------------ | ---------------------------- |
| `status`     | Filter by payment status     |
| `districtId` | Filter by officer's district |
| `from`       | Start date (`YYYY-MM-DD`)    |
| `to`         | End date (`YYYY-MM-DD`)      |

---

### Response Format

All endpoints return a consistent JSON envelope:

```json
// Success
{
  "success": true,
  "data": { }
}

// Paginated success
{
  "success": true,
  "data": [],
  "pagination": {
    "total": 100,
    "page": 1,
    "limit": 10,
    "totalPages": 10
  }
}

// Error
{
  "success": false,
  "message": "Descriptive error message."
}
```

---

# Authentication & Security

The system implements several security mechanisms:

- JWT-based authentication
- Password hashing with bcrypt
- Role-based authorization
- CORS protection
- Helmet security headers
- Rate limiting against abuse
- Input validation using express-validator
- Centralized error handling

---

# Error Handling Strategy

A centralized global error middleware handles:

- Validation errors
- Authentication failures
- Authorization failures
- Database exceptions
- Unexpected server errors

Example response:

```json
{
  "success": false,
  "message": "Unauthorized access"
}
```

---

# Logging & Monitoring

The backend includes logging for:

- API requests
- Authentication activity
- Payment transactions
- Error tracking
- SMS delivery events

Possible tools:

- Morgan
- Winston

---

# Payment Gateway Note

For academic purposes, the project may simulate payment processing.

Future versions can integrate real payment gateways such as:

- PayHere
- Stripe
- LankaPay
- Commercial bank payment APIs

---

# Environment Variables

Create a `.env` file inside `backend/`.

```env
# Server
PORT=5000
NODE_ENV=development

# Database
DATABASE_URL="postgresql://user:password@localhost:5432/traffic_fines"

# JWT
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d

# SMS
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=+123456789
```

⚠️ Never commit `.env` files to GitHub.

---

# Getting Started

# Prerequisites

Install:

- Node.js v18+
- npm or yarn
- PostgreSQL/MySQL
- Git

---

# 1. Clone Repository

```bash
git clone https://github.com/your-org/traffic-fine-system.git
cd traffic-fine-system
```

---

# 2. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

Run Prisma migrations:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

Start development server:

```bash
npm run dev
```

Backend server:

```text
http://localhost:5000
```

---

# 3. Payment Web Portal

```bash
cd ../payment-web
npm install
npm run dev
```

---

# 4. Admin Portal

```bash
cd ../admin-web
npm install
npm run dev
```

Admin portal runs on:

```text
http://localhost:5173
```

Default routes:

- `/` Dashboard
- `/fines` Fine register
- `/payments` Payments view
- `/reports` Reports view

---

# 5. Android Application

For Kotlin:

```text
Open android/ folder in Android Studio
```

For Flutter:

```bash
flutter pub get
flutter run
```

---

# Git Workflow

- Each member works on separate feature branches
- Commit regularly
- Open pull requests before merging
- Merge all work into `main` branch
- Avoid direct commits to `main`

Branch naming:

```text
feature/member-name/feature-name
```

Example:

```text
feature/kasun/payment-module
```

---

# Testing Strategy

The project will include:

- API endpoint testing
- Authentication testing
- Payment validation testing
- Frontend component testing
- Integration testing
- Manual system testing

Suggested tools:

- Postman
- Jest
- Supertest

---

# Future Enhancements

Possible future improvements:

- QR code-based fine lookup
- OCR license plate scanning
- Real payment gateway integration
- Email notifications
- Push notifications
- Multi-language support
- AI-based traffic analytics
- Microservices migration
- Docker deployment
- Cloud hosting support

---

# Team Members

| Name     | Student ID | Responsibility                             |
| -------- | ---------- | ------------------------------------------ |
| Member 1 |            | Backend Core + Authentication              |
| Member 2 |            | Fine & Payment APIs                        |
| Member 3 |            | Android Application                        |
| Member 4 |            | Payment Web Portal                         |
| Member 5 |            | Admin Dashboard                            |
| Member 6 |            | SMS Integration + Testing + Git Management |

---

# Academic Information

| Module       | Software Architecture |
| ------------ | --------------------- |
| University   | University of Ruhuna  |
| Year         | 2026                  |
| Project Type | Group Project         |

---

# License

This project is developed strictly for academic and educational purposes as part of the Software Architecture module at the University of Ruhuna.
