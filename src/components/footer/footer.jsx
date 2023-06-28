import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Footer()    
{
 
    return(
        <>
        <footer className="w-full flex flex-col items-center justify-center text-center  ">
           <span className='border border-glow-blue h-2 w-5/6 bg-white md:w-4/5 lg:w-3/5 xl:w-2/5'/>
            <div className="p-12 flex flex-row ">
                <img src={'/images/AvatarForFooter.jpg'} width={80} height={80} alt="Logo" className="rounded-full border border-glow-blue "/>
                <span className="text-2xl text-white place-self-center pl-2 bg-sky-500/25 py-2 pr-2 rounded-r-full ">by Kczmrz </span>
                <a href={'https://github.com/kczmrz'} target="_blank" className="place-self-center ml-4 text-xl text-white"><FontAwesomeIcon icon={faUpRightFromSquare}/> </a>
            </div>
        </footer>
        </>
    )
}