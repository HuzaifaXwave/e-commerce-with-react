// bootstrap configuration //
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import ComponentProduct from "./Components/ComponentProduct";
import ComponentHeader from "./Components/ComponentHeader";

function App() {
  return (
    <>
    <ComponentHeader />
    <ComponentProduct />
    
    </>
  );
}

export default App;
