import './App.css';
import Form from './Components/Form';
import Display from './Components/Display';
import { useState } from 'react';


function App() {
  const [displayData, setDisplayData] = useState([]);

  //for form
  const handleinputData = (displayinfo) => {
    setDisplayData(displayData.concat(displayinfo));
  };

  return (
    <div style={{marginTop:20, marginLeft:500, marginRight:500}}>
      <div>
        <Form setDisplayData={handleinputData} />
      </div>
      <div>
      <Display displayData={displayData} />
      </div>
    </div>
  );
}

export default App;
