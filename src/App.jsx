import "./App.css";
import ControlledField from "./Components/ControlledField/ControlledField";
import HookForm from "./Components/HookForm/HookForm";
import ProductManagement from "./Components/ProductManagement/ProductManagement";
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
        {/* <UnControlledField></UnControlledField> */}
        {/* <HookForm></HookForm> */}
        <ProductManagement></ProductManagement>
      </div>
    </>
  );
}

export default App;
