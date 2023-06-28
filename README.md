# Expo Boilerplate

This repository provides a boilerplate project for developing mobile applications using Expo. It includes a set of pre-configured tools and libraries to kickstart your mobile development process.

## Features

- Expo SDK 
- React Native 
- nativewind
- expo-router
- mobile/web

## Prerequisites

Make sure you have the following software installed on your development machine:

- Node.js 
- Expo CLI 

## Getting Started

Follow the steps below to get the project up and running on your local machine.

1. Clone the repository:

   ```
   git clone https://github.com/mehdinourollah/expo-app
   ```

2. Navigate to the project directory:

   ```
   cd expo-app
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the development server:

   ```
   npx expo start
   ```

5. Use the Expo client app to run the app on your iOS or Android device, or use an emulator/simulator.

## Project Structure

```
expo-app/
  ├── src/                 # src folder 
  |   ├──app/              # app folder
  │   ├──assets/
  │   ├──context/
  │   ├──styles/
  │   |   ├──main.css/     # tailwind requires it
  │   |   ├──index.ts/     # mobile import 
  │   |   ├──index.web.ts/ # mobile import 
  ├── index.js             # App entry point
  ├── app.json             # Expo configuration
  ├── package.json         # Project dependencies
  └── README.md            # Project README
```

## Libraries and Tools Used

- expo
- nativewind
- expo-router

## Contributing

Contributions are welcome! If you find a bug or want to add a new feature, please follow these steps:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Push the branch to your forked repository
6. Open a pull request

Please make sure to follow the existing code style and conventions.

## License

The expo-app is open source and available under the [MIT License](LICENSE).

## Contact

If you have any questions or suggestions, feel free to reach out to the project maintainer:

- [Email](mailto:mehdinourollah@gmail.com)
- [GitHub](https://github.com/mehdinourollah)

---

Thank you for using Expo Boilerplate! We hope this boilerplate helps you jumpstart your mobile app development with Expo. If you encounter any issues or have any feedback, please don't hesitate to reach out. Happy coding!
