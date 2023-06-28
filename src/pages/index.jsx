import { FindForm, StreamerCard, AddStreamerModal } from "../components"
import { useState } from "react"
/*Index page */
export default function Home() {
  
  /* Add streamer form */
  const [modalIsOpening, setModalIsOpening] = useState(false);

  const triggerStreamerModal = () => {
    setModalIsOpening(!modalIsOpening);
  }
  return (
    <main className="min-h-screen">
      <div className="flex flex-col items-center justify-center text-center"> 
         <span className='mt-4 border border-glow-blue h-2 w-5/6 bg-white md:w-4/5 lg:w-3/5 xl:w-2/5'/>
         <FindForm TriggerModal={triggerStreamerModal}/>
         <p className='mt-4 text-3xl font-bold text-white md:text-4xl'>Top streamers:</p>
         <StreamerCard/>   
         
         <AddStreamerModal isOpening={modalIsOpening} CloseModal={triggerStreamerModal}/> 
      </div>
    </main>
  )
}
