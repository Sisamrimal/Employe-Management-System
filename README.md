# Employee Resource Management System (ERM)

A web-based application designed to streamline employee administration, attendance tracking, and role management within an organization. Built using modern full-stack technologies with a secure and scalable architecture.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel)

---

## 🌐 Live Application

🔗 [Live Demo](https://employe-management-system-u97u-8z7yz2ist.vercel.app/login)

---

## 📌 About the Project

The ERM system enables organizations to manage employee records efficiently with secure authentication and structured role-based permissions. 

Each user interacts only with the features permitted by their assigned role, ensuring security and accountability.

---

## 🧰 Tech Stack

### Frontend
- Next.js 14 (App Router, Server Components)
- TypeScript
- Tailwind CSS

### Backend
- Next.js API Routes
- Prisma ORM
- JWT Authentication
- Zod Validation

### Database
- Supabase (PostgreSQL)

### Deployment
- Vercel

---

## 🔐 Access Control Roles

- **Admin** – Full system access, user and role management.
- **HR** – Manage employees and attendance records.
- **Employee** – View personal dashboard and mark attendance.

---

## ✨ Key Functionalities

- Secure login and JWT-based authentication
- Role-based route protection and middleware checks
- Employee CRUD operations
- Real-time attendance tracking
- Input validation using Zod
- Type-safe development using TypeScript

---

## ⚙️ Local Setup Instructions

### Prerequisites
- Node.js 18.x or higher
- Supabase Database instance

### Installation

1. **Clone the repository**  
```bash
git clone https://github.com/Sisamrimal/Employe-Management-System.git
cd Employe-Management-System
```


2.  **Install dependencies**
    ```bash
    npm install
    ```



3.  **Set up environment variables**
  ```
DATABASE_URL="your-supabase-connection-string"
JWT_SECRET="your-jwt-secret"
NEXTAUTH_SECRET="your-nextauth-secret"
NEXTAUTH_URL="http://localhost:3000"
```

4.  **Set up database**
 ```bash
    npx prisma generate
    npx prisma db push

 ```


5.  **Run development server**
  ```bash
    npm run dev
```
 Open `http://localhost:3000` to view the application.

    
 ## 👥 Role-Based Access

| Role | Access Level |
| :--- | :--- |
| 👑 **Admin** | Full system control and user management. |
| 👥 **HR** | Employee data and attendance management. |
| 💼 **Employee** | Personal dashboard and attendance marking. |

---

## 🔗 Links
* **Live Demo**: [Vercel Deployment](https://employe-management-system-u97u-8z7yz2ist.vercel.app/login)
* **GitHub Repository**: [Repository Link](https://github.com/Sisamrimal/Employe-Management-System)
* **LinkedIn**: [Sisam Rimal](https://www.linkedin.com/in/sisamrimal)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Please check the issues page for details on how to get involved.

---

## 📄 License

This project is licensed under the **MIT License**.

Built with ❤️ by Sisam Rimal

Connect with me on [LinkedIn](https://www.linkedin.com/in/sisamrimal/)
