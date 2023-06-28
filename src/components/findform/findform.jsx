import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function FindForm({ TriggerModal })
{
    const say = ()=> {
        alert("It's not working. It's only prototype");
    }
    return(
    <div className="mt-12 flex flex-col bg-purple-950/25 py-4 px-12 rounded-lg md:flex-row">
        <input type="text" placeholder="Find your streamer" className="rounded-xl w-auto py-2 text-center"/>
        <button className="btn bg-purple-950 text-white py-2 px-8 ml-4 mt-4 md:mt-0" onClick={say}><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        <button className="btn bg-purple-950 text-white py-2 px-8 ml-4 mt-4 md:mt-0" onClick={TriggerModal}>Add Streamer</button>
  </div>)
}