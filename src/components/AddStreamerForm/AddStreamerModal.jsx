import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from 'react-toastify';
import { v4 } from "uuid";

export default function AddStreamerModal({ isOpening, CloseModal, Refresh })
{
   /*Display notify */
   const notifyMessage = (message) => {
      toast(message);
   }
   /*Forms inputs */
   const [Nick, setNick] = useState("");
   const [Platform, setPlatform] = useState("Twitch");
   const [ImageUrl, setImageUrl] = useState("");
   const [Description, setDescription] = useState("")
   
  /* Clear inputs, when streamer has been added to DB */
   const ClearForms = () => {
      setNick("");
      setImageUrl("")
      setDescription("");
   }
  
   /*Post to database */
   const SubmitForm = async (event) =>{
      event.preventDefault(); 

     const getIDfromUUID = v4();
     const StreamerData = {
         Id: Nick + getIDfromUUID.slice(0, 6),
         Nick: Nick,
         Platform: Platform,
         Image: ImageUrl,
         Description: Description,
        
        }
      
        /* Simple fast validation */ 
     if(Nick.trim().length >= 3 && ImageUrl.trim().length > 3 && Description.trim().length > 3) {
         try {
            await axios.post(process.env.REACT_APP_API_URL + 'streamers', StreamerData).then((strmr) =>  {notifyMessage("Streamer " +strmr.data.Nick + " has been added"); CloseModal(); ClearForms(); Refresh() }).catch((e) => console.log(e))
          } catch(e) {
            notifyMessage("Error");
         }
       
     } else {
      notifyMessage("Inputs cannot be empty!");
     }
   
   }

   if(!isOpening) return null;  
    return(
        <div className="fixed inset-0 bg-black/25 backdrop-blur-sm text-white flex items-center justify-center">
            <div className="flex flex-col bg-gray-800/50 w-4/5 md:w-2/5 md:border md:border-glow-purple">
               <div className="bg-purple-950 text-3xl px-4 py-2 ">Add your streamer! </div> 
               <form className="px-4 md:px-24">

                 <label className="py-2 flex flex-col text-2xl">
                    Nick:
                    <input type="text" name="nick" value={Nick} onChange={(e)=>setNick(e.target.value)} className="mt-2 text-black text-center rounded-lg" />
                 </label>

                 <label className="py-2 flex flex-col text-2xl">
                    Platform:
                    <select name="platform" id="platform" defaultValue={"Twitch"} onChange={(e) => setPlatform(e.target.value)} className="text-black text-center">
                        <option value="Twitch">Twitch</option>
                        <option value="YouTube">YouTube</option>
                        <option value="TikTok">TikTok</option>
                        <option value="Kick">Kick</option>
                        <option value="Rumble">Rumble</option>
                     </select>
                 </label>
                 
                 <label className="py-2 flex flex-col text-2xl">
                    Image URL:
                    <input type="text" name="image" value={ImageUrl} onChange={(e) => setImageUrl(e.target.value)} className="mt-2 text-black text-center rounded-lg" />
                 </label>


                 <label className="py-2 flex flex-col text-2xl">
                    Description:
                    <textarea type="text" name="description" value={Description} onChange={(e) => setDescription(e.target.value)} maxLength={500} className="mt-2 text-black text-center rounded-lg text-sm md:text-xl" />
                 </label>
                <button className="btn bg-purple-950 text-3xl px-12 py-2 mt-4 rounded-full hover:bg-purple-700" onClick={SubmitForm}> Add! </button>
                 </form>
                 <button className="btn bg-gray-950/50 text-sm py-2 w-4/5 self-center mt-4 mb-4 hover:bg-gray-800/75 md:w-2/5" onClick={CloseModal}> <FontAwesomeIcon icon={faArrowLeft}/> Back </button> 

            </div>
        </div>
    )
}
            