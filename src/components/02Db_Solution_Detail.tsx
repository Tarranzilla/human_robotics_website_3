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
            <div className="Solution_Detail_Body">
                <div className="Solution_Detail_Image_Container">
                    <img className="Solution_Detail_Image" src={activeSolution.imgSrc[0]} alt={activeSolution.name} />
                    <img className="Solution_Detail_Image" src={activeSolution.imgSrc[1]} alt={activeSolution.name} />
                    <img className="Solution_Detail_Image" src={activeSolution.imgSrc[2]} alt={activeSolution.name} />
                </div>

                <div className="Solution_Detail_Right_Content">
                    <h2>{activeSolution.name}</h2>
                    <p>{activeSolution.description}</p>
                    <p>{activeSolution.fullDescription}</p>
                    <div className="Solution_Partner_Container">
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
                </div>
            </div>
        </m.div>
    );
}
