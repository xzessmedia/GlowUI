# Glow UI

[![NPM](https://img.shields.io/npm/v/glow-ui.svg)](https://www.npmjs.com/package/glow-ui-mui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Docs](https://img.shields.io/badge/docs-GlowUI-blue?logo=githubpages&style=flat-square)](https://xzessmedia.github.io/GlowUI/)

Glow UI is a modern, vibrant, and highly customizable UI component library built on top of Material-UI. Designed for React applications, Glow UI allows developers to effortlessly create applications with a unique, glowing aesthetic.

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Customizing Themes](#customizing-themes)
- [Components](#components)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install Glow UI, you need to have [Node.js](https://nodejs.org/) installed. Run the following commands to add Glow UI to your project:

```shell
npm install glow-ui-mui @mui/material @emotion/react @emotion/styled
```

## Quick Start

Here's a quick example to help you get started with Glow UI:

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import { GlowThemeProvider } from 'glow-ui';
import GlowingButton from 'glow-ui/components/GlowingButton';

const themeConfig = {
  primaryColor: '#6366f1',
  secondaryColor: '#8b5cf6',
  fontFamily: 'Inter, sans-serif',
  glowIntensity: 0.8,
  borderRadius: 8,
};

const App = () => (
  <GlowThemeProvider config={themeConfig}>
    <GlowingButton />
  </GlowThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
```

## Customizing Themes

Glow UI allows for extensive theme customization to fit your brand identity:

- **Primary Color**: The primary accent used throughout the UI.
- **Secondary Color**: A complimentary color for additional accents.
- **Font Family**: Specify the font stack for typography.
- **Glow Intensity**: Adjust the glow effect around elements.
- **Border Radius**: Define the border radius for rounded components.

Modify the `config` object in `GlowThemeProvider` to tailor the design to your needs.

## Components

- **GlowingButton**: A button component with glowing effects.

*More components are coming soon. Keep an eye on our roadmap for upcoming releases.*

## Development

Clone the repository and install dependencies:

```shell
git clone https://github.com/xzessmedia/GlowUI.git
cd glow-ui
npm install
```

Run Storybook to start developing and previewing components:

```shell
npm run dev
```

Build the project:

```shell
npm run build
```

## Contributing

We welcome contributions from the community! If you'd like to contribute, please follow these guidelines:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a Pull Request.

Please adhere to the project's coding standards and ensure all tests pass before submitting.

## Metadata

The following fields should be included in your `package.json`:

```json
{
  "homepage": "https://xzessmedia.github.io/GlowUI/",
  "docs": "https://xzessmedia.github.io/GlowUI/",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/xzessmedia/GlowUI.git"
  },
  "bugs": {
    "url": "https://github.com/xzessmedia/GlowUI/issues"
  }
}
```

## License

Glow UI is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---
Elevate your application's UI with Glow UI — stylish, sophisticated, and scintillating.
