import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Streamer()
{
    const { id } = useParams();
     
    
    /* Streamer data- state */
    const [oneStreamerData, setOneStreamerData] = useState({});
    
   /*Get streamer */
    useEffect(()=> {
      const GetStreamer = async () => {
         try {
          await axios.get(process.env.REACT_APP_API_URL + 'streamer/' + id).then((streameer)=>  setOneStreamerData(streameer.data));
         }
         catch {
          console.log('Error')
         }
      }
      GetStreamer();
     
    },[])
    
    console.log(oneStreamerData.Image)
    return(
    <main className='min-h-screen'>
          <div className='flex flex-col items-center mb-24'>
               <div className='bg-gray-800/50 w-4/5 p-8 rounded-lg h-auto md:w-2/5'> 
                 <span className='text-purple-700 text-5xl flex flex-row'>
                    <FontAwesomeIcon icon={faCrown}/><p className='text-white text-3xl place-self-center'>Streamer Info</p>
                </span>
                 <div className='flex flex-col items-center mt-4'>
                    <img src={oneStreamerData.Image} alt="" className="aspect-square object-cover rounded-full border border-glow-purple h-auto w-36 md:w-32"/>
                    <p className='text-3xl font-bold text-white mt-2 bg-purple-950 px-4 py-2 rounded-full w-auto border border-glow-purple'>{oneStreamerData.Nick}</p>
                    <span className='text-2xl mt-4 text-white mt-2 bg-slate-700/50 py-2 px-8 flex flex-row'>Platform: <p className='font-bold '>&nbsp; {oneStreamerData.Platform}</p></span>
                   <p className='text-3xl font-bold text-white mt-8'>About</p>
                   <span className='mt-4 border border-glow-purple_2 h-2 w-5/6 bg-white'/>
                   <span className='mt-8 text-white text-3xl mb-4 w-5/6'>
                    {oneStreamerData.Description}
                   </span>
                </div>
               </div>
               <a href={'/'} className='mt-12 text-white bg-purple-950 text-3xl px-6 py-4 rounded-full hover:bg-purple-700'>Back</a>
          </div>
      
    </main>)
}
              