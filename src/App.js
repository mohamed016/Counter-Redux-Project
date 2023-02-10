import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, hideAndShow, increment, incrementByAmount } from './store/counterSlice';


function App() {

  const count = useSelector((state) => state.count)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello Redux basics</h1>
        {count.flag ? <>
          <p>counter is {count.value}</p>
          <div className="containerButton">
            <button onClick={() => dispatch(decrement())} className="btn btn-danger">Decrease -</button>
            <button onClick={() => dispatch(increment())} className="btn btn-success m-2">Increase +</button>
            <button onClick={() => dispatch(incrementByAmount(3))} className="btn btn-warning">Increase by 3</button>
          </div>

        </> : ''}

        <div>
          <button onClick={() => dispatch(hideAndShow())} className="btn btn-primary">Show/Hide</button>
        </div>

      </header>
    </div>
  );
}
export default App;
