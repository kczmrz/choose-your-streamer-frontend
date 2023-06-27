import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown, faTrophy, faArrowUpRightFromSquare, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { PlatformIcon, ProgressBar } from "..";

export default function  StreamerCard()
{
  /* The first three places will have colors, while the rest will be gray */
  const [TrophyStyle, setTrophyStyle] = useState("");
    return (
        <div className="mt-4  w-11/12 h-auto bg-gray-800/50 border border-gray-950/25 drop-shadow-xl md:rounded-lg md:py-0 md:w-4/5 lg:w-3/5 xl:w-4/12">
          <div className="flex flex-row"> 
            <div className="ml-8 place-self-center items-center "><img src={'https://zarobkimajatek.pl/wp-content/uploads/2022/12/i-show-speed.png'} className="aspect-square object-cover rounded-full border border-glow-purple h-auto w-36 md:w-32 "/></div>
            <div className="flex flex-col w-full">
               <div className="flex flex-row pt-3"><PlatformIcon platform={"Youtube"}/> <div className="text-lg text-white font-bold md:w-auto md:text-3xl streamernick pt-1">IShowSpeed </div> <button className="ml-4 text-lg place-self-center text-gray-200 md:text-2xl"><FontAwesomeIcon icon={faCircleInfo}/></button><span className="text-2xl ml-4 place-self-center hidden text-gray-400 md:inline"><FontAwesomeIcon icon={faTrophy}/> #1</span></div>
               <div className="flex flex-row mt-2 ">
                  <div className="w-8/12 flex flex-row"> 
                     <div className="bg-black/25 ml-4 text-purple-200 place-self-center p-2 hidden rounded-md w-max border border-glow-purple md:flex hover:bg-purple-800"> 🎮 Gaming </div>
                     <div className="bg-black/25 ml-4 text-purple-200 place-self-center p-2 hidden rounded-md w-max border border-glow-purple md:flex hover:bg-purple-800"> 🇺🇸 English </div>
                   </div>

                   <div className="flex flex-row">
                     <button className="btn px-6 py-2 bg-gray-800/75 text-green-400 rounded cursor-pointer rounded-full hover:bg-green-500 hover:text-gray-200"><FontAwesomeIcon icon={faCaretUp} size="2x"/> </button>
                     <button className="btn mx-4 px-6 py-2 bg-gray-800/75 text-red-400 rounded cursor-pointer rounded-full hover:bg-red-500 hover:text-gray-200"><FontAwesomeIcon icon={faCaretDown} size="2x"/> </button>
                   </div>
               </div>
               <ProgressBar progress={90}/>
               <span className="text-xl text-white font-bold"> Votes: <span className="text-green-400">85  </span>/ <span className="text-red-400"> 15</span> </span> 
            </div>
          </div>
        </div>
    )
  }

