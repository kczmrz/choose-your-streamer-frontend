import { FindForm, StreamerCard, AddStreamerModal } from "../components"
import { useState, useEffect } from "react"
import axios from "axios";


/*Index page */
export default function Home() {
  
   /*State to get all streamers from axios */
   const [StreamersData, setStreamersData] = useState([]);
 /* Add-streamer form */
  const [modalIsOpening, setModalIsOpening] = useState(false);

  const triggerStreamerModal = () => {
    setModalIsOpening(!modalIsOpening);
  }

  /*Get all streamers, the algorithm for segregating streamers is on the backend */
  const GetStreamers = async () => {
    try {
      await axios.get(process.env.REACT_APP_API_URL + 'streamers').then((strmrs)=>  setStreamersData(strmrs.data));
    }
    catch {
     console.log('Error')
    }
 }
  useEffect(() => {
    
    GetStreamers();
    
  }, [])
  
  
  
  return (
    <main className="min-h-screen">
      <div className="flex flex-col items-center justify-center text-center"> 
         <span className='mt-4 border border-glow-blue h-2 w-5/6 bg-white md:w-4/5 lg:w-3/5 xl:w-2/5'/>
         <FindForm TriggerModal={triggerStreamerModal}/>
         <p className='mt-4 text-3xl font-bold text-white md:text-4xl'>Top streamers:</p>
           {StreamersData.map((item, key)=> (<StreamerCard key={key} data={item} rank={key} refresh={GetStreamers}/>))}
         <AddStreamerModal isOpening={modalIsOpening} CloseModal={triggerStreamerModal} Refresh={GetStreamers}/> 
      </div>
    </main>
  )
}
