# Apple-Style Calculator Clone

This project is a web-based calculator that mimics the design and functionality of the Apple calculator. Built using TypeScript, HTML, and CSS, this calculator supports basic operations (addition, subtraction, multiplication, and division) and allows for chained calculations. It also handles division by zero gracefully by displaying an error message.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Basic Operations**: Supports addition, subtraction, multiplication, and division.
- **Chained Calculations**: Allows users to perform calculations in sequence.
- **Error Handling**: Displays an error message when attempting to divide by zero.
- **Operation History**: Shows the sequence of operations being performed.
- **Responsive Design**: Adapts to different screen sizes, ensuring usability on various devices.

## Demo

You can check out the live demo of the calculator [here](https://20242-ingenieria-web-udea-mj.github.io/taller-html-sebastian-ruiz/).

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/apple-calculator-clone.git
   cd apple-calculator-clone
   ```

2. **Install dependencies:**
using node and npm

   ```bash
   npm install
   ```
3 . **Build the project::**
Compile the TypeScript files:

   ```bash
   npx tsc
   ```
4. **Run the project:**
You can open the index.html file in your web browser directly, or use a simple server:

   ```bash
    npx http-server .
   ```

## Usage

- **Basic Calculations**: Enter numbers and operations using the buttons. Press `=` to see the result.
- **Clear**: Press `C` to reset the calculator and start a new calculation.
- **Operation History**: The operation history is displayed above the main result display, showing the sequence of operations.

## Project Structure

```plaintext
apple-calculator-clone/
├── src/
│   ├── components/      # (Optional) Component-based structure
│   ├── styles/          # Stylesheets (CSS files)
│   ├── index.html       # Main HTML file
│   ├── index.ts         # Main TypeScript file
│   └── utils/           # Utility functions
├── dist/                # Compiled JavaScript files
├── tsconfig.json        # TypeScript configuration
├── package.json         # Node.js dependencies and scripts
└── README.md            # Project documentation
```

## Technologies Used

- **TypeScript**: For type-safe JavaScript development.
- **HTML**: For structuring the content.
- **CSS**: For styling the application.
- **Node.js & npm**: For package management and development tooling.


License
This project is licensed under the MIT License - see the LICENSE file for details.
