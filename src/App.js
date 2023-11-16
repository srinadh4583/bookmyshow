import './App.css';
import NavBar from './components/NavBar';
import Card from './components/Card';


function App() {
  return (
    <div>
      <NavBar />
      <div className="container mt-10">
        <h2 className="text-2xl font-semibold">Recommended Movies</h2>
        <div className="grid  lg:grid-cols-5 gap-4 mt-4">
          <Card />
        </div>
      </div>
    </div>
  )
}

export default App;
