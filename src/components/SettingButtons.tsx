import { useAppDispatch, useAppSelector } from "../hook";
import { setSettingsInfo } from "../store/passwordGenSlice";
import { ISettingsInfo } from "../type";

const SettingBtnItem = ({ type, include }: ISettingsInfo) => {
 const dispatch = useAppDispatch();
 return (
  <label htmlFor={type} className="bg-slate-700 rounded-md mb-2 px-6 py-2 cursor-pointer flex items-center justify-between">
   <span>Include {type}</span>
   <input
    type="checkbox"
    id={type}
    checked={include}
    onChange={() => dispatch(setSettingsInfo({ type }))}
   />
  </label>
 );
};

const SettingButtons = () => {
 const settingsInfo = useAppSelector((state) => state.store.settingsInfo);
 return (
  <div>
   <span className="text-xs px-2 text-slate-400">SETTINGS</span>
   <div>
    {settingsInfo.map((el) => (
     <SettingBtnItem key={el.type} {...el} />
    ))}
   </div>
  </div>
 );
};

export default SettingButtons;