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
## Formater

Prettier

```
pnpm add --save-dev --save-exact prettier
```

- Create configuration file

```
echo {}> .prettierrc.json
```

- Add configuration

```
{
    "singleQuote": true,
    "trailingComma": "none",
    "semi": false
}
```
- Add in package.json
```
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "format": "prettier --write \"src/**/*.+(js|jsx|json|css|md)\"",
    "preview": "vite preview"
  },
```
- Install Prettier extension to Visual Studio Code
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
