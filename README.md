## Daily Diary Project
This is a standalone project. You will create a full-stack web application using React for the frontend and Express for the backend. The project will focus on state management, API interactions, and component-based architecture.
* The application displays daily diary posts from users one day at a time.
* The application provide ways to browse previous days (history) with two navigation buttons, one for the previous day, and another for the upcoming day. The upcoming day button will deactivate is the current posts are for today.
* Any user can contribute and submit a diary post.
* A diary post consists of a title, and body.
* A diary posts can be voted-up or voted-down by users.
* Users may up-vote or down-vote a post multiple times.
* Display the daily diary posts sorted by vote in descending order.

## Frontend (React) Technical Requirements
* Create a well-structured component hierarchy.
* Use functional components and hooks (e.g., useState, useEffect, useContext).
* Utilize React Context API for passing state between components.
* Implement controlled components for forms and inputs.
* Fetch data from the backend using axios or fetch.
* Handle loading and error states appropriately.
* Design a user-friendly interface using a CSS framework (e.g., Tailwind CSS) or custom CSS.
* Use React Router to manage navigation within the application.
  
## Backend (Express) Technical Requirements
* Create API endpoints to handle frontend requests and setup routes for different endpoints (e.g., GET, POST, PUT).
* Use Express middleware for logging requests and handling errors.
* Use an `node:fs` to store and manage the posts. Save each day posts in a separate file.
