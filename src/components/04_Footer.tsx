// © 2023 Tropical Cacau, Ltda. | Privacidade | Termos | Mapa do site

// Redux Imports
import { useDispatch } from "react-redux";
import { togglePrivacyPolicy, toggleTerms, toggleSiteMap } from "../context/main_context";

//Icon imports
import Icon_Whatsapp from "./Icons/Icon_Whatsapp";
import Icon_Instagram from "./Icons/Icon_Instagram";
import Icon_Facebook from "./Icons/Icon_Facebook";
import Icon_Twitter from "./Icons/Icon_Twitter";
import Icon_Linkedin from "./Icons/Icon_Linkedin";
import Icon_Youtube from "./Icons/Icon_Youtube";

export default function Footer() {
    const dispatch = useDispatch();

    const togglePrivacyButton = () => {
        dispatch(togglePrivacyPolicy());
    };

    const toggleTermsButton = () => {
        dispatch(toggleTerms());
    };

    const toggleSiteMapButton = () => {
        dispatch(toggleSiteMap());
    };

    return (
        <div className="Footer" key={"Footer"}>
            <div className="Footer_Info_Links Desktop_Only">
                <a href="#Privacidade" className="Footer_Info" onClick={togglePrivacyButton}>
                    <span className="material-icons">privacy_tip</span> Privacidade
                </a>
                <a href="#Termos" className="Footer_Info Middle_Info" onClick={toggleTermsButton}>
                    <span className="material-icons">assignment</span> Termos
                </a>
                <a href="#MapaSite" className="Footer_Info" onClick={toggleSiteMapButton}>
                    <span className="material-icons">map</span> Mapa do site
                </a>
            </div>
            <div className="Footer_Copyright">
                <p>© 2023</p>
                <p>Human Robotics</p>
            </div>
            <div className="Social_Media_Container">
                <Icon_Whatsapp />
                <Icon_Linkedin />
                <Icon_Facebook />
                <Icon_Instagram />
                <Icon_Youtube />
            </div>
        </div>
    );
}
