import { useEffect, useState } from "react";
import { useAppSelector } from "../hook";
import { InitValType } from "../type";

const ResultElementWrap = ({ type, value }: InitValType) => {
 let style: string = (type === "number") ? "text-purple-500" : (type === "symbol") ? "text-red-500" : ''
 return <span className={style}>{value}</span>;
};

const ResultField = () => {
 const result = useAppSelector((state) => state.store.result);
 const [textClickCopy, setTextClickCopy] = useState(false);
 useEffect(() => {
  setTextClickCopy(false);
 }, [result]);

 const copyResult = () => {
  const newResult: string = result.map((el) => el.value).join("");
  navigator.clipboard.writeText(newResult);
  setTextClickCopy(true);
 };
 const spanCopyText = (!textClickCopy) ? { style: "right-2 bottom-1", text: "click to copy" } : { style: "left-2 bottom-1", text: "copied" }

 return (
  <div
   onClick={copyResult}
   className="bg-slate-700 relative h-20 rounded-md text-center flex justify-center cursor-pointer items-center mb-3 px-2"
  >
   {result.length
    ? result.map((el, index) => (
       <ResultElementWrap key={`${el.type}${index}`} {...el} />
      ))
    : "Result Field"}
   {result.length
    ? <span className={`absolute text-xs text-slate-300 ${spanCopyText.style}`}>
        {spanCopyText.text}
       </span>
    : ''}
  </div>
 );
};

export default ResultField;