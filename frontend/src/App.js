import First from "./Component/First";
import Thankyou from './Component/Thankyou'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<First />}/>
          <Route path="/thankyou" element={<Thankyou />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
