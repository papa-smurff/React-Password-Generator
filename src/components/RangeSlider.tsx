import { useAppDispatch, useAppSelector } from "../hook";
import { setSliderValue } from "../store/passwordGenSlice";

const RangeSlider = () => {
 const dispatch = useAppDispatch();
 const range = useAppSelector((state) => state.store.rangeSliderVal);

 return (
  <div className="flex flex-col">
   <span className="text-xs px-2 text-slate-400">
    LENGTH:<span className="text-white">{range}</span>
   </span>
   <div className="bg-slate-700 rounded-md flex justify-between mb-3 py-3 px-2">
    <span>8</span>
    <input
     type="range"
     className="w-10/12 cursor-pointer"
     value={range}
     onChange={(e) => dispatch(setSliderValue(+e.target.value))}
     min={8}
     max={36}
    />
    <span>36</span>
   </div>
  </div>
 );
};

export default RangeSlider;