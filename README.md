# Capstone

Cube is a live video streaming application made using React JS and Redux as frontend and NodeJS as backend, having functionality of basic CRUD (create-read-update-delete) operations.

# Functionality

- create/edit/delete Streams
- live Streams

# Setup

Download OBS studio for you preferred OS : https://obsproject.com

Clone the current client and API repositories :

```
git clone https://github.com/walid2d/cube
git clone https://github.com/walid2d/rtmpserver-cube
git clone https://github.com/walid2d/cube-server
```

### Install modules:

cd to each directory and run

```
npm install
```

### Server info:

Client runs on port 3000.
The cube-server runs on port 8080.
The rtmp-server (Real-Time Messaging Protocol) runs on port 1935

# OBS Setup

Start OBS studio

- Create a Scene
- Select the Sources that you want to Share

Then go to : Settings > Streams > Service > Select: Custom

Then Copy and Paste this on Server :

```
rtmp://localhost/live
```

### Start the app:

Fire up the cube server first :

```
nodemon index.js
```

Then start the front end :

```
npm start
```

Then start the rtmp server :

```
nodemon server.js
```

# Streaming

Step by Step

- Login
- Create a new Video
- Click Go Live
- Click Copy Link
- Go to OBS studio
- Go to Settings > Streams > Service
- Paste the Link on : Stream Key
- Hit ok
- And click Start Streaming
