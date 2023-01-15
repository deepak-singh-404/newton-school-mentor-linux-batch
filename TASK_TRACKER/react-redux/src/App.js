import ApiFetchButton from './component/ApiFetchButton';
import DemoComponent from './component/DemoComponet';
import TodosData from './component/TodosData';
import CounterPage from './pages/CounterPage';

function App() {
  return (
    <div className="App">
      <CounterPage />
      <DemoComponent />
      <ApiFetchButton />
      <TodosData />
    </div>
  );
}

export default App;
