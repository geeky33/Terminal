"use client";
import { Fira_Code } from "next/font/google";
import { useState } from "react";
import Error from "./components/error";
import Start from "./components/start";
import Info from "./components/info";
import data from "./components/data";
import history from "./components/history";
const fira = Fira_Code({
  weight: '400',
  subsets: ['latin']
});
export default function Home() {
  let [inputChange, setInputChange] = useState<string>('');
  let handleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      switch (inputChange) {
        case "start": history.push(<Start />); break;
        case 'about': case 'edu': case 'skills': case 'projects': case 'contacts': {
          for (let i: number = 0; i < 5; i++) {
            if (inputChange == data[i].title) {
              history.push(<Info title={data[i].title} p1={data[i].p1} p2={data[i].p2} p3={data[i].p3} key={data[i].id} />);
            }
          }break;
        }
        case "clear": history.length = 0; break;
        default: history.push(<Error command={inputChange} />);
      }
      setInputChange('');
    }
  }
  return (
    <div className={'terminal p-2 flex flex-col gap-4 ' + fira.className}>
      <p className={'text-6xl term-1'}>harshal:sync~</p>
      <p className="text-4xl">type `start` to get started</p>
      <p>let portfolioSite = {'() = > { '}<a href="https://xyzharshal.social/" target='_blank' className="underline visit">visit</a>{' }'}</p>
      {history.map((e: HTMLElement) => e)}
      <div className="inputField flex flex-row gap-3">
        <p>$</p><input onChange={(e) => setInputChange(e.target.value)} value={inputChange} onKeyDown={handleKeyDown} className="w-1/2" />
      </div>
    </div>
  )
}