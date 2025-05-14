# Zentosys Task 5: Trello Clone Full Stack Application

This project is a Trello-like task management application created as part of the Zentosys internship program. The application allows users to create, organize, and manage tasks in a kanban board style interface.

## 🔍 Overview

This full stack web application provides functionality similar to Trello, allowing users to:
- Create and manage multiple boards
- Add lists to organize tasks by status or category
- Create, edit, and delete task cards
- Drag and drop cards between lists
- Collaborate with team members

## ✨ Features

- User authentication and authorization
- Customizable boards and lists
- Task cards with titles, descriptions, and due dates
- Drag and drop interface for intuitive task management
- Real-time updates for collaborative work
- Responsive design for desktop and mobile devices

## 🛠️ Technologies Used

### Frontend
- React.js
- Redux for state management
- React Beautiful DND for drag and drop functionality
- Material UI / Bootstrap for styling
- Axios for API requests

### Backend
- Node.js with Express
- MongoDB database with Mongoose ODM
- JWT for authentication
- RESTful API architecture

## 📋 Prerequisites

- Node.js (v14.x or higher)
- npm or yarn
- MongoDB (local or Atlas cloud database)
- Git

## 🚀 Setup and Usage

1. Clone the repository:
   ```
   git clone https://github.com/shivam-khode01/zentosys-task5.git
   ```

2. Navigate to the project directory:
   ```
   cd zentosys-task5
   ```

3. Install dependencies for both frontend and backend:
   ```
   # Backend dependencies
   cd server
   npm install
   
   # Frontend dependencies
   cd ../client
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the server directory
   - Add the following variables:
     ```
     PORT=5000
     MONGODB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

5. Start the development servers:
   ```
   # Start backend server
   cd server
   npm run dev
   
   # Start frontend server (in a new terminal)
   cd client
   npm start
   ```

6. Access the application in your browser at `http://localhost:3000`

## 📝 How to Use

1. Register a new account or login with existing credentials
2. Create a new board or select an existing one
3. Add lists to represent different stages of your workflow (e.g., "To Do", "In Progress", "Done")
4. Create task cards within the lists with relevant information
5. Drag and drop cards between lists as tasks progress
6. Edit or delete cards and lists as needed

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login existing user
- `GET /api/auth/user` - Get current user information

### Boards
- `GET /api/boards` - Get all boards for current user
- `POST /api/boards` - Create a new board
- `GET /api/boards/:id` - Get a specific board
- `PUT /api/boards/:id` - Update a board
- `DELETE /api/boards/:id` - Delete a board

### Lists
- `GET /api/lists/:boardId` - Get all lists for a board
- `POST /api/lists` - Create a new list
- `PUT /api/lists/:id` - Update a list
- `DELETE /api/lists/:id` - Delete a list

### Cards
- `GET /api/cards/:listId` - Get all cards for a list
- `POST /api/cards` - Create a new card
- `PUT /api/cards/:id` - Update a card
- `DELETE /api/cards/:id` - Delete a card

## 📷 Screenshots

![Dashboard View](screenshots/dashboard.png)
![Board with Lists and Cards](screenshots/board.png)
![Card Creation Interface](screenshots/card-creation.png)

## 🔄 Future Improvements

- Add card labels and priority flags
- Implement search functionality
- Add user profile customization
- Enable file attachments to cards
- Add activity logs and notifications
- Implement board sharing and team collaboration features

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check issues page.

## 📜 License

[MIT](LICENSE)

## 👨‍💻 Author

**Shivam Khode**

- GitHub: [@shivam-khode01](https://github.com/shivam-khode01)

## 🙏 Acknowledgements

- Zentosys for the internship opportunity
- All open-source libraries used in this project
