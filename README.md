# ListCheckR

"Streamline Your Life, One Task at a Time!"

Welcome to ListCheckR, your digital companion for effortless task management and productivity enhancement. This elegantly designed application is more than just a checklist; it's a powerful tool that helps you regain control of your time, organize your thoughts, and achieve your goals with grace.

<img width="1440" alt="toDo_app" src="https://github.com/Shivang-Chauhan/to-do-list/assets/135962677/605fb013-26c5-48dc-bacd-b787c69ac287">

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Follow these steps to get the To-Do List app up and running on your local machine.

### Prerequisites

- Node.js and npm installed on your system.
  
### Installation

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/your-username/todo-list-app.git

## Usage

1. To download all the necessary packages and dependencies:
- ```shell
   npm install
  ```
  
2. To start the Front-end of the to-do List Web Application, run the following command:
- ```shell
     npm start
  ```

3. To start the Back-end of the to-do List Web Application, run the following command, after you are finished with installing all the necessary dependencies:
- ```shell
     nodemon app.js
  ```

## Features

### 1. User Authentication

Our To-Do List App includes a robust user authentication system that offers the following features:

- **Sign Up**: Users can create a new account by providing a valid email address and password.

- **Login**: Registered users can log in with their email and password to access their to-do lists.

- **Logout**: Users can securely log out of their accounts when done.

- **Error Handling**: User-friendly error messages for failed login attempts and other authentication-related issues.

### 2. To-Do List Management

Once authenticated, users can enjoy the following features for managing their to-do lists:

- **Create Tasks**: Easily add new tasks to your to-do list. The app keeps track of all your tasks in one place.

- **Edit Tasks**: Need to make changes to a task? Just click on the edit icon to edit the text.

- **Delete Tasks**: Remove tasks you no longer need with the click of a button.

### 3. Protected Routes

To ensure data privacy and security, our app utilizes protected routes:

- **Authenticated Access**: Only logged-in users can access the to-do list functionality. Unauthorized users are redirected to the login page.

- **Route Guarding**: Protected routes are guarded to prevent unauthorized access. Users without valid authentication tokens cannot access these routes.

### 4. MongoDB Integration

We've integrated MongoDB, a powerful NoSQL database, to provide a seamless experience for authentication:

- **Data Storage**: User account details and to-do lists are securely stored in the MongoDB database.

- **Data Retrieval**: Tasks and user information are fetched from the database for an up-to-date experience.


## Contributing

If you'd like to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix: git checkout -b feature-name
- Make your changes and commit them: git commit -m 'Add new feature'
- Push to the branch: git push origin feature-name
- Create a pull request on GitHub.

