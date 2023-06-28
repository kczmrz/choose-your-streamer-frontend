export default function ProgressBar({ progress }) {
    return(
   <div className="mt-3 w-11/12 bg-red-400 rounded-full h-2.5 hidden md:flex">
       <div className="bg-green-400 h-2.5 rounded-full" style={{width: progress + '%'}} ></div>
   </div>
    )
}