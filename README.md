# form2email

## How to Create a Feedback Form With Backend Using ReactJS, NodeMailer and Gmail

In this step by step tutorial we will create an application to manage feedbacks, from the back-end to the front-end using ReactJS for the front-end and NodeJS, Nodemailer and Gmail for the back-end.

- We will build an application with a form where the user can write his name, email, and his feedback.

- The form data will be sent to a NodeJS back-end application over an API.

- Then the Data will be formatted to an HTML page, then resent to an Gmail account using Nodemailer.

- To keep our code architecture clean, we will group each functionality in different file.

- We will learn how to manage cors in separate file with a special configuration folder "/config".

- We will manage validations in a different file: "validations/feedback.js".

- All our functions related to the route "/feedback" will be managed in a separate file too: "/controllers/feedbackController.js".

- A rate limiter (5 feedbacks / hour) will be used to block spams: "/middlewares/rateLimiter.js".

- We will run our back-end in a Linux machine using pm2, this will allow us to restart if our application crash or the server reboot and keep a logs for different events.

Read the article on medium: ...