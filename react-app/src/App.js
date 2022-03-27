import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header"> docker revisit </header>
       <h1>Commands </h1>
       <p>run docker container with volumes set up and ports mapped </p>
       <p>  docker run --name docker-revisit-container-volumes-on -p  3000:3000  -v /Users/saidfatah/Documents/learning/docker/docker-revisit/react-app/src:/app/src -v /node_modules  react-image-revsit</p>
    </div>
  );
}

export default App;
