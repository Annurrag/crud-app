**CRUD Webpage for User Info:****
About:** CRUD (Create, Read, Update, Delete) web application for managing user data.
The application is designed with extensibility in mind, allowing new fields to be added with minimal code changes.

** live:** 

Getting Started(Local setup)
1. Clone the repository
   git clone <repo-url>
   cd <project-folder>
2. Install Dependencies
   npm install
3. Start Mock API (JSON Server)
   npm run dev
   this starts the mock api at:
   http://localhost:3001/users
4. start react app:
   npm run dev
 Features
1. User Management (CRUD)

Create a new user
View all users
Update existing user details
Delete a user

2. User Form Fields
First Name
Last Name
Phone Number
Email Address

Each field includes:
Required field validation
Input validation (e.g. email format)

3. Extensible Architecture
Configuration-driven form rendering
New fields (e.g. Date of Birth, Address) can be added with minimal changes
Validation and UI stay in sync

4. UI & UX
Clean and user-friendly layout
Styled using Tailwind CSS
Simple, intuitive interaction flow

 **Tech Stackb:**
Frontend: React (Vite)
Styling: Tailwind CSS
Form Handling: React Hook Form
Validation: Yup
Mock API: JSON Server

Deployment: github pages
