[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/2IAatefz)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=15402500)
## CS472-Final-Project-July-2024 (Daily Diary Project)
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

## Bonus (2 extra points)
* Deploy the frontend on a service like Netlify or Vercel.

    -> I use Vercel for front-end deployment.
* Deploy the backend on a service like Heroku or Render.

    -> I use Render for back-end deployment.
* Provide links to the deployed applications.

    -> Link to application: https://final-project-brian-work-1199.vercel.app/

## Evaluation Criteria
* Does the application meet all specified requirements?
* Are all features implemented and working correctly?
* Is the code well-organized and easy to understand?
* Are best practices followed for both React and Express?
* Is the user interface intuitive and visually appealing?

### Notes
* A commit per feature is required, with a meaningful commit message.
* A daily push is required to track your code progress and measure your performance.
* You may only use and submit code to the repository provided by `maharishi-university` organization, do not submit code to your personal repository.
* Students are expected to be available on MS-Teams to receive calls and check on their progress every day from 10:00 AM to 12:00 PM, and 2:00 PM to 3:00 PM during the project.

## Need assistance?
Feel free to contact me any day between 10:00 AM to 12:00 PM, and 2:00 PM to 5:00 PM, except for Sunday. I’m available to assist all teams with all kinds of requests (system design, backend, frontend, fixing code bugs.. etc). The project is a learning experience and I want everyone to finish the project successfully and meet the course learning outcomes.

## Final Evaluation 
* The submission deadline is on Wednesday at 9:00 PM. I might invite you to a meeting after the final exam to discuss your project if needed.
* It's advised that you submit your code on Wednesday morning, and prepare for your final exam.
* Your final exam will be on Thursday, from 10:00 AM to 12:00 PM, in the Foster 336 classroom.

Good luck, and happy coding!

_Code Honor Submission Policy: Remember to respect the code honor submission policy. All written code must be original. You may not share any part of your code with other students. Code duplications will results to receiving NC for the final project. Presenting any code as one’s own work when it came from another source is plagiarism, which includes any matching patterns and code snippets, and will affect your grade. The use of AI is not permitted in this assignment. For more details, check the full course policies in the syllabus._
