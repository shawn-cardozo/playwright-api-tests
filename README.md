# Playwright Automation Framework with Allure Reporting

This repository contains an end-to-end automation framework built using **Playwright** with **Allure reporting** for rich and detailed test execution insights.

---

## 🚀 Tech Stack
- Playwright
- TypeScript
- Allure Reports
- Node.js

---

## 📦 Prerequisites
Ensure the following are installed:
- Node.js (v18+ recommended)
- npm
- Java (required for Allure reports)

---

## 🔧 Setup Instructions

### 1️⃣ Install dependencies
```bash
npm install
```

### 2️⃣ Install Playwright
```bash
npx playwright install
```

### ▶️ Run Tests & Generate Allure Report
This command will:
- Execute Playwright tests
- Generate Allure report
- Open Allure report in browser
```bash
npm run allure:report
```

### 🔍 Optional Commands

- Run Playwright tests only:
```bash
npx playwright test
```
- Generate Allure report:
```bash
npm run allure:generate
```
- Open Allure report: 
```bash
npm run allure:open
```
---

### 📁 Project Structure
```text
.
├── tests/
│   │   ├── users.spec.ts       # User-related API tests
├── utils/
│       ├── env.ts              # Reusable API client
│
├── playwright.config.ts        # Playwright & Allure configuration
├── package.json                # Project dependencies & scripts
├── allure-results/             # Allure raw test results
├── allure-report/              # Generated Allure HTML report
└── README.md                   # Project documentation
```
---

### 📊 Allure Report Features
```text
* Test execution summary

* Step-wise test flow

* Screenshots and traces on failure

* Detailed logs and error details
```
---

### 👤 Author

**Shawn Cardozo**

Senior QA Automation Engineer / SDET