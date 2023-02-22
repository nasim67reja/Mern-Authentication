# How to Build an Authentication System Using MERN Stack and JWT Tokens

## Introduction

MERN stack has become one of the most popular and powerful web development stacks in recent years, allowing developers to build robust and scalable web applications using MongoDB, Express, React, and Node.js. One of the key features of any modern web application is user authentication, which is an essential component for creating secure and personalized experiences for users.
<br>
In this post, I will be showcasing my MERN authentication project, which demonstrates how to implement user authentication in a MERN stack application using JWT and cookies. This project highlights the different steps involved in the authentication process, from user registration to login and logout, and provides insights into how JWT and cookies are used to authenticate and authorize users.
<br>
In addition to demonstrating the implementation of authentication in a MERN stack project, this post will also provide readers with an overview of the different technologies used in the project, as well as any challenges faced during the development process and how they were overcome.
<br>
By the end of this post, readers will have a better understanding of how to integrate authentication in their own MERN stack applications, as well as gain insights into best practices and potential challenges that may arise during the implementation process.

## Getting Started

To get started with this MERN authentication project, follow these steps:

1. Clone the repository to your local machine.

` git clone https://github.com/nasim67reja/Mern-Authentication.git`

2. Install the necessary dependencies for the server-side and client-side code.

```bash
cd Mern-Authentication
npm i
cd client
npm i
```

3. Create a `.env` file in the root directory of the project, and set the following environment variables:

```
NODE_ENV=development
PORT=8000
DATABASE=<your-mongodb-uri>
DATABASE_PASSWORD=<your-password>

JWT_SECRET=<your-jwt-secret>

```

4. Start the server and client-side applications concurrently

```
npm run dev
cd client
npm start
```

5. Open your web browser and navigate to `http://localhost:3000` to view the application.

That's it! You can now start exploring the different features of the application and begin implementing your own authentication system. If you have any issues or questions, please contac `nasimreja67@gmail.com`

## Authentication Process

The authentication process in our MERN authentication project involves the following steps:

1 . User Registration: Users can create a new account by providing their email address and password. Once the user submits the registration form, their password is encrypted and securely stored in our MongoDB database using the bcrypt library.If the account succesfully create than a JWT (JSON Web Token) is generated and sent back to the user as a response.

2. User Login: After registering, users can log in to their account by entering their email and password. When a user submits their login details, our server verifies the email and password by checking them against the encrypted password in the database. If the email and password match, a JWT (JSON Web Token) is generated and sent back to the user as a response.

3. Using JWT for Authorization: The JWT contains a unique secret key that is used to identify the user and authorize their access to restricted areas of the application. This token is sent with every subsequent request the user makes to the server, allowing the server to identify and authenticate the user.

4. Using Cookies for Persistence: To maintain a user's session across different pages and even after they close their browser, we store the JWT as a secure HTTP-only cookie on the user's browser. This ensures that the token is not accessible to JavaScript and is only sent to the server with every request.

5. User Logout: When a user clicks on the logout button, the server deletes the JWT cookie from the user's browser, effectively logging them out and invalidating the token.

By using JWT and cookies, we can create a secure and scalable authentication system that provides a seamless experience for users. It allows them to securely register, log in and log out, and access restricted areas of the application.

## Technologies

### In server

1. [Node.js](https://nodejs.org/en/): A powerful open-source server environment that allows us to run JavaScript on the server-side. We used Node.js for creating our server-side code to handle user registration, login, and logout.

2. [Express](https://expressjs.com/): A fast and minimalist web application framework for Node.js that provides a wide range of features for building web applications. We used Express to create our REST API and to handle HTTP requests from our front-end React application.

3. [MongoDB](https://www.mongodb.com/): A document-based NoSQL database that is ideal for storing and managing large volumes of data. We used MongoDB to store user data, including email addresses and encrypted passwords.

4. [JWT](https://jwt.io/): JSON Web Tokens are a secure way of transmitting information between parties. We used JWT to generate and validate the authentication tokens that are sent back to users when they successfully log in.

5. Cookies: Cookies are small data files that are stored on a user's device and sent back to the server with every subsequent request. We used cookies to store the JWT token on the user's browser, allowing them to maintain their session across multiple pages and even after they close their browser.

6. [bcrypt.js](https://www.npmjs.com/package/bcrypt): A library to help hash passwords.

### Client

7. [ReactJs](https://reactjs.org/): A popular JavaScript library for building user interfaces. We used React to create our front-end user interface, which includes registration and login forms, as well as other features like user profile and dashboard pages.

## Challenges I faced and how I overcame them

### How I Overcame a Challenge in Storing JWT Token in Browser Cookies in my MERN Authentication Project

During the development of my MERN authentication project, I faced a challenge where I was unable to find the JWT token in the browser's cookie. The token was being successfully set in Postman, but for some reason it was not showing up in the browser's cookie.

After some investigation, I discovered that the issue was caused by Axios, the library I was using to send HTTP requests to my server. By default, Axios does not send cookies with cross-origin requests. This meant that the JWT token was not being included in the request to my server, and so it was not being set in the browser's cookie.

To solve this issue, I had to set the withCredentials flag to true in Axios. This tells Axios to include cookies with cross-origin requests. I added the following line of code to my client-side code:

```js
axios.defaults.withCredentials = true;
```

Next, I had to configure my server to allow cross-origin requests with credentials. I did this by adding the credentials: true option to my CORS configuration:

```js
app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  })
);
```

After making these changes, the JWT token was successfully included in the request to my server, and it was set in the browser's cookie as expected.

This was a challenging issue to overcome, but by understanding how Axios handles cross-origin requests and how to configure CORS to allow credentials, I was able to solve the problem and get my authentication system working as intended. I hope this example helps readers understand the process of problem-solving and troubleshooting during the development of an authentication system.

## Conclusion

In conclusion, this post has provided an overview of how I implemented authentication in a MERN stack project using JWT and cookies. The authentication process involves user registration, login, and logout, and requires the use of several technologies including Node.js, Express, React, and MongoDB. I also highlighted a challenge I faced with storing the JWT token in browser cookies, and how I overcame it by enabling axios.defaults.withCredentials = true in the client-side code and setting credentials: true in the server-side CORS configuration.

Overall, implementing authentication in a MERN stack project is crucial for ensuring the security and privacy of user data. By utilizing JWT and cookies, developers can provide a seamless user experience while maintaining the security of their application. It's important to be aware of the potential challenges that can arise, such as issues with storing tokens in browser cookies, and to have a solid understanding of the technologies being used in order to effectively troubleshoot and solve these problems.
