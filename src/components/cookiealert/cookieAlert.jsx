import CookieConsent from "react-cookie-consent";


export default function CookieAlert()
{
    return(
        <>
        <CookieConsent
            location="bottom"
            buttonText="Okay"
            cookieName="myAwesomeCookieName2"
            style={{ background: "#5b21b6" }}
            buttonStyle={{ color: "white", fontSize: "13px", background: "#1e1b4b" }}
            expires={150}
            >
            In this place you can get info about cookies 🍪🍪🍪
         </CookieConsent>
        </>
    )
}