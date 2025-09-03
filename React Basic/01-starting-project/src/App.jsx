import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx'

function Counter() {
  const count = 30;
  const isEven = count % 2 === 0;
  
  return (
    <div>
      <p>The count is: {count}</p>
      <p>This number is {isEven ? 'even' : 'odd'}</p>
    </div>
  );
}

function MathExample() {
  return (
    <div>
      <p>2 + 2 = {2 + 2}</p>
      <p>Current time: {new Date().toLocaleTimeString()}</p>
      <p>Random number: {Math.floor(Math.random() * 10)+1}</p>
    </div>
  );
}

function Greeting() {
  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Mohd',
    lastName: 'Danish'
  };
  
  return <h1>Hello, {formatName(user)}!</h1>;
}

function App() {
  return (
    <div>
      <Header />
      <Counter />
      <MathExample />
      <Greeting />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
