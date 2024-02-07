## TH-React Portfolio


## Description

This portfolio is a single page application built up by using **React, React icons, Vite, Tailwindcss, HTML** and a place to share the six of the projects with developers and to collaborate on the projects.
This will show the employers looking for candidates with experience building the single-page application and assess whether the skills are what they wanted in their candidates.

## Netlify Deployed Portfolio Link:

This application is deployed to GitHub Pages and the URL of the functional deployed application is **https://super-dusk-619db2.netlify.app/#projects**.

## GitHub Repo Link:

The repository name is **20s-react-portfolio** and the URL of the GitHub repository is **https://github.com/TammyH7/TH-React-Portfolio**.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

1.  This portfolio application requires the installation of node.js from the website, https://www.node.js and the node package manager(npm) which is a software manager and installer which puts the modules so that the node project can utilize it, and also, it manages dependency conflicts intelligently and initialized using **npm init**". The package.json will be generated and will contains all the details of the application in which the user have inputted during the npm initialization.

2.  This react application is created by entering at command prompt :-

    - npm i vite@4.4.1
    - In your text editor, click **y** to proceed
    - name the project and click enter
    - select **React** framework
    - select **JavaScript** framework
    - npm i 
    - npm run dev (run the apps in the development and http://localhost:5173 to view it in the browser)
    - npm install react-icons --save (for including the popular icons easily with react-icons)
    - npm install validator (to validate the email)


## Usage

1.  **Home Page Setion**

- GIVEN a single-page application portfolio for a web developer
- WHEN I load the portfolio
- THEN I am presented with a page containing a header, a section for content, and a footer (side nav bar & hamburber menu presented for small screens)
- WHEN I view the header
- THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio when I view the navigation titles
- THEN I am presented with the titles 
    - About Me, 
    - Portfolio, 
    - Contact
    - Resume
    - The title corresponding to the current section is highlighted
- WHEN I click on a navigation title
- THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted

2.  **About Me Section**

- THEN I see a recent photo or avatar of the developer and a short bio about them

3.  **Portfolio Section**

- WHEN I am presented with the Portfolio section
- THEN I see titled images of six of the developer’s applications

4.  **Contact Section**

- WHEN I am presented with the Contact section then I see a contact form    with fields for: 
    - Name,
    - Email address
    - Message

5.  **Contact Form Validation**

- WHEN I move my cursor out of one of the form fields without entering text
- THEN I receive a notification that this field is required

6.  **Email Validation**

- WHEN I enter text into the email address field
- THEN I receive a notification if I have entered an invalid email address

7. **Footer**

- WHEN I view the footer
- THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)

## License

This project is licensed under the terms of the MIT license


Copyright 2024 All right reserved.