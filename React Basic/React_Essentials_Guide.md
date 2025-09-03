# React Essentials: Comprehensive Guide

This document provides a detailed explanation of fundamental React concepts, following the structure of the course modules. Each section corresponds to a specific folder in the project and explains the core concepts in detail.

## Table of Contents

1. [Getting Started with React](#getting-started-with-react)
2. [Creating and Using Your First Component](#creating-and-using-first-component)
3. [Using and Outputting Dynamic Values](#using-outputting-dynamic-values)
4. [Working with HTML Attributes and Dynamic Images](#html-attributes-dynamically-image-files)
5. [Component Props](#cmp-props)
6. [Alternative Props Syntax](#alternative-props-syntax)
7. [Storing Components in Files](#storing-cmp-in-files)
8. [Component-Specific Styling](#styles-next-to-cmp)
9. [Composition and Children Prop](#composition-children-prop)
10. [Reacting to Events](#reacting-to-events)
11. [Passing Functions as Values](#passing-functions-as-values)
12. [Passing Custom Arguments to Event Functions](#passing-custom-arguments-to-event-fn)
13. [Common Anti-patterns for UI Updates](#how-not-to-update-ui)
14. [Managing State](#managing-state)
15. [Deriving and Computing Values](#deriving-computing-values)
16. [Rendering Content Conditionally](#rendering-content-conditionally)
17. [Dynamic CSS Styling](#css-styling-dynamic-styles)
18. [Outputting List Data](#outputting-list-data)

---

<a id="getting-started-with-react"></a>
## 1. Getting Started with React

### Introduction to React
React is a JavaScript library for building user interfaces, particularly single-page applications. It's maintained by Meta (formerly Facebook) and a community of individual developers and companies.

### Key Characteristics
- **Declarative**: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
- **Component-Based**: Build encapsulated components that manage their own state, then compose them to make complex UIs.
- **Learn Once, Write Anywhere**: React is not a framework—it's a library. You can use it with other libraries for rendering to different environments.

### Project Setup
This section explores the basic project structure of a React application built with Vite:

- **index.html**: The entry HTML file
- **package.json**: Lists dependencies and scripts
- **vite.config.js**: Configuration for the Vite build tool
- **src/**: Contains all the source code
  - **App.jsx**: The main component
  - **index.jsx**: The entry point that renders App into the DOM
  - **assets/**: Static assets like images

### JSX Basics
JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML but allows you to write HTML-like code in your JavaScript files. The browser doesn't understand JSX directly, so it needs to be transformed by tools like Babel.

```jsx
function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>This is a JSX element.</p>
    </div>
  );
}
```

---

<a id="creating-and-using-first-component"></a>
## 2. Creating and Using Your First Component

### What are Components?
Components are the building blocks of React applications. A component is a self-contained, reusable piece of code that is responsible for one part of the UI.

### Types of Components
- **Function Components**: JavaScript functions that return JSX
- **Class Components**: ES6 classes that extend React.Component (less common in modern React)

### Creating Your First Component

```jsx
// Header.jsx
function Header() {
  return (
    <header>
      <h1>My React App</h1>
    </header>
  );
}

export default Header;
```

### Using Components
```jsx
// App.jsx
import Header from './Header';

function App() {
  return (
    <div>
      <Header />
      <main>
        <p>Main content goes here</p>
      </main>
    </div>
  );
}

export default App;
```

### Component Hierarchy
React applications are built as a tree of components, with a root component (usually App) that contains all other components. This creates a hierarchical structure that makes it easy to organize and reason about your UI.

---

<a id="using-outputting-dynamic-values"></a>
## 3. Using and Outputting Dynamic Values

### JavaScript in JSX
JSX allows you to embed JavaScript expressions within curly braces `{}`. This is powerful for working with dynamic data.

```jsx
function Greeting() {
  const name = 'John';
  return <h1>Hello, {name}!</h1>;
}
```

### Working with Variables
You can define variables outside the return statement and reference them within JSX:

```jsx
function Counter() {
  const count = 42;
  const isEven = count % 2 === 0;
  
  return (
    <div>
      <p>The count is: {count}</p>
      <p>This number is {isEven ? 'even' : 'odd'}</p>
    </div>
  );
}
```

### Expressions in JSX
Any valid JavaScript expression can be placed inside curly braces:

```jsx
function MathExample() {
  return (
    <div>
      <p>2 + 2 = {2 + 2}</p>
      <p>Current time: {new Date().toLocaleTimeString()}</p>
      <p>Random number: {Math.random()}</p>
    </div>
  );
}
```

### Function Calls in JSX
You can also call functions within JSX:

```jsx
function Greeting() {
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'John',
    lastName: 'Doe'
  };
  
  return <h1>Hello, {formatName(user)}!</h1>;
}
```

---

<a id="html-attributes-dynamically-image-files"></a>
## 4. Working with HTML Attributes and Dynamic Images

### JSX Attributes vs HTML Attributes
In JSX, attributes use camelCase naming convention instead of the HTML lowercase:

```jsx
// HTML: <div class="container">
// JSX:
<div className="container">
```

Other common differences:
- `class` → `className`
- `for` → `htmlFor`
- `tabindex` → `tabIndex`

### Dynamic Attributes
Attributes can receive dynamic values through curly braces:

```jsx
function Profile() {
  const user = {
    name: 'John',
    imageUrl: 'https://example.com/john.jpg',
    imageSize: 90,
  };

  return (
    <div>
      <h1>{user.name}</h1>
      <img 
        src={user.imageUrl} 
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </div>
  );
}
```

### Working with Image Files
In React, you can import image files directly in your components:

```jsx
import profileImage from './assets/profile.png';

function Avatar() {
  return <img src={profileImage} alt="Profile" />;
}
```

### Importing and Using SVGs
SVGs can be imported as React components with special configuration:

```jsx
import { ReactComponent as Logo } from './assets/logo.svg';

function Header() {
  return (
    <header>
      <Logo width={50} height={50} />
      <h1>My App</h1>
    </header>
  );
}
```

---

<a id="cmp-props"></a>
## 5. Component Props

### What are Props?
Props (short for "properties") are a way to pass data from parent to child components. They make components reusable and configurable.

### Passing Props
```jsx
// Parent component
function App() {
  return (
    <div>
      <Greeting name="John" age={25} />
      <Greeting name="Sarah" age={28} />
    </div>
  );
}

// Child component
function Greeting(props) {
  return (
    <h1>Hello, {props.name}! You are {props.age} years old.</h1>
  );
}
```

### Props Types
Props can be of any JavaScript data type:
- Strings: `name="John"`
- Numbers: `age={25}`
- Booleans: `isAdmin={true}`
- Arrays: `items={['apple', 'banana']}`
- Objects: `user={{ name: 'John', age: 25 }}`
- Functions: `onClick={handleClick}`

### Default Props
You can specify default values for props:

```jsx
function Greeting({ name = 'Guest', age = 'unknown' }) {
  return (
    <h1>Hello, {name}! You are {age} years old.</h1>
  );
}
```

### Props are Read-Only
A component must never modify its own props. Props should be treated as immutable.

---

<a id="alternative-props-syntax"></a>
## 6. Alternative Props Syntax

### Destructuring Props
Instead of accessing props through the props object, you can destructure them directly in the function parameters:

```jsx
// Instead of
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// You can use
function Greeting({ name, age }) {
  return <h1>Hello, {name}! You are {age} years old.</h1>;
}
```

### Spreading Props
When you have an object with properties that match the props you want to pass, you can use the spread operator:

```jsx
const user = {
  name: 'John',
  age: 25,
  occupation: 'Developer'
};

// Instead of
<UserProfile name={user.name} age={user.age} occupation={user.occupation} />

// You can use
<UserProfile {...user} />
```

### Forwarding Props
Sometimes you want to pass all props from a parent component to a child component:

```jsx
function Container(props) {
  return <div className="container">{props.children}</div>;
}

function EnhancedButton(props) {
  // Forward all props to the Button component
  return <Button {...props} className="enhanced-button" />;
}
```

---

<a id="storing-cmp-in-files"></a>
## 7. Storing Components in Files

### Component Organization
As your application grows, it's important to organize your components into separate files for better maintainability.

### File Structure
A common approach is to create a components directory with individual files for each component:

```
src/
  components/
    Header.jsx
    Footer.jsx
    Button.jsx
  App.jsx
  index.jsx
```

### Exporting Components
```jsx
// components/Button.jsx
function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

export default Button; // Default export
```

### Importing Components
```jsx
// App.jsx
import Button from './components/Button';

function App() {
  function handleClick() {
    console.log('Button clicked!');
  }

  return (
    <div>
      <Button text="Click me" onClick={handleClick} />
    </div>
  );
}
```

### Multiple Exports
You can export multiple components from a single file:

```jsx
// components/Layout.jsx
export function Header() {
  return <header>Header</header>;
}

export function Footer() {
  return <footer>Footer</footer>;
}

// App.jsx
import { Header, Footer } from './components/Layout';

function App() {
  return (
    <div>
      <Header />
      <main>Content</main>
      <Footer />
    </div>
  );
}
```

---

<a id="styles-next-to-cmp"></a>
## 8. Component-Specific Styling

### CSS in React
React offers several approaches to styling components:

### 1. Regular CSS with Imports
```jsx
// Button.css
.button {
  background-color: blue;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
}

// Button.jsx
import './Button.css';

function Button({ text, onClick }) {
  return <button className="button" onClick={onClick}>{text}</button>;
}
```

### 2. Inline Styles
```jsx
function Button({ text, onClick, color = 'blue' }) {
  const buttonStyle = {
    backgroundColor: color,
    color: 'white',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px'
  };

  return <button style={buttonStyle} onClick={onClick}>{text}</button>;
}
```

### 3. CSS Modules
CSS Modules allow you to scope CSS to a specific component:

```jsx
// Button.module.css
.button {
  background-color: blue;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
}

// Button.jsx
import styles from './Button.module.css';

function Button({ text, onClick }) {
  return <button className={styles.button} onClick={onClick}>{text}</button>;
}
```

### 4. Styled Components
With the styled-components library:

```jsx
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.primary ? 'blue' : 'gray'};
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
`;

function Button({ text, onClick, primary }) {
  return <StyledButton primary={primary} onClick={onClick}>{text}</StyledButton>;
}
```

---

<a id="composition-children-prop"></a>
## 9. Composition and Children Prop

### Component Composition
Composition is a powerful pattern in React that allows you to create more complex components by combining simpler ones.

### The `children` Prop
The `children` prop is a special prop that allows you to pass components as data to other components:

```jsx
function Card({ children, title }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

function App() {
  return (
    <Card title="Welcome">
      <p>This is some content inside the card.</p>
      <button>Click me</button>
    </Card>
  );
}
```

### Specialized Components
You can create specialized versions of components:

```jsx
function Button({ children, ...props }) {
  return <button {...props}>{children}</button>;
}

function DangerButton(props) {
  return <Button className="danger-button" {...props} />;
}

function SuccessButton(props) {
  return <Button className="success-button" {...props} />;
}
```

### Container Components
You can create container components that handle layout:

```jsx
function TwoColumnLayout({ left, right }) {
  return (
    <div className="two-column">
      <div className="left-column">{left}</div>
      <div className="right-column">{right}</div>
    </div>
  );
}

function App() {
  return (
    <TwoColumnLayout
      left={<UserProfile user={currentUser} />}
      right={<UserFriends friends={currentUser.friends} />}
    />
  );
}
```

---

<a id="reacting-to-events"></a>
## 10. Reacting to Events

### Event Handling in React
React events are named using camelCase (e.g., `onClick` instead of `onclick`) and pass a function as the event handler rather than a string.

### Basic Event Handling
```jsx
function Button() {
  function handleClick() {
    console.log('Button clicked!');
  }

  return <button onClick={handleClick}>Click me</button>;
}
```

### Common React Events
- `onClick`: Triggered when an element is clicked
- `onChange`: Triggered when the value of an input element changes
- `onSubmit`: Triggered when a form is submitted
- `onMouseEnter`, `onMouseLeave`: Triggered when the mouse enters or leaves an element
- `onKeyDown`, `onKeyUp`: Triggered when a key is pressed or released

### Event Objects
React event handlers receive an event object that contains information about the event:

```jsx
function Form() {
  function handleSubmit(event) {
    event.preventDefault(); // Prevents the page from reloading
    console.log('Form submitted!');
  }

  function handleInputChange(event) {
    console.log('Input value:', event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleInputChange} />
      <button type="submit">Submit</button>
    </form>
  );
}
```

### Synthetic Events
React wraps native browser events in a cross-browser wrapper called SyntheticEvent to ensure events work consistently across all browsers.

---

<a id="passing-functions-as-values"></a>
## 11. Passing Functions as Values

### Functions as Props
You can pass functions as props to child components, allowing child components to communicate with their parents:

```jsx
// Parent component
function Counter() {
  function handleIncrement() {
    console.log('Increment clicked!');
  }

  function handleDecrement() {
    console.log('Decrement clicked!');
  }

  return (
    <div>
      <h1>Counter</h1>
      <CounterButtons
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

// Child component
function CounterButtons({ onIncrement, onDecrement }) {
  return (
    <div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
    </div>
  );
}
```

### Callbacks for Child-to-Parent Communication
This pattern is essential for "lifting state up" - when a child component needs to update state that lives in a parent component:

```jsx
function ParentComponent() {
  function handleChildData(data) {
    console.log('Received from child:', data);
  }

  return <ChildComponent onSendData={handleChildData} />;
}

function ChildComponent({ onSendData }) {
  function handleClick() {
    const data = 'Hello from child!';
    onSendData(data); // Call the function passed from parent
  }

  return <button onClick={handleClick}>Send data to parent</button>;
}
```

### Function References vs. Function Calls
Be careful to pass function references, not function calls:

```jsx
// Correct: Passing a function reference
<button onClick={handleClick}>Click me</button>

// Incorrect: This calls the function immediately when rendering
<button onClick={handleClick()}>Click me</button>
```

---

<a id="passing-custom-arguments-to-event-fn"></a>
## 12. Passing Custom Arguments to Event Functions

### Passing Arguments to Event Handlers
There are several ways to pass arguments to event handlers:

### 1. Using Arrow Functions
```jsx
function ItemList({ items, onItemClick }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id} onClick={() => onItemClick(item.id)}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}

// Usage
function App() {
  function handleItemClick(itemId) {
    console.log('Clicked item:', itemId);
  }

  const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
  ];

  return <ItemList items={items} onItemClick={handleItemClick} />;
}
```

### 2. Using `bind`
```jsx
function ItemList({ items, onItemClick }) {
  return (
    <ul>
      {items.map(item => (
        <li 
          key={item.id} 
          onClick={onItemClick.bind(null, item.id, item.name)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}

// Usage
function App() {
  function handleItemClick(itemId, itemName) {
    console.log(`Clicked ${itemName} with id ${itemId}`);
  }

  // ...
}
```

### 3. Using Data Attributes
```jsx
function ItemList({ items, onItemClick }) {
  function handleClick(event) {
    const itemId = event.currentTarget.dataset.itemId;
    onItemClick(itemId);
  }

  return (
    <ul>
      {items.map(item => (
        <li key={item.id} data-item-id={item.id} onClick={handleClick}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}
```

### Event Handler with Multiple Parameters
```jsx
function ProductList({ products, onProductSelect, onProductDelete }) {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          <button onClick={() => onProductSelect(product.id)}>View</button>
          <button onClick={() => onProductDelete(product.id, product.name)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
```

---

<a id="how-not-to-update-ui"></a>
## 13. Common Anti-patterns for UI Updates

### Direct DOM Manipulation
In React, you should avoid direct DOM manipulation:

```jsx
// ❌ Anti-pattern: Direct DOM manipulation
function Counter() {
  let count = 0;
  
  function handleClick() {
    count++; // This won't trigger a re-render
    document.getElementById('count').textContent = count; // Direct DOM manipulation
  }
  
  return (
    <div>
      <p id="count">{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

// ✅ Correct approach: Using state
function Counter() {
  const [count, setCount] = useState(0);
  
  function handleClick() {
    setCount(count + 1); // This will trigger a re-render
  }
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```

### Mutating Variables Outside React's Control
```jsx
// ❌ Anti-pattern: Mutating variables outside React's control
function Form() {
  let formData = { name: '', email: '' };
  
  function handleNameChange(e) {
    formData.name = e.target.value; // Mutation won't trigger re-render
  }
  
  function handleEmailChange(e) {
    formData.email = e.target.value; // Mutation won't trigger re-render
  }
  
  return (
    <form>
      <input value={formData.name} onChange={handleNameChange} />
      <input value={formData.email} onChange={handleEmailChange} />
    </form>
  );
}

// ✅ Correct approach: Using state
function Form() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  
  return (
    <form>
      <input name="name" value={formData.name} onChange={handleChange} />
      <input name="email" value={formData.email} onChange={handleChange} />
    </form>
  );
}
```

### Asynchronous Updates Without Proper State Management
```jsx
// ❌ Anti-pattern: Relying on current state for async operations
function AsyncCounter() {
  const [count, setCount] = useState(0);
  
  function handleClick() {
    // This might not work as expected with multiple clicks
    setTimeout(() => {
      setCount(count + 1); // Uses captured value of count
    }, 1000);
  }
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Delayed Increment</button>
    </div>
  );
}

// ✅ Correct approach: Using functional updates
function AsyncCounter() {
  const [count, setCount] = useState(0);
  
  function handleClick() {
    setTimeout(() => {
      setCount(prevCount => prevCount + 1); // Uses the latest value
    }, 1000);
  }
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Delayed Increment</button>
    </div>
  );
}
```

---

<a id="managing-state"></a>
## 14. Managing State

### What is State?
State is data that changes over time in your application. React components can have their own state, which allows them to keep track of information and re-render when that information changes.

### `useState` Hook
The `useState` hook is the primary way to manage state in function components:

```jsx
import { useState } from 'react';

function Counter() {
  // useState returns an array with two elements:
  // 1. The current state value
  // 2. A function to update the state
  const [count, setCount] = useState(0); // 0 is the initial state
  
  function increment() {
    setCount(count + 1);
  }
  
  function decrement() {
    setCount(count - 1);
  }
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}
```

### Multiple State Variables
You can use multiple `useState` hooks in a single component:

```jsx
function UserForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  
  function handleNameChange(e) {
    setName(e.target.value);
  }
  
  function handleAgeChange(e) {
    setAge(Number(e.target.value));
  }
  
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  
  return (
    <form>
      <input type="text" value={name} onChange={handleNameChange} placeholder="Name" />
      <input type="number" value={age} onChange={handleAgeChange} placeholder="Age" />
      <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
    </form>
  );
}
```

### Object State
You can also use objects as state:

```jsx
function UserForm() {
  const [user, setUser] = useState({
    name: '',
    age: 0,
    email: ''
  });
  
  function handleChange(e) {
    // Important: Create a new object to trigger re-render
    setUser({
      ...user, // Spread existing properties
      [e.target.name]: e.target.value // Update specific property
    });
  }
  
  return (
    <form>
      <input 
        name="name" 
        type="text" 
        value={user.name} 
        onChange={handleChange} 
        placeholder="Name" 
      />
      <input 
        name="age" 
        type="number" 
        value={user.age} 
        onChange={handleChange} 
        placeholder="Age" 
      />
      <input 
        name="email" 
        type="email" 
        value={user.email} 
        onChange={handleChange} 
        placeholder="Email" 
      />
    </form>
  );
}
```

### Functional Updates
When the new state depends on the previous state, use the functional update form:

```jsx
function Counter() {
  const [count, setCount] = useState(0);
  
  function increment() {
    // This is safer, especially for multiple updates in the same cycle
    setCount(prevCount => prevCount + 1);
  }
  
  // If you click this button 3 times quickly, count will only increment by 1
  function incrementThreeTimes() {
    setCount(count + 1); // Using the same captured value of count
    setCount(count + 1); // Using the same captured value of count
    setCount(count + 1); // Using the same captured value of count
  }
  
  // If you click this button 3 times quickly, count will increment by 3
  function incrementThreeTimesCorrectly() {
    setCount(prevCount => prevCount + 1); // Using the latest value
    setCount(prevCount => prevCount + 1); // Using the latest value
    setCount(prevCount => prevCount + 1); // Using the latest value
  }
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={incrementThreeTimes}>+3 (Wrong Way)</button>
      <button onClick={incrementThreeTimesCorrectly}>+3 (Correct Way)</button>
    </div>
  );
}
```

---

<a id="deriving-computing-values"></a>
## 15. Deriving and Computing Values

### Computed Values from State
Instead of storing values that can be calculated from existing state, compute them on the fly:

```jsx
function Cart({ items }) {
  // ❌ Anti-pattern: Storing derived state
  const [totalPrice, setTotalPrice] = useState(0);
  const [itemCount, setItemCount] = useState(0);
  
  // Need to update these values whenever items changes
  useEffect(() => {
    setTotalPrice(items.reduce((total, item) => total + item.price, 0));
    setItemCount(items.length);
  }, [items]);
  
  return (
    <div>
      <p>Items: {itemCount}</p>
      <p>Total: ${totalPrice}</p>
    </div>
  );
}

// ✅ Better approach: Computing values during render
function Cart({ items }) {
  // Derived values - calculated on each render
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const itemCount = items.length;
  
  return (
    <div>
      <p>Items: {itemCount}</p>
      <p>Total: ${totalPrice}</p>
    </div>
  );
}
```

### Memoizing Expensive Calculations
For expensive calculations, use the `useMemo` hook to cache the result:

```jsx
import { useMemo } from 'react';

function ProductList({ products, searchTerm, category }) {
  // This calculation will only run when products, searchTerm, or category changes
  const filteredProducts = useMemo(() => {
    console.log('Filtering products...'); // This won't run on every render
    return products
      .filter(product => product.name.includes(searchTerm))
      .filter(product => category === 'all' || product.category === category);
  }, [products, searchTerm, category]);
  
  return (
    <ul>
      {filteredProducts.map(product => (
        <li key={product.id}>{product.name} - ${product.price}</li>
      ))}
    </ul>
  );
}
```

### Computing Values in Event Handlers
Sometimes it's better to compute values in event handlers rather than during rendering:

```jsx
function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    
    // Compute the full name only when needed
    const fullName = `${firstName} ${lastName}`.trim();
    
    submitForm({ fullName, firstName, lastName });
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder="First Name"
      />
      <input
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder="Last Name"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

---

<a id="rendering-content-conditionally"></a>
## 16. Rendering Content Conditionally

### Conditional Rendering
React allows you to conditionally render components based on state or props:

### 1. Using the Ternary Operator
```jsx
function UserGreeting({ isLoggedIn, username }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back, {username}!</h1>
      ) : (
        <h1>Welcome, guest!</h1>
      )}
    </div>
  );
}
```

### 2. Using Logical AND (&&)
```jsx
function Notifications({ messages }) {
  return (
    <div>
      <h1>Notifications</h1>
      {messages.length > 0 && (
        <ul>
          {messages.map(message => (
            <li key={message.id}>{message.text}</li>
          ))}
        </ul>
      )}
      {messages.length === 0 && <p>No new notifications.</p>}
    </div>
  );
}
```

### 3. Using If Statements Outside JSX
```jsx
function UserProfile({ user, isAdmin }) {
  let adminControls;
  
  if (isAdmin) {
    adminControls = (
      <div className="admin-panel">
        <h2>Admin Controls</h2>
        <button>Edit Users</button>
        <button>View Analytics</button>
      </div>
    );
  }
  
  return (
    <div>
      <h1>{user.name}'s Profile</h1>
      {adminControls}
    </div>
  );
}
```

### 4. Using Switch Statements
```jsx
function PaymentStatus({ status }) {
  let message;
  
  switch (status) {
    case 'pending':
      message = <p className="pending">Payment is pending...</p>;
      break;
    case 'completed':
      message = <p className="success">Payment completed successfully!</p>;
      break;
    case 'failed':
      message = <p className="error">Payment failed. Please try again.</p>;
      break;
    default:
      message = <p>No payment information.</p>;
  }
  
  return (
    <div className="payment-status">
      <h2>Payment Status</h2>
      {message}
    </div>
  );
}
```

### 5. Conditional Rendering with Component Variables
```jsx
function Page({ user, page }) {
  let content;
  
  if (!user) {
    content = <LoginForm />;
  } else {
    switch (page) {
      case 'home':
        content = <HomePage user={user} />;
        break;
      case 'profile':
        content = <ProfilePage user={user} />;
        break;
      case 'settings':
        content = <SettingsPage user={user} />;
        break;
      default:
        content = <NotFoundPage />;
    }
  }
  
  return (
    <div className="page">
      <Header user={user} />
      <main>{content}</main>
      <Footer />
    </div>
  );
}
```

---

<a id="css-styling-dynamic-styles"></a>
## 17. Dynamic CSS Styling

### Inline Styles with Dynamic Values
```jsx
function Button({ isActive, color }) {
  const buttonStyle = {
    backgroundColor: isActive ? color : 'gray',
    color: isActive ? 'white' : 'black',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    opacity: isActive ? 1 : 0.7,
    cursor: isActive ? 'pointer' : 'not-allowed'
  };
  
  return <button style={buttonStyle}>Button</button>;
}
```

### Conditional Class Names
```jsx
function Alert({ type, message }) {
  let className = 'alert';
  
  if (type === 'success') {
    className += ' alert-success';
  } else if (type === 'warning') {
    className += ' alert-warning';
  } else if (type === 'error') {
    className += ' alert-error';
  }
  
  return <div className={className}>{message}</div>;
}
```

### Using Template Literals for Class Names
```jsx
function Tab({ isActive, onClick, label }) {
  return (
    <div 
      className={`tab ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {label}
    </div>
  );
}
```

### Using the `classnames` Library
The `classnames` library makes working with conditional classes easier:

```jsx
import classNames from 'classnames';

function Button({ isPrimary, isLarge, isDisabled, className }) {
  const buttonClass = classNames(
    'btn',
    {
      'btn-primary': isPrimary,
      'btn-large': isLarge,
      'btn-disabled': isDisabled
    },
    className // Additional classes passed as props
  );
  
  return (
    <button 
      className={buttonClass} 
      disabled={isDisabled}
    >
      Click me
    </button>
  );
}
```

### CSS Modules with Dynamic Styles
```jsx
// Button.module.css
.button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
}

.primary {
  background-color: blue;
  color: white;
}

.secondary {
  background-color: gray;
  color: black;
}

.large {
  font-size: 18px;
  padding: 12px 20px;
}

// Button.jsx
import styles from './Button.module.css';

function Button({ variant = 'primary', size, children }) {
  const buttonClasses = [
    styles.button,
    styles[variant],
    size === 'large' ? styles.large : ''
  ].join(' ');
  
  return <button className={buttonClasses}>{children}</button>;
}
```

---

<a id="outputting-list-data"></a>
## 18. Outputting List Data

### Rendering Lists with `map()`
The most common way to render lists in React is using the `map()` method:

```jsx
function ProductList({ products }) {
  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name} - ${product.price}
        </li>
      ))}
    </ul>
  );
}
```

### The Importance of the `key` Prop
When rendering lists, each item should have a unique `key` prop. This helps React identify which items have changed, been added, or been removed.

```jsx
// ❌ Anti-pattern: Using index as key
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>{todo.text}</li> // Using index as key can cause issues
      ))}
    </ul>
  );
}

// ✅ Better approach: Using unique IDs as keys
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>{todo.text}</li> // Using unique ID as key
      ))}
    </ul>
  );
}
```

### Rendering Lists with Complex Components
```jsx
function UserList({ users, onUserSelect }) {
  return (
    <div className="user-list">
      {users.map(user => (
        <UserCard
          key={user.id}
          user={user}
          onSelect={() => onUserSelect(user.id)}
        />
      ))}
    </div>
  );
}

function UserCard({ user, onSelect }) {
  return (
    <div className="user-card" onClick={onSelect}>
      <img src={user.avatar} alt={user.name} />
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
}
```

### Filtering and Transforming Lists
```jsx
function FilterableProductList({ products, category, searchTerm }) {
  // Filter products based on category and search term
  const filteredProducts = products
    .filter(product => category === 'all' || product.category === category)
    .filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
  return (
    <div>
      <h2>Products ({filteredProducts.length})</h2>
      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul>
          {filteredProducts.map(product => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
```

### Nested Lists
```jsx
function CategoryList({ categories }) {
  return (
    <div>
      <h1>Product Categories</h1>
      <ul className="categories">
        {categories.map(category => (
          <li key={category.id}>
            <h2>{category.name}</h2>
            <ul className="products">
              {category.products.map(product => (
                <li key={product.id}>
                  {product.name} - ${product.price}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## Conclusion

This guide covers the essential concepts of React that form the foundation for building modern, interactive web applications. As you progress in your React journey, you'll encounter more advanced concepts like context, hooks, routing, and state management libraries.

Remember that React is just JavaScript, so a strong understanding of JavaScript fundamentals will help you become a more effective React developer. Practice these concepts by building small projects and gradually increasing complexity as you become more comfortable.

Happy coding!
