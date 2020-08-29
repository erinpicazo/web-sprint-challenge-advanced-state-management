import React, { Component } from "react";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

export default App;

import axios from "axios";
import Smurfs from "./Smurfs";
import AddSmurf from "./AddSmurf.js";
import SmurfContext from "../contexts/SmurfContext";

export default function App() {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        console.log(res.data);
        setSmurfs(res.data);
      })
      .catch(err => {
        console.error("server error", err);
      });
  }, []);

  const addSmurf = smurf => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        console.log('post res', res);
        setSmurfs(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };

  console.log("smurfs", smurfs);
  return (
    <div className="App">
      <SmurfContext.Provider value={{ smurfs }}>
        <h1>Welcome to</h1>
        <Smurfs />
        <AddSmurf addSmurf={addSmurf} />
      </SmurfContext.Provider>
    </div>
  );
} 

