# Unbundl Frontend Assessment

## Overview

This project is a React-based frontend application developed as part of the Unbundl Frontend Developer Assessment.

The application includes:

* Why Whistle section
* Happy Smilers section
* FAQ Accordion section
* Responsive design for desktop, tablet, and mobile devices
* API integration with loading and error handling

---

## Features

### Why Whistle

* Reusable card-based section
* Responsive grid layout
* Figma-inspired UI implementation

### Happy Smilers

* Data fetched from RandomUser API
* Dynamic rendering using React
* Loading state handling
* Error state handling

### FAQ Accordion

* Expand/Collapse functionality
* State management using React Hooks
* Interactive user experience

---

## Tech Stack

* React.js
* JavaScript (ES6+)
* CSS3
* Fetch API

---

## API Used

RandomUser API

https://randomuser.me/api/?results=5

The Happy Smilers section fetches user data dynamically from the RandomUser API using React's useEffect hook and Fetch API. Loading and error states were implemented to handle API requests gracefully and improve user experience. The UI was built using reusable React components and responsive CSS to match the provided design across different screen sizes.
---

## Project Structure

src/

├── assets/

├── components/

│   ├── WhyWhistle/

│   ├── HappySmilers/

│   └── FAQ/

├── data/

├── services/

├── App.js

└── index.js

---

## Installation

Clone the repository:

git clone <repository-url>

Navigate to the project folder:

cd unbundl-frontend-assessment

Install dependencies:

npm install

Run the development server:

npm start

---

## Build for Production

npm run build

---

## Git Commit History

* Initialize project using Create React App
* Build Why Whistle section
* Build Happy Smilers section with API integration
* Build FAQ accordion section

## Links

- Live Demo: https://unbundl-frontend-assessment.vercel.app
- GitHub Repository: https://github.com/Rishabh2446/unbundl-frontend-assessment

---

## Author

Rishabh Gupta
