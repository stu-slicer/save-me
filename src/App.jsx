import './App.css';
import Button from './components/Button/Button';
import GameController from './containers/GameController/GameController';
import LyricList from './containers/LyricList/LyricList';

const App = () => {
  return (
    <div className="App">
      <h1>Save me!</h1>
      <GameController gameId="Swing" gameLevel="42"  />
      <LyricList />
    </div>
  );
}

export default App;
