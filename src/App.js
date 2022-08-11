import "./App.css";

import { Welcome } from "./components/Welcome";

import { Session1 } from "./components/Session1";
import Session2 from "./components/Session2";
import { Session3 } from "./components/Session3";
import { Session4 } from "./components/Session4";
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";
import ComponentThree from "./components/ComponentThree";
export const base_url =
  "https://react-demo-97e86-default-rtdb.asia-southeast1.firebasedatabase.app";
export const paths = {
  employee: "/employee",
};
// environmnetal variables
function App() {
  
  return (
    <>
      <Welcome />

      <div style={{ margin: "20px", padding: "10px" }}>
        <Session1 />
        <Session2 />
        <Session3 />
        <Session4 />
        
      </div>
      <div style={{backgroundColor:'blue'}}>Redux example</div>
      <div   >
          <ComponentOne />
          <ComponentTwo />
          <ComponentThree />
        </div>
    </>
  );
}

export default App;
