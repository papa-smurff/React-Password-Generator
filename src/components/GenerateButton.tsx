import { useAppDispatch, useAppSelector } from "../hook";
import { lettersContainer, numbersContainer, symbolsContainer, randomNum,} from "../helpers";
import { InitValType, ISettingsInfo } from "../type";
import { setPassword } from "../store/passwordGenSlice";

interface IPswCharList {
 value: ISettingsInfo;
 helperContainer: string;
 containerRange: number;
}

const GenerateButton = () => {
 const dispatch = useAppDispatch();
 const { rangeSliderVal, settingsInfo } = useAppSelector((state) => state.store);
 const [numbers, symbols, letters] = settingsInfo;
 const passwordCharactersList: IPswCharList[] = [
  { value: numbers, helperContainer: numbersContainer, containerRange: 9 },
  { value: symbols, helperContainer: symbolsContainer, containerRange: 29 },
  { value: letters, helperContainer: lettersContainer, containerRange: 45 },
 ];

 let passwordValues: InitValType[] = [];
 const generatePswValues = (pswCharEl: IPswCharList) => {
  const { value, helperContainer, containerRange } = pswCharEl;
  if (passwordValues.length === rangeSliderVal) return;
  if (value.include) {
   passwordValues.push({
    type: value.type,
    value: helperContainer[randomNum(containerRange)],
   });
  }
 };

 const generatePsw = () => {
  if (!numbers.include && !symbols.include && !letters.include) return;
  passwordCharactersList.forEach((el, index) => {
   if (index === randomNum(2)) {
    generatePswValues(el);
   }
  });
  if (passwordValues.length < rangeSliderVal) {
   generatePsw();
  } else {
   dispatch(setPassword(passwordValues));
   passwordValues = [];
   return;
  }
 };

 return (
  <button
   onClick={generatePsw}
   className="bg-gradient-to-r from-purple-500 to-purple-900 rounded-lg w-full my-4 py-2 px-4"
  >
   Generate Button
  </button>
 );
};

export default GenerateButton;