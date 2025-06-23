# Standalone Authentication - Frontend

This is the frontend user interface for a complete authentication microservice. It is a modern, responsive application built with Next.js (App Router), TypeScript, and Tailwind CSS. It provides the UI for user registration and login and is designed to consume the corresponding backend API.

## Features

-   **Interactive Registration Form:** A clean and user-friendly form for new user registration, including fields for first name, last name, email, and password.
-   **Client-Side & Server-Side Validation:** Provides immediate feedback for simple validation (like required fields) and displays detailed, specific error messages sent from the backend (e.g., "Password must be at least 8 characters long" or "User with this email already exists").
-   **Dynamic UI States:** The UI provides clear visual feedback to the user for loading, success, and error states during form submission.
-   **Seamless User Experience:** Includes features like a timed success message before redirecting the user to the login page, creating a smooth and professional user flow.

## Tech Stack

-   **Framework:** Next.js (App Router)
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS
-   **API Communication:** Axios
-   **Linting/Formatting:** ESLint

## Getting Started

### Prerequisites

-   Node.js (v18+)
-   A running instance of the corresponding [Authentication Backend Service](https://github.com/YOUR_USERNAME/auth-service-api).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/jeffgicharu/auth-service-ui.git](https://github.com/jeffgicharu/auth-service-ui.git)
    cd auth-service-ui
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Setup environment variables:**
    Create a `.env.local` file in the root of the project and add the URL of your running backend API.
    ```env
    NEXT_PUBLIC_API_URL=http://localhost:3000
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:3001`.