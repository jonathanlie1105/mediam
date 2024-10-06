# Mediam

**Mediam** is a web application for browsing and managing articles by category, providing users with an engaging and intuitive reading experience. This project is built using React, TypeScript, and Vite, featuring Hot Module Replacement (HMR) for a smooth development experience.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Routing](#routing)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse articles across different categories.
- View detailed information for each article.
- User-friendly interface built with React and Chakra UI.
- Responsive design for optimal viewing on various devices.
- Error handling with a custom 404 Not Found page.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mediam.git
   ```
2. Navigate to the project directory:
   ```bash
   cd mediam
   ```
3. Install the dependencies using pnpm:
   ```bash
   pnpm install
   ```

## Usage

To start the application, run:

```bash
pnpm dev
```

This will open the application in your default web browser at `http://localhost:5173`.

## Routing

The following routes are available in the application:

- **Home**: `/`
  - Displays the homepage with featured articles.
- **Articles**: `/articles`
  - Lists all articles available in the application.
- **About**: `/about`
  - Provides information about the application.
- **Article Details**: `/article/:id`
  - Displays detailed information for a specific article identified by its ID.
- **Articles by Category**: `/category/:id/:title`
  - Shows articles that belong to a specific category based on the ID and title.
- **Not Found**: `*`
  - Custom 404 page for unmatched routes.

## Technologies Used

- React
- TypeScript
- Vite
- Chakra UI
- React Router

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
