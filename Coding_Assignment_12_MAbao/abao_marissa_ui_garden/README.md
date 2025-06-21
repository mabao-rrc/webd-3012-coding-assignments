# Component Library – Coding Assignment 12

## Student: Marissa Abao  
Course: WEBD-3012  
Submission Date: June 30, 2025

This project is a responsive Web Component Library built using **React** and **Storybook**. It is designed for Docker-based deployment and includes a collection of reusable components such as buttons, labels, dropdowns, tables, images, cards, and more.

---

## 🚀 Getting Started with Docker (Production Build)

This guide shows how to build and run the component library using Docker on **localhost:8083**.

### 🔧 Prerequisites

- Docker installed on your machine  
- Terminal or command prompt access

---

### 📁 Project Structure

Coding_Assignment_12_MAbao/
├── abao_marissa_ui_garden/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Button/
│   │   │   │   ├── Component_button.tsx
│   │   │   │   ├── Component_button.types.ts
│   │   │   │   ├── Component_button.stories.tsx
│   │   │   │   └── Component_button.test.tsx
│   │   │   ├── Card/
│   │   │   │   ├── Component_card.tsx
│   │   │   │   ├── Component_card.types.ts
│   │   │   │   ├── Component_card.stories.tsx
│   │   │   │   └── Component_card.test.tsx
│   │   │   ├── Dropdown/
│   │   │   ├── Label/
│   │   │   ├── HeroImage/
│   │   │   └── Table/
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── index.tsx
│   │   └── ...
│   ├── .dockerignore
│   ├── .gitignore
│   ├── Dockerfile.prod
│   ├── nginx/
│   │   └── default.conf
│   ├── package.json
│   ├── tsconfig.json
│   ├── README.md
│   └── build/                 ← Generated after running `npm run build`

