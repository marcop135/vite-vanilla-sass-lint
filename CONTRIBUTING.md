# Contributing to Vite Vanilla JS + Sass Starter

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing to this project.

## 🚀 Getting Started

1. **Fork the repository** and clone your fork locally
2. **Install dependencies**: `npm install`
3. **Create a branch** for your changes: `git checkout -b feature/your-feature-name`

## 📋 Development Workflow

### Prerequisites

- Node.js v22.14+ (check `.nvmrc` for the exact version)
- npm (comes with Node.js)

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Lint all files (JS, CSS, SCSS, HTML)
npm run lint:fix     # Lint and auto-fix issues
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
npm run test         # Run tests
npm run test:ui      # Run tests with UI
npm run test:coverage # Run tests with coverage
npm run clean        # Remove dist folder
npm run audit        # Check for security vulnerabilities
```

### Code Quality

Before submitting a PR, ensure:

- ✅ All tests pass: `npm run test`
- ✅ Linting passes: `npm run lint`
- ✅ Formatting is correct: `npm run format:check`
- ✅ Build succeeds: `npm run build`

### Pre-commit Hooks

This project uses Husky and lint-staged to automatically:
- Run ESLint and fix issues on staged JS files
- Run Stylelint and fix issues on staged CSS/SCSS files
- Format staged files with Prettier

These hooks run automatically when you commit. If they fail, fix the issues and commit again.

## 📝 Code Style Guidelines

### JavaScript

- Use ES6+ features
- Follow ESLint rules (configured in `eslint.config.js`)
- Use single quotes for strings
- Always use strict equality (`===`)
- Use camelCase for variables and functions
- Add JSDoc comments for complex functions

### CSS/SCSS

- Follow Stylelint rules (configured in `.stylelintrc`)
- Use SCSS features (variables, mixins, nesting)
- Keep selectors specific but not overly nested
- Use meaningful class names

### HTML

- Follow HTMLHint rules (configured in `.htmlhintrc`)
- Use semantic HTML5 elements
- Always include alt text for images
- Use lowercase for tags and attributes
- Use double quotes for attributes

### Git Commit Messages

- Use clear, descriptive commit messages
- Start with a verb in imperative mood (e.g., "Add", "Fix", "Update")
- Keep the first line under 72 characters
- Add more details in the body if needed

Example:
```
Add pre-commit hooks with Husky

- Install husky and lint-staged
- Configure pre-commit hook
- Add lint-staged configuration to package.json
```

## 🧪 Testing

- Write tests for new features
- Ensure all tests pass before submitting
- Aim for good test coverage
- Use descriptive test names

## 📦 Pull Request Process

1. **Update your fork** with the latest changes from upstream
2. **Create a feature branch** from `master`
3. **Make your changes** following the code style guidelines
4. **Add tests** for new functionality
5. **Update documentation** if needed
6. **Ensure all checks pass** (lint, format, tests, build)
7. **Submit a pull request** with a clear description

### PR Checklist

- [ ] Code follows the project's style guidelines
- [ ] Tests added/updated and passing
- [ ] Documentation updated (if needed)
- [ ] No console errors or warnings
- [ ] Build succeeds
- [ ] Linting passes
- [ ] Formatting is correct

## 🐛 Reporting Issues

When reporting issues, please include:

- **Description**: Clear description of the issue
- **Steps to reproduce**: Detailed steps to reproduce the issue
- **Expected behavior**: What you expected to happen
- **Actual behavior**: What actually happened
- **Environment**: Node.js version, OS, browser (if applicable)
- **Screenshots**: If applicable

## 💡 Feature Requests

Feature requests are welcome! Please:

- Check if the feature has already been requested
- Provide a clear description of the feature
- Explain the use case and benefits
- Consider implementation complexity

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🙏 Thank You!

Your contributions make this project better for everyone. Thank you for taking the time to contribute!
