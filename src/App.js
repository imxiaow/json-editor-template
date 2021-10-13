import "./App.css";
import { useState, useEffect, useMemo } from "react";
import Preview from "./components/Preview"
import Editor from './components/Editor'

const DATE_SOURCE_URL = "https://bs-random-json.vercel.app/api/data";


function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    if(!data){
      async function fetchData() {
        const res = await fetch(DATE_SOURCE_URL).then((res) => res.json());
        setData(res);
      }
      fetchData();      
    }
  }, [data]);

  return (
    <div className="App">
      <div className="editor">
        {
          data 
            ? <Editor 
                data={data} 
                setData={setData} 
              /> 
            : "Loading"
        }
      </div>
      <div className="preview">
        {
          data 
          && 
          <Preview 
            data={data} 
          />
        }
      </div>
    </div>
  );
}

export default App;
