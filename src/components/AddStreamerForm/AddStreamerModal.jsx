import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
export default function AddStreamerModal({ isOpening, CloseModal })
{
   if(!isOpening) return null;  
    return(
        <div className="fixed inset-0 bg-black/25 backdrop-blur-sm text-white flex items-center justify-center">
            <div className="flex flex-col bg-gray-800/50 w-4/5 md:w-2/5 md:border md:border-glow-purple">
               <div className="bg-purple-950 text-3xl px-4 py-2 ">Add your streamer! </div> 
               <form className="px-4 md:px-24">

                 <label className="py-2 flex flex-col text-2xl">
                    Nick:
                    <input type="text" name="nick" className="mt-2 text-black text-center rounded-lg" />
                 </label>

                 <label className="py-2 flex flex-col text-2xl">
                    Platform:
                    <select name="platform" id="platform" className="text-black text-center">
                        <option value="Twitch">Twitch</option>
                        <option value="YouTube">YouTube</option>
                        <option value="TikTok">TikTok</option>
                        <option value="Kick">Kick</option>
                        <option value="Rumble">Rumble</option>
                     </select>
                 </label>
                 
                 <label className="py-2 flex flex-col text-2xl">
                    Image URL:
                    <input type="text" name="nick" className="mt-2 text-black text-center rounded-lg" />
                 </label>


                 <label className="py-2 flex flex-col text-2xl">
                    Description:
                    <textarea type="text" name="nick" className="mt-2 text-black text-center rounded-lg text-sm" />
                 </label>
                <button className="btn bg-purple-950 text-3xl px-12 py-2 mt-4 rounded-full hover:bg-purple-700"> Add! </button>
                 </form>
                 <button className="btn bg-gray-950/50 text-sm py-2 w-4/5 self-center mt-4 mb-4 hover:bg-gray-800/75 md:w-2/5" onClick={CloseModal}> <FontAwesomeIcon icon={faArrowLeft}/> Back </button> 

            </div>
        </div>
    )
}
            