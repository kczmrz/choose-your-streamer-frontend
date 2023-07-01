import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
export default function Streamer()
{
    const { id } = useParams();
    return(
    <main className='min-h-screen'>
          <div className='flex flex-col items-center mb-24'>
               <div className='bg-gray-800/50 w-4/5 p-8 rounded-lg h-auto md:w-2/5'> 
                 <span className='text-purple-700 text-5xl flex flex-row'>
                    <FontAwesomeIcon icon={faCrown}/><p className='text-white text-3xl place-self-center'>Streamer Info</p>
                </span>
                 <div className='flex flex-col items-center mt-4'>
                    <img src={'https://zarobkimajatek.pl/wp-content/uploads/2022/12/i-show-speed.png'} className="aspect-square object-cover rounded-full border border-glow-purple h-auto w-36 md:w-32"/>
                    <p className='text-3xl font-bold text-white mt-2 bg-purple-950 px-4 py-2 rounded-full w-auto border border-glow-purple'>IShowSpeed</p>
                    <span className='text-2xl font-bold text-white mt-2 flex flex-row'> <img src={"/images/icons/youtube.png"} width={30} height={30}/>YouTube</span>
                   <p className='text-3xl font-bold text-white mt-8'>About</p>
                   <span className='mt-4 border border-glow-purple_2 h-2 w-5/6 bg-white'/>
                   <span className='mt-8 text-white text-3xl mb-4 w-5/6'>
                      IShowSpeed is a renowned content creator and streamer. They specialize in speedrunning, where they complete video games at incredibly fast speeds. With a loyal fan base, IShowSpeed entertains and educates viewers through their live streams. Their exceptional skills and achievements in speedrunning have earned them respect within the gaming community.
                   </span>
                </div>
               </div>
               <a href={'/'} className='mt-12 text-white bg-purple-950 text-3xl px-6 py-4 rounded-full hover:bg-purple-700'>Back</a>
          </div>
      
    </main>)
}
              