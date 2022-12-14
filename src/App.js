import { useState, useEffect } from "react";
import DataTable from "./components/dataTable";
import './css/table.css';

const headers = [
  {
    text: 'Name',
    value: 'name'
  },
  {
    text: 'Version',
    value: 'version'
  },
  {
    text: 'Launch Date',
    value: 'launch'
  }
];
const items = [
  {
    name: 'React',
    version: '18.2.0',
    launch: '2013-05-29'
  },
  {
    name: 'Vue',
    version: '3.2.45',
    launch: '2014-02'
  },
  {
    name: 'jQuery',
    version: '3.3',
    disabled: true,
    launch: '2006-08-26'
  },
  {
    name: 'Svelte',
    version: '3.53.1',
    launch: '2016-11-26'
  },
];

function App() {
  const [selection, setSelection] = useState([]);
  useEffect(() => {
    console.log(selection);
  }, [selection]);

  return (
    <div className="App">
      <DataTable 
        headers={headers} 
        items={items} 
        selectable={true} 
        updateSelection={setSelection}
      />
    </div>
  );
}

export default App;