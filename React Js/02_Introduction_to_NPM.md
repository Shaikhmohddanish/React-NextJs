# Introduction to NPM

## What is NPM?

NPM (Node Package Manager) is the default package manager for Node.js. It allows you to:

1. Install JavaScript packages for your projects
2. Manage dependencies and versions
3. Run scripts defined in your package.json file
4. Share your own packages with the community

## Why Use NPM for React?

While you can use React via CDN as we saw in the previous section, using NPM provides several advantages:

1. **Dependency Management**: NPM helps manage React and its dependencies
2. **Build Tools Integration**: Enables the use of build tools like Webpack, Parcel, etc.
3. **Access to Ecosystem**: Easy access to thousands of React-related packages
4. **Version Control**: Precise control over which versions of packages you use

## Setting Up a React Project with NPM

### Step 1: Install Node.js and NPM

First, you need to install Node.js which comes with NPM:
- Download and install from [nodejs.org](https://nodejs.org/)
- Verify installation with:

```bash
node -v
npm -v
```

### Step 2: Create a New Project Directory

```bash
mkdir my-react-app
cd my-react-app
```

### Step 3: Initialize NPM

This creates a `package.json` file which will track your project dependencies and settings.

```bash
npm init -y
```

The `-y` flag accepts all defaults. You'll get a `package.json` file that looks something like this:

```json
{
  "name": "my-react-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### Step 4: Create Basic Project Structure

```bash
mkdir src
touch src/index.js
touch index.html
```

### Step 5: Edit Your HTML File

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My React App</title>
</head>
<body>
    <div id="root"></div>
    <script src="./src/index.js"></script>
</body>
</html>
```

## Understanding package.json

The `package.json` file is the heart of any Node.js project:

- **name**: Your project's name
- **version**: Current version using semantic versioning
- **description**: Short description of your project
- **main**: Entry point file
- **scripts**: Custom commands you can run with `npm run [script-name]`
- **dependencies**: Packages required for production
- **devDependencies**: Packages required only for development

## NPM Commands You Should Know

1. **Installing a package**:
   ```bash
   npm install package-name
   # or shorter
   npm i package-name
   ```

2. **Installing a development dependency**:
   ```bash
   npm install package-name --save-dev
   # or shorter
   npm i package-name -D
   ```

3. **Installing a specific version**:
   ```bash
   npm install package-name@version
   ```

4. **Updating packages**:
   ```bash
   npm update
   ```

5. **Running scripts**:
   ```bash
   npm run script-name
   ```

## Understanding NPX

### What is NPX?

NPX (Node Package eXecute) is a tool that comes with npm (since npm version 5.2.0) that makes it easier to run Node.js packages. It serves several important purposes:

1. **Running packages without installation**: Execute packages without installing them globally
2. **Running one-time commands**: Perfect for tools you don't need permanently installed
3. **Using specific versions**: Run a specific version of a package
4. **Avoiding global installs**: Keeps your global namespace clean

### How NPX Works

When you run a command with NPX, it:

1. First checks if the command exists in the local `node_modules/.bin` folder
2. If not found locally, it temporarily downloads the package
3. Executes the package
4. Removes the package after execution (if it was temporarily downloaded)

### Common NPX Use Cases

#### 1. Creating a React App

One of the most common uses of NPX is creating a new React application:

```bash
npx create-react-app my-app
```

This downloads and runs `create-react-app` without installing it globally.

#### 2. Running a One-Time Task

Run a package without installing it permanently:

```bash
npx cowsay "Hello, World!"
```

#### 3. Running a Specific Version

Run a specific version of a package:

```bash
npx cowsay@2.0.0 "Using version 2.0.0"
```

#### 4. Running Local Packages

Run packages from your project's dependencies:

```bash
npx eslint src/
```

This runs the locally installed version of ESLint rather than a global one.

### NPX vs. NPM

| NPX | NPM |
|-----|-----|
| Executes packages | Installs packages |
| Temporary use | Persistent installation |
| Perfect for one-time commands | Better for ongoing dependencies |
| No need to update packages | Need to run `npm update` |

### When to Use NPX

Use NPX when:
- You want to run a tool once or infrequently
- You want to try out a tool without installing it
- You want to run a specific version of a tool
- You want to ensure you're using the local version of a tool

Use NPM when:
- You need a package as a dependency in your project
- You need a tool available all the time

## Limitations of Basic NPM Setup

While we've set up a project with NPM, there are still some limitations:

1. No module bundling
2. No transpilation for JSX or modern JavaScript
3. No development server with hot reloading

In the next section, we'll introduce Parcel, a zero-configuration bundler that will help us overcome these limitations.
