import './App.scss';
import data from './data.json'
import { Card } from './components/Card';

function App() {
  const items = data;

  return (
    <div className="App">
      <div className="content">
        <span className="title">Ты сегодня покормил кота?</span>
        <div className="food">
          {items.map((item, i) => <Card key={i} {...item} />)}
        </div>
      </div>
    </div>
  );
}

export default App;
