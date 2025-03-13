
# Minimal Landing Page Scaffold

A minimal Node.js + Express + EJS landing page scaffold with MongoDB, designed to help developers start quickly without building everything from scratch.

## Features

- 🏗 **MVC architecture** for better code organization
- 🎨 **Pure CSS for styling**
- 🗄 **MongoDB integration**
- 🚀 **Ready-to-use scaffold** (No services included, just a base to build upon)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/DelgadoElias/fintech_landing.git --depth=1
   cd your-repo
   ```

2. Create a **.env** file in the root directory and add the following variables:
   ```sh
   PORT=3000  # Change if needed
   MONGODB_URI=mongodb://localhost:27017/yourdatabase
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Start the server:
   ```sh
   npm start
   ```

## Project Structure

```
/your-repo
│── /public         # Static assets (CSS, images, etc.)
│── /views          # EJS templates
│── /routes         # Express routes
│── /controllers    # Application logic
│── /models         # Mongoose models
│── /utils          # Utils like middlewares or functions
│── /bin            # File containing the main entry point
│── .env            # Environment variables (ignored in Git)
│── package.json    # Dependencies and scripts
```

## Contributing

Feel free to fork this repository, submit issues, or open pull requests to improve it!

## License

[MIT](LICENSE)
