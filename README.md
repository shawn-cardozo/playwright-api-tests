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

### 2️⃣ Install Playwright
```bash
npx playwright install

### ▶️ Run Tests & Generate Allure Report
This command will::
- Execute Playwright tests
- Generate Allure report
- Open Allure report in browser
```bash
npm run allure:report

### 🔍 Optional Commands

- Run Playwright tests only:
npx playwright test

- Generate Allure report:
npm run allure:generate

- Open Allure report:
npm run allure:open

### 📁 Project Structure
tests/                  # Test specifications
playwright.config.ts    # Playwright configuration
allure-results/         # Allure raw results
allure-report/          # Generated HTML report
package.json
README.md

### 📊 Allure Report Features
Test execution summary

Step-wise test flow

Screenshots and traces on failure

Detailed logs and error details

### 👤 Author

Shawn Cardozo
Senior QA Automation Engineer / SDET