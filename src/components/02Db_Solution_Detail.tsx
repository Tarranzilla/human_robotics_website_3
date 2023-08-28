//Framer Motion Imports
import { motion as m } from "framer-motion";

// React Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { toggleSolutionDetails } from "../context/main_context";

export default function Solution_Detail() {
    const dispatch = useDispatch();

    const toggleSolutionDetailButton = () => {
        dispatch(toggleSolutionDetails());
    };

    const activeSolution = useSelector((state: any) => state.activeSolution);

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Privacy_Container">
            <div className="Privacy_Header">
                <span className="material-icons Privacy_Icon">info</span>
                <h2 className="Privacy_Title">Detalhe de Solução</h2>
                <button className="Privacy_Close_Btn">
                    <span className="material-icons" onClick={toggleSolutionDetailButton}>
                        close
                    </span>
                </button>
            </div>
            <div className="Privacy_Body">
                <div className="Solution_Detail_Image_Container">
                    <img src={activeSolution.imgSrc[0]} alt={activeSolution.name} />
                    <img src={activeSolution.imgSrc[0]} alt={activeSolution.name} />
                    <img src={activeSolution.imgSrc[0]} alt={activeSolution.name} />
                </div>
                <h2>{activeSolution.name}</h2>
                <p>{activeSolution.description}</p>
                <p>{activeSolution.fullDescription}</p>
                {activeSolution.partners.map((partner: any) => {
                    return (
                        <div className="Solution_Partner">
                            <img src={partner.imgSrc} alt={partner.name} />
                            <a href={partner.description} target="_blank" rel="noreferrer">
                                {partner.name}
                            </a>
                        </div>
                    );
                })}
            </div>
        </m.div>
    );
}
