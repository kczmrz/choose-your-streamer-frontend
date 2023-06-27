import { useEffect, useState } from "react"
export default function Platform({ platform })
{
    /* Images from public folder */
    const PlatformIcon = {
        empty: "/images/icons/empty.png",
        kick: "/images/icons/kick.png",
        rumble: "/images/icons/rumble.png",
        tiktok: "/images/icons/tiktok.png",
        twitch: "/images/icons/twitch.png",
        youtube: "/images/icons/youtube.png",
    }

    /* This component state */
    const [Icon, setIcon] = useState(PlatformIcon.empty);

    /*Set icon */
    useEffect(()=> {
       switch(platform){
          case "Kick":
            setIcon(PlatformIcon.kick);
            break;

          case "Rumble":
            setIcon(PlatformIcon.rumble);
            break;

          case "TikTok":
            setIcon(PlatformIcon.tiktok);
            break;

          case "Twitch":
            setIcon(PlatformIcon.twitch);
            break;

         case "Youtube":
            setIcon(PlatformIcon.youtube);
            break;
       }
    }, [])
    return(
        <div>
         <img src={Icon} alt="" width={40} height={40} />
        </div>
    )
}

