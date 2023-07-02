import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown, faTrophy, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { PlatformIcon, ProgressBar } from "..";
import { toast } from 'react-toastify';

import axios from "axios";

export default function  StreamerCard({ data, rank, refresh })
{
    /*Streamer rank function */
    const [streamerRank, setStreamerRank] = useState(rank + 1);
    const [TrophyStyle, setTrophyStyle] = useState("text-2xl ml-4 place-self-center hidden text-gray-400 md:inline");
    const [BorderCardStyle, setBorderCardStyle] = useState("mt-4  w-11/12 h-auto bg-gray-800/50 border border-gray-950/25 drop-shadow-xl md:rounded-lg md:py-0 md:w-4/5 lg:w-3/5 xl:w-4/12");
    
    useEffect(()=> {
      if(streamerRank <=3)
      {
        setTrophyStyle("text-2xl ml-4 place-self-center hidden text-yellow-400 md:inline");
        setBorderCardStyle("mt-4  w-11/12 h-auto bg-gray-800/50 border border-glow-purple_2 drop-shadow-xl md:rounded-lg md:py-0 md:w-4/5 lg:w-3/5 xl:w-4/12")
      }
      else {
        setTrophyStyle("text-2xl ml-4 place-self-center hidden text-gray-400 md:inline");
        setBorderCardStyle("mt-4  w-11/12 h-auto bg-gray-800/50 border border-gray-950/25 drop-shadow-xl md:rounded-lg md:py-0 md:w-4/5 lg:w-3/5 xl:w-4/12")
      }
    }, [])

  /* votes in client page */
  const [UpNumber, setUpNumber] = useState(data.Upvotes);
  const [DownNumber, setDownNumber] = useState(data.Downvotes);

  /*Upvote function */
  const Upvote = async () => {
     const StreamerID = data.Id;
     try {
      await axios.put(process.env.REACT_APP_API_URL + 'streamers/' + StreamerID + '/upvote').then(()=>  { toast("Upvoted!"); setUpNumber(UpNumber+1); setUserUpvote(true); refresh()});
     }
     catch {
       toast("Error!");
     }
  }

   /*Downvote function */
   const Downvote = async () => {
    const StreamerID = data.Id;
    try {
     await axios.put(process.env.REACT_APP_API_URL + 'streamers/' + StreamerID + '/downvote').then(()=>  { toast("Downvoted!"); setDownNumber(DownNumber+1); setUserUpvote(true); refresh()});
    }
    catch {
      toast("Error!");
    }
 }

   /* a user can only vote once (you can add a record to the cookie-file in the future ) */
   const [userUpvote, setUserUpvote] = useState(false);

  /* The first three places will have colors, while the rest will be gray */
  console.log(data)
  
    return (
        <div className={BorderCardStyle}>
          <div className="flex flex-row"> 
            <div className="ml-8 place-self-center items-center py-4"><img src={data.Image} alt="" className="aspect-square object-cover rounded-full border border-glow-purple h-auto w-36 md:w-32 "/></div>
            <div className="flex flex-col w-full ml-4">
               <div className="flex flex-row pt-3"><PlatformIcon platform={data.Platform}/> <div className="text-2xl text-white font-bold md:w-auto md:text-3xl streamernick pt-1">{data.Nick} </div> <a href={'/streamer/' + data.Id} className="ml-4 text-lg place-self-center text-gray-200 md:text-2xl"><FontAwesomeIcon icon={faCircleInfo}/></a><span className={TrophyStyle}><FontAwesomeIcon icon={faTrophy}/> #{streamerRank}</span></div>
               <div className="flex flex-row mt-2 ">
                <div className="flex flex-col w-8/12"> 
                <ProgressBar progress={100 - ((DownNumber/UpNumber) * 100)}/>
                <span className="text-lg text-white font-bold hidden md:flex lg:text-2xl"> Votes: &nbsp; <span className="text-green-400">{UpNumber}  </span> &nbsp;/&nbsp; <span className="text-red-400"> {DownNumber}</span> </span> 
                </div>
                {userUpvote
                ?<p className="text-2xl text-white">You voted </p>
                :<div className="flex flex-row place-self-center">
                  <button className="btn px-6 py-2 bg-gray-800/75 text-green-400 rounded cursor-pointer rounded-full hover:bg-green-500 hover:text-gray-200" onClick={Upvote}><p className="inline place-self-center md:hidden">{UpNumber} </p><FontAwesomeIcon icon={faCaretUp} size="2x"/> </button>
                  <button className="btn mx-4 px-6 py-2 bg-gray-800/75 text-red-400 rounded cursor-pointer rounded-full hover:bg-red-500 hover:text-gray-200" onClick={Downvote}><p className="inline place-self-center md:hidden">{DownNumber}</p><FontAwesomeIcon icon={faCaretDown} size="2x"/> </button>
                </div>
                }
               </div>
             </div>
          </div>
        </div>
    )
  }

