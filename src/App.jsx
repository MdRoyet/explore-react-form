import "./App.css";
import ControlledField from "./Components/ControlledField/ControlledField";
import FormAction from "./Components/Simpleform/FormAction/FormAction";
import Simpleform from "./Components/Simpleform/Simpleform";
import UnControlledField from "./Components/UnControlledField/UnControlledField";

function App() {
  return (
    <>
      <div id="center">
        <h1>Explore React Form</h1>
        {/* <Simpleform></Simpleform> */}
        {/* <FormAction></FormAction> */}
        {/* <ControlledField></ControlledField> */}
        <UnControlledField></UnControlledField>
      </div>
    </>
  );
}

export default App;
