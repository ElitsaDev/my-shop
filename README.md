# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Getting Started with project
    This Web application was created by React framework.
    The Rest service is a modified SoftUni practice-server, created by Viktor Kostadinov - Authentication and Collections.
    Also are used Bootstrap 4, HTML5 & CSS3 for structure, styling, and the result application is fully responsive.
    The project was started with the template (https://themewagon.com/themes/free-bootstrap-4-html5-ecommerce-website-template-malefashion/) but modified after that - added many forms, menu, and buttons, and change styling when necessary.

# Parts
The site is designed as e-commerce, but for the moment only the blog part is fully developed as a Minimal Vibe Product to be shown to the client. 
## 1. Home page:
### Header 
-On the right side is the top navigation with login, register, and logout functionality. When a user is a login there is shown his user email.
### Hero and Banner sections
Hero header with slider.
The content is static, but has links to the shop. 
### Product 
There are served content by client choice for best sellers' products with featured, marked as true, new arrivals (after a specific date and sorted ), and hot products with rating > 4. The CSS changes based on the active title and the product can have labeled marked. From here you can access product details, and add the product to the card. Features - can like the product is not available for now.
### Hot offer category
After asseccing the side there is timer and button to clicked. 
If you do not click for the specified time, the button is hidden and a text appears that the promotion is not active.
### 3 Last blogs 
If there are more blogs only the first 3 will be shown.
## 2. Shop
For now there you can sort products by price and see counting all available products.
Can access the detail page and add products to the card.
Features - Aside panel for search, fillter and pagination.
## 3. Pages - About us, Shopping card, Check Out, 
All pages here are accessible for guests.
Create Blog is only accessible to the Admin.
## 4. Blog
There is blog catalog whit all blogs if there are. When clicked on Read more you can access detail page of blog.
In this page user can get the full feeling of an individual experience based on his role.
On the detail page if you are loged in you can comment and can delete your comment. The counter of all comment is under the title of the blog and the date of creation.

## 5. Contact
There is google map and contact form with validation on email.
## Step 1. Install dependencies
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run: 
### npm start
## Step 2. Run server
In the server directory, you can run: 
### node server.js
Server started on port 3030. You can make requests to http://localhost:3030/
## Accesibility of different part of the project
### 1.1 Public Part (Accessible without authentication)
    Access to Sing up (register form), Sing in (login form), Home, Shop, Blog (blog-catalog, blog-details),
    Contact (contact form), and About page. 
### 1.2 Private Part 
   Registered users after successful login have a personal area:  
   A logged-in user can see the Discount code on the shopping cart and can comment on every blog on the details page.
   A logged-in user, which is an author and has an admin role in the blog can see the Edit/Delete blog buttons and use their functionality.
   A logged-in user, which is an author of the comment can see the Delete comment buttons and use its functionality.
   A guest user can only read blogs and details pages, without putting comments.  

   Only two users are Admins who can see Create blog page - they are pre-populated in the server system.
       User 1:  email: "peter@abv.bg"  and password: 123456
       User 2:  email: "john@abv.bg"  and password: 123456 

## Architecture
    For project is used single-page application architecture with client-side rendering of the content.
    In src folder are: commponents, context, hooks, services, utils 
    
## Components
   All application is divided into components. If specific styling is applied there is module.css for this component in the same folder. 
   In the project there are stateless (for example - Hero) and state-full components (for example - CountdownTimer).

   Controlled component - forms in the application.

image.png

## Hosted

https://react-male-fashion.web.app/

