import Navbar from "./layout/navbar/navbar";
import Home from "./Sessões/Home/Home";
import SobreMim from "./Sessões/sobre-mim/SobreMim";


function App() {
  return (
    
    <div className="app">
      <Navbar />
      <Home />
      <SobreMim />
    </div>
  );
}

export default App;
