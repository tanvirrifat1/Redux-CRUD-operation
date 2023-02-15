import './App.css';
import CounterView from './features/Counter/CounterView';
import PostView from './features/Posts/PostView';

function App() {
  return (
    <div className="App">
      <h1 className='text-2xl'>Welcome to React-Redux</h1>
      <CounterView />
      <PostView />
    </div>
  );
}

export default App;
