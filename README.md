# HIV Self Testing System - Frontend

Welcome to the HIV Self Testing System React project! This front-end application is designed to provide users with a seamless and user-friendly experience for self-testing of HIV. Please follow the steps below to get started.

## Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
- Make sure the back-end system is already up and running before trying to start the front end.

## Getting Started

1. **Clone the repository**

    ```bash
    git clone https://github.com/peter2707/COS70008-Front-End.git
    cd hiv-self-testing-system-frontend
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Environment Configuration**

    Copy `.env.example` to create a `.env` file in the root directory and modify the variables accordingly:

    ```bash
    REACT_APP_BACKEND_URL=http://localhost:3000
    ```

    Note: Replace the URL with the address of your running backend.

4. **Starting the Development Server**

    ```bash
    npm start
    ```

    This will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

5. **Building for Production**

    ```bash
    npm run build
    ```

    This will create a `build` directory with the optimized production build.

## Testing

To run the suite of tests:

```bash
npm test
```

This launches the test runner in interactive watch mode.

## Cleanup

Cleaning up your environment is essential to ensure smooth re-runs and to free up resources.

1. **Stop the Development Server**

   If the development server is running, press `Ctrl + C` in your terminal to stop it.

2. **Removing Node Modules & Build Files**

    If you want to completely clean up, including node modules and build files:

    ```bash
    rm -rf node_modules build
    ```

    Then, you can reinstall the dependencies using `npm install`.

## Contributing

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

## Feedback

If you have any feedback or issues, please open an issue in the repository or contact the maintainer.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

---

Thank you for being part of the HIV Self Testing System project!