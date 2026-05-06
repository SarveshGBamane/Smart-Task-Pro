# SmartTask Pro

A full-stack Task Management Application built using Angular and Spring Boot that helps users manage tasks, track deadlines, and improve productivity.

---
## 📸 Screenshots

### Home

![Dashboard](screenshots/home.png)

---

### Dashboard

![Tasks](screenshots/dashboard.png)

---

### Add Task

![Add Task](screenshots/addTask.png)

---

### Tasks

![Login](screenshots/tasks.png)
##  Features

- Create, update, and delete tasks
- Task prioritization
- Deadline tracking
- REST API integration
- Responsive modern UI
- Productivity analytics dashboard

---

##  Tech Stack

### Frontend
- Angular
- Tailwind CSS
- TypeScript
- HTML
- CSS

### Backend
- Java
- Spring Boot
- Spring Data JPA
- Hibernate
- REST APIs

### Database
- MySQL

---

##  Project Structure

```bash
SmartTaskPro/
│
├── Frontend/
│   └── smart-task-ui/
│
├── Backend/
│   └── smart_task_manager/
│
└── README.md
```

---

##  Installation & Setup

### Clone Repository

```bash
git clone https://github.com/your-username/smarttask-pro.git
```

---

## Frontend Setup

```bash
cd Frontend/smart-task-ui
npm install
ng serve
```

Frontend runs on:

```bash
http://localhost:4200
```

---

## Backend Setup

```bash
cd Backend/smart_task_manager
```

Run Spring Boot application.

Backend runs on:

```bash
http://localhost:8080
```

---

##  Database Configuration

Update `application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/smarttaskdb
spring.datasource.username=root
spring.datasource.password=yourpassword
```

---

##  Future Improvements

- JWT Authentication
- Email Notifications
- Team Collaboration
- Drag &Drop Tasks
- Dark Mode

---

##  Author

Developed by Sarvesh Bamane
