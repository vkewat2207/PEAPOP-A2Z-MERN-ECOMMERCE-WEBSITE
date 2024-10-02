WEBSITE NAME PEAPOP-A2Z
https://peapop-a2z-mern-ecommerce-website-2.onrender.com

For payment please use card no 4242 4242 4242 4242 expiry 09/24 is baad kaam kuch bhi nd cvv any 3 digit no


Forgot to describe one important point here 
This is SEO friendly also with all meta data and meta tags favicon and all included for search engine to show this on Top 

MERN E-Commerce website with Admin Panel, React,BRAINTREE  Payment, Cloud Deployment, Email Invoice, and many features (complete features given below in Description )

🔥 Code Repositories:

https://github.com/vkewat2207/PEAPOP-A2Z-MERN-ECOMMERCE-WEBSITE
-

🔥 Features :
- Basic E-commerce Features- Product lists, Product Details, Cart, Checkout 
- Secure Card Payments / Cash payments
- Admin Panel - Add/Edit Orders. Add/Edit Products
- Sorting, Filtering, and Pagination queries using Mongoose
- Authentication with Passport JS strategies
- Order Emails, Reset Password Emails
- User Profile and user orders
-Admin can control the orders by 
"Not Process",
    "Processing",
    "Shipped",
    "deliverd",
    "cancel",

-Filter products by categories and price 
-Search button enabled 
-All requirement for signup and sign-in enabled 
-Forgot password functionality
-ALl functionality of adding to Cart to delete from Cart
-Homepage access provided to all without Register but for checkout items Login is must

🔥 Technical Details :
- React 18 
-
- React Router v6
- JSON-server for front-end testing
- MongoDB for Database
- Mongoose v7 as ODM
- REST API using Express
- API Authentication using Passport JWT
- MongoDB Atlas cloud database
- Vercel Server deployment
- Email using Nodemailer - using GMail SMTP system
- Payments using BRAINTREE - PaymentIntent based custom flow
-Please use Default Card no as 4242-4242-4242-4242
-CARD Expiry should be after 09/24 & CVV you can provide any 


BACKEND
Features:
Node provides the backend environment for this application
Express middleware is used to handle requests, routes
Mongoose schemas to model the application data
React for displaying UI components
Redux to manage application's state
Redux Thunk middleware to handle asynchronous redux actions
Demo
This application is deployed on Vercel Please check it out 😄 here.

See admin dashboard demo
-> Login using admin credentials
-> Go to admin dashboard
-> Create Product ,Create Category, Delete Product,Delete category
-> See USer Order and User Details
-> Chnage Order Status as per drop down menu 
"Not Process",
    "Processing",
    "Shipped",
    "deliverd",
    "cancel",


Clone the repository

git clone 
https://github.com/vkewat2207/PEAPOP-A2Z-MERN-ECOMMERCE-WEBSITE

Install
npm install in the project root will install dependencies in both client and server. See package.json

Some basic Git commands are:

git clone 
cd project
npm install
ENV
Create .env file for both client and server. See examples:
npm run dev (both server will run concurrently react and node.js)

Frontend ENV

Backend ENV

Vercel Deployment
Both frontend and backend are deployed on Vercel from the same repository. When deploying on Vercel, make sure to specifiy the root directory as client and server when importing the repository. See client vercel.json and server vercel.json.

Start development
npm run dev
Languages & tools
Node

Express

Mongoose

React

Webpack

Code Formatter
Add a .vscode directory
Create a file settings.json inside .vscode
Install Prettier - Code formatter in VSCode
Add the following snippet:
    {
      "editor.formatOnSave": true,
      "prettier.singleQuote": true,
      "prettier.arrowParens": "avoid",
      "prettier.jsxSingleQuote": true,
      "prettier.trailingComma": "none",
      "javascript.preferences.quoteStyle": "single",
    }
- 
Dpendency required to install in this project 
You can also check package.json file for dependencies

"dependencies": {
    "bcrypt": "^5.1.1",
    "bcryptjs": "^2.4.3",
    "braintree": "^3.25.0",
    "colors": "^1.4.0",
    "concurrently": "^9.0.1",
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.0",
    "express-formidable": "^1.2.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.6.3",
    "morgan": "^1.10.0",
    "nodemon": "^3.1.6",
    "react-icons": "^5.3.0",
    "slugify": "^1.6.6"
}



