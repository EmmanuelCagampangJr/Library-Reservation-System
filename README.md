# Library Reservation System

A full-stack web application designed for managing library bookings, featuring a Spring Boot backend and a React frontend.

## 🚀 Features

- **Booking Management:** Facilitates Create, Read, Update, and Delete (CRUD) operations for booking records.
- **RESTful API:** Provides a robust API for seamless data interaction.
- **User Interface:** A modern and responsive frontend built with React.

## 💻 Technologies Used

### Backend

- **Java 23**: The core programming language for the server-side.
- **Spring Boot 3.3.1**: Framework for rapid application development, providing a robust foundation for the REST API.
- **Spring Data JPA**: Simplifies data access and persistence with Hibernate.
- **MySQL**: The relational database used to store application data.
- **Maven**: Dependency management and build automation tool.

### Frontend

- **React**: A JavaScript library for building dynamic user interfaces.
- **Vite**: A fast and efficient frontend tooling for development and bundling.
- **HTML & CSS**: For structuring and styling the web application.
- **npm**: Package manager for frontend dependencies.

## 🛠️ Setup and Running the Project

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Ensure you have the following installed:

- **Java Development Kit (JDK) 23**
- **Apache Maven**
- **Node.js (LTS version recommended)** and **npm** (comes with Node.js)
- **MySQL Server**
- **Git**

### 1. Database Configuration

1.  Start your MySQL server.
2.  Create a new database for the application (e.g., `lic_reservation_db`).
3.  Open `src/main/resources/application.properties`.
4.  Update the database connection details with your MySQL credentials:

    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/lic_reservation_db?useSSL=false&serverTimezone=UTC
    spring.datasource.username=your_mysql_username
    spring.datasource.password=your_mysql_password
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    ```

    _Replace `your_mysql_username` and `your_mysql_password` with your actual MySQL setup._

### 2. Backend (Spring Boot) Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/EmmanuelCagampangJr/Library-Reservation-System.git](https://github.com/EmmanuelCagampangJr/Library-Reservation-System.git)
    cd Library-Reservation-System
    ```
2.  **Build and Run the Backend Application:**
    ```bash
    ./mvnw clean install # For Windows: .\mvnw.cmd clean install
    ./mvnw spring-boot:run # For Windows: .\mvnw.cmd spring-boot:run
    ```
    The Spring Boot application will start and be accessible at `http://localhost:8080`.

### 3. Frontend (React + Vite) Setup

1.  **Ensure you are in the project's root directory** (where `package.json` is located):
    ```bash
    cd Library-Reservation-System
    ```
2.  **Install frontend dependencies:**
    ```bash
    npm install
    ```
3.  **Start the Frontend Development Server:**
    ```bash
    npm run dev
    ```
    The React application will launch, typically accessible at `http://localhost:3000` (due to the proxy configuration in `vite.config.js`). Open this URL in your web browser.

## 🔗 API Endpoints

The Spring Boot backend exposes the following REST API endpoints:

- `GET /bookings/getAllBookings` - Retrieve a list of all bookings.
- `POST /bookings/createBooking` - Add a new booking.
- `PUT /bookings/updateBooking/{id}` - Update an existing booking by its ID.
- `DELETE /bookings/deleteBooking/{id}` - Remove a booking by its ID.

_Note: The frontend is configured via `vite.config.js` to proxy API requests starting with `/api` to the backend. Therefore, your frontend code should make API calls to routes like `/api/bookings/getAllBookings`._

---
