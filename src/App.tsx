import GenerateButton from "./components/GenerateButton";
import RangeSlider from "./components/RangeSlider";
import ResultField from "./components/ResultField";
import SettingButtons from "./components/SettingButtons";

function App() {
 return (
  <div className="max-w-sm mx-auto bg-slate-800 text-slate-50 p-4 rounded-lg">
   <h2 className="text-3xl mb-4">Password Generator</h2>
   <ResultField />
   <RangeSlider />
   <SettingButtons />
   <GenerateButton />
  </div>
 );
}

export default App;
