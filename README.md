**Zheets - Google Sheets Clone**

Zheets is a simple and functional Google Sheets clone built using React. It mimics essential spreadsheet features, allowing users to manage data, apply formatting, and perform basic operations.

**Features**

Core Features

Dynamic Grid Layout: Adjustable number of rows and columns.

Cell Editing: Supports text input and basic formula evaluation.

Data Formatting: Bold, italic, uppercase, and lowercase text formatting.

Find and Replace: Search for specific values and replace them.

Duplicate Removal: Automatically removes duplicate values from the spreadsheet.

Additional Features

Add/Delete Rows and Columns: Dynamically adjust the size of the spreadsheet.

Row and Column Headers: Clearly labeled rows and columns for easy navigation.

Sticky Headers: Column headers remain visible while scrolling.

**Installation**

Follow the steps below to set up the project on your local machine:

Prerequisites

Node.js and npm installed on your system.

A code editor like Visual Studio Code.

Steps

Clone the repository:

git clone <repository_url>

Navigate to the project directory:

cd zheets

Install dependencies:

npm install

Start the development server:

npm start

Open the application in your browser:

http://localhost:3000

**Project Structure**

├── src
│   ├── components
│   │   ├── Toolbar.js       // Toolbar for formatting and tools


│   │   ├── Spreadsheet.js  // Core spreadsheet grid component


│   │   ├── Cell.js         // Individual spreadsheet cell


│   │   └── AddControls.js  // Add/Delete row and column controls


│   ├── App.js              // Main application logic
│   ├── App.css             // Global styles
│



├── public
│   └── index.html          // Root HTML file
│


├── README.md               // Project documentation
└── package.json            // Dependencies and scripts

**Usage**

Editing Cells: Click on any cell to edit its contents. Press Enter to apply changes.

Formatting Cells:

Select a cell and click the desired formatting button (e.g., Bold, Italic).

Formulas: Begin input with = to use formulas (e.g., =5+5).

Find & Replace:

Click "Find & Replace," then follow the prompts to replace values.

Add/Delete Rows/Columns:

Use the buttons at the bottom of the spreadsheet to add or delete rows and columns.

Technologies Used

Frontend: React.js

Styling: CSS

**Future Enhancements**

Export/Import Functionality: Allow users to save and load spreadsheet data.

Advanced Formulas: Support for more complex calculations.

Cell Merging: Enable merging of adjacent cells.

Theming: Dark mode and customizable themes.

Contributing

Contributions are welcome! To contribute:

Fork the repository.

Create a new branch:

git checkout -b feature-name

Commit your changes:

git commit -m 'Add some feature'

Push to the branch:

git push origin feature-name

Submit a pull request.

**License**

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments

Inspired by Google Sheets.

Built with React.js to showcase dynamic UI capabilities.

Start managing your data effectively with zHeets!

