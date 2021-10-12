import "./App.css";
import { useState, useEffect, useMemo } from "react";

const DATE_SOURCE_URL = "https://bs-random-json.vercel.app/api/data";

const Editor = ({ data, setData }) => {
  return "Not implemented"
};

const Preview = ({ data }) => {
  const entries = useMemo(() => {
    const entries = Object.entries(data).sort();
    entries.sort((a, b) => {
      if (a[0] > b[0]) {
        return 1;
      } else if (a[0] === b[0]) {
        return 0;
      } else {
        return -1;
      }
    });
    return entries;
  }, [data]);
  return (
    <ul>
      {entries.map(([key, value]) => {
        return (
          <li key={key}>
            <strong>{key}</strong>:{" "}:
            <code>{JSON.stringify(value, null, "  ")}</code>
          </li>
        );
      })}
    </ul>
  );
};

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(DATE_SOURCE_URL).then((res) => res.json());
      setData(res);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="editor">
        {data ? <Editor data={data} setData={setData} /> : "Loading"}
      </div>
      <div className="preview">
        {data && <Preview data={data} />}
      </div>
    </div>
  );
}

export default App;
