# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Create project
```
pnpm create vite
```
```
pnpm i
pnpm run dev
```
## Add in .eslintrc.cjs after of rules
```
overrides: [
    {
      files: ['src/*.js', 'src/*.jsx'],
      rules: {
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'comma-dangle': ['error', 'never']
      }
    }
  ]
```
## React Router DOM
```
pnpm i react-router-dom
```
## Add in main.jsx the route

## Runtime type checking for React props and similar objects.
```
pnpm i prop-types
```