# PASS Dashboard

An Angular-based dashboard application with role-based access (admin/user), dynamic widgets, drag-and-drop functionality, authentication via JWT, and integration with a Node.js/Express backend.

---

## Features

- Login authentication with JWT
- Role-based dashboard (Admin/User)
- Add/remove/drag/drop/resize widgets (Chart, Table, Text)
- RESTful API via Node.js backend
- Responsive layout
- Unit tests for components and services

---

## Tech Stack

### Frontend:
- Angular (Standalone Components)
- Angular Material (optional)
- RxJS
- Drag & Drop: `@angular/cdk/drag-drop`
- Charting: `chart.js` + `ng2-charts`

### Backend:
- Node.js
- Express
- JSON Web Token (`jsonwebtoken`)

---

## Setup Instructions

### 1. Clone the repo

```bash
git clone https://github.com/ayswarya-prasad-developer/pass-dashboard.git
cd pass-dashboard

npm install
