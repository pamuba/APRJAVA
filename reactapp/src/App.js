import './App.css';
import Greet from './components/Greet'
import GreetClass from './components/GreetClass'
import Message from './components/Message';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import Refdemo  from './components/Refdemo';
import ParentComp from './components/ParentComp'
import Hero from './components/Hero'
import  ErrorBoundary from './components/ErrorBoundary'
import Hooksstate from './components/hooksstate'
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/userContext';
import PostList from './components/PostList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
        {/* <Greet name="Bruce" heroName="Batman">
          <h2>THE BATMAN</h2>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <h2>THE SUPERMAN</h2>
        </Greet>
        <Greet name="Diana" heroName="Wonder Woman">
          <h2>THE WONDER WOMAN</h2>
        </Greet> */}

       {/* <GreetClass name="Bruce" heroName="Batman"></GreetClass>
       <GreetClass name="Clark" heroName="Superman"></GreetClass> */}

       {/* <Message></Message> */}

       {/* <Counter></Counter> */}

       {/* <EventBind></EventBind> */}
       {/* <Refdemo></Refdemo> */}

       {/* <ParentComp /> */}
       {/* <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
       </ErrorBoundary>

       <ErrorBoundary>
       <Hero heroName="Superman"></Hero>
       </ErrorBoundary> */}
      {/* <Hooksstate></Hooksstate> */}
    
    {/* <UserProvider value="Data from Context">
      <ComponentC />
    </UserProvider> */}

    <PostList></PostList>
      </header>
    </div>
  );
}

export default App;
