# EZ-Interview

EZ-Interview is a web application designed to facilitate the interview process with real-time face detection, gaze tracking, and AI-powered test generation. This project aims to improve the efficiency and effectiveness of remote interviews by providing advanced features for both interviewers and candidates.

## Features

- **Real-time Face Detection and Gaze Tracking:** Uses AI to monitor the candidate's focus during the interview.
- **AI-Powered Test Generation:** Automatically generates test questions based on predefined criteria.
- **Automated Interview Scheduling:** Allows interviewers to schedule interviews with automated email notifications.
- **Secure User Authentication:** Ensures that only authorized users can access the platform.

## Technologies Used

- **Frontend:** React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Real-time Communication:** Socket.io
- **Hosting:** Firebase

## Demo

Check out the live demo of the project: [EZ-Interview Demo](https://ez-interview-demo.example.com)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Firebase Account

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/farhan7479/ez-interview.git
    cd ez-interview
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the root directory and add the following variables:

    ```env
    REACT_APP_FIREBASE_API_KEY=your-firebase-api-key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
    REACT_APP_FIREBASE_PROJECT_ID=your-firebase-project-id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your-firebase-storage-bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-firebase-messaging-sender-id
    REACT_APP_FIREBASE_APP_ID=your-firebase-app-id
    MONGODB_URI=your-mongodb-uri
    ```

4. **Run the development server:**

    ```sh
    npm start
    ```

    The app should now be running on [http://localhost:3000](http://localhost:3000).

### Usage

1. **Register and log in:**

    Create a new account or log in with existing credentials.

2. **Schedule an interview:**

    Navigate to the scheduling page and select a suitable date and time for the interview. Automated email notifications will be sent to the candidate.

3. **Conduct the interview:**

    Start the interview session and use the real-time face detection and gaze tracking features to monitor the candidate. Generate and administer test questions as needed.

## Deployment

To deploy the project on Firebase, follow these steps:

1. **Install Firebase CLI:**

    ```sh
    npm install -g firebase-tools
    ```

2. **Login to Firebase:**

    ```sh
    firebase login
    ```

3. **Initialize Firebase project:**

    ```sh
    firebase init
    ```

    Select the following options:
    - Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
    - Use an existing project
    - Build directory: `build`
    - Single-page app: `y`

4. **Build the project:**

    ```sh
    npm run build
    ```

5. **Deploy to Firebase:**

    ```sh
    firebase deploy
    ```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Author:** Farhan Shahid
- **Email:** farhan078609@gmail.com
- **LinkedIn:** [Farhan Shahid](https://www.linkedin.com/in/farhan-shahid-709baa248/)
- **GitHub:** [farhan7479](https://github.com/farhan7479)

---

Feel free to reach out if you have any questions or if you'd like to collaborate on this project!
