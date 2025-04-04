# Simulate DDoS Attack

This repository contains a simple project to simulate a Distributed Denial of Service (DDoS) attack using Node.js and GitHub Actions.

## Overview

The project consists of two main parts:
1. **Node.js server**: A basic Express server simulates a vulnerable application that will process HTTP requests with some delay.
2. **GitHub Actions Workflow**: A script that simulates a DDoS attack by making multiple HTTP requests to the server in a loop.

## Prerequisites

Before running the project locally or on a remote server, ensure that the following are installed:

- [Docker](https://www.docker.com/products/docker-desktop) (optional, if you want to containerize the application)
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [GitHub Actions](https://github.com/features/actions) (to run the DDoS simulation)

## Running the Application

### 1. Build and Run with Docker


1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/simulate-ddos-attack.git
   cd simulate-ddos-attack

2. Build the Docker image:

   ```bash
   docker build -t ddos-sim .
3. Run the Docker container:
   ```bash
    docker run -p 3000:3000 ddos-sim
4. The server will now be running on http://localhost:3000.





   



## License

[MIT](https://choosealicense.com/licenses/mit/)

