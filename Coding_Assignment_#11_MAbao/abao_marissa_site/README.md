# Codin 1 – Assignment 11 (Docker + Next.js)

This project displays a `<h1>Codin 1</h1>` message using a Next.js web app that runs inside a Docker container. It was created for **Assignment 11** in **Business Systems Build and Testing**.

---

## 📁 Project Information

- Framework: **Next.js** (with TypeScript)
- Docker container name: `abao_marissa_coding_assignment11`
- Docker working directory: `/Abao_Marissa_site`
- Runs on: [http://localhost:7775](http://localhost:7775)

---

## 🐳 How to Run This Project Using Docker

```bash
# Step 1: Go to the project folder
cd abao_marissa_site

# Step 2: Build the Docker image
docker build -t abao_marissa_coding_assignment11 .

# Step 3: Run the Docker container
docker run --name abao_marissa_coding_assignment11 -p 7775:7775 abao_marissa_coding_assignment11

# Step 4: Open your browser and visit
http://localhost:7775
