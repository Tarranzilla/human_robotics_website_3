// Vanilla React Imports
import { forwardRef, useState } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { setActiveSolution, setActiveSolutionClass, toggleSolutionDetails } from "../../context/main_context";

// Video Imports
import VideoEventos from "../../assets/videos/01_Robios_Eventos_Desktop_720p.mp4";
import VideoVarejo from "../../assets/videos/02_Robios_Varejo_Desktop_QuickCuts_720p.mp4";
import VideoSaude from "../../assets/videos/03_Robios_Saúde_Desktop_720p.mp4";
import VideoNavegação from "../../assets/videos/05_Video_Navegacao.mp4";
import VideoApresentacao from "../../assets/videos/Robios_Apresentacao.mp4";
import VideoEventosAtendimento from "../../assets/videos/Robios_Evento_Transporte_Atendimento.mp4";

const springTransition = {
    type: "spring",
    stiffness: 100,
    damping: 15,
    bounce: 0.5,
    velocity: 50,
};

const customTransition = springTransition;

const LP_Section_03_Solucoes = forwardRef(function LP_Section_03_Solucoes(props, ref: any) {
    const dispatch = useDispatch();

    const availableSolutions = useSelector((state: any) => state.availableSolutions);
    const activeSolutionClass = useSelector((state: any) => state.activeSolutionClass);

    const handleSetActiveSolutionClass = (activeSolutionClass) => {
        dispatch(setActiveSolutionClass(activeSolutionClass));
    };

    const toggleActiveSolutionButton = (id) => {
        dispatch(setActiveSolution(id));
        dispatch(toggleSolutionDetails());
        console.log("Toggling Solution Details");
    };

    return (
        <div className="LP_Section LP_Section_03_Solucoes" id="LP_Section_3" ref={ref} key={"LP_Section_3"}>
            <div className="Section_03_Background"></div>
            <div className="Solution_Viewer">
                <AnimatePresence mode="popLayout">
                    {activeSolutionClass === null && (
                        <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Solution_Card" key={"Solution_Container_NONE"}>
                            <h3 className="No_Product_Selected_Title">Nenhuma Categoria de Produto Selecionada</h3>
                        </m.div>
                    )}

                    {availableSolutions.map((solution: any) => {
                        if (solution.class === activeSolutionClass) {
                            return (
                                <m.div
                                    initial={{ x: "100vw" }}
                                    animate={{ x: 0 }}
                                    exit={{ x: "-100vw" }}
                                    transition={customTransition}
                                    className="Solution_Card"
                                    key={solution.domId}
                                >
                                    <div className="Solution_Video_Fader"></div>
                                    <video className="Solution_Video" src={solution.videoSrc[0]} autoPlay loop muted />
                                    <h3 className="Solution_Title">{solution.name}</h3>
                                    <p className="Solution_Description">{solution.description}</p>
                                    <button
                                        className="Solution_KnowMore_Button"
                                        onClick={() => {
                                            toggleActiveSolutionButton({ id: solution.id });
                                        }}
                                    >
                                        <span className="material-icons">info</span>Mais Detalhes
                                    </button>
                                </m.div>
                            );
                        }
                    })}
                </AnimatePresence>
            </div>
            <div className="Product_Type_Container" key={"Product_Type_Container_B"}>
                <button
                    key="ChocoClass_1"
                    className={activeSolutionClass === "atendimento" ? "Product_Type active" : "Product_Type"}
                    onClick={() => handleSetActiveSolutionClass("atendimento")}
                >
                    <h3 className="Product_Type_Title">Atendimento</h3>
                </button>
                <button
                    key="ChocoClass_2"
                    className={activeSolutionClass === "publicidade" ? "Product_Type active" : "Product_Type"}
                    onClick={() => handleSetActiveSolutionClass("publicidade")}
                >
                    <h3 className="Product_Type_Title">Publicidade</h3>
                </button>
                <button
                    key="ChocoClass_3"
                    className={activeSolutionClass === "inspecao" ? "Product_Type active" : "Product_Type"}
                    onClick={() => handleSetActiveSolutionClass("inspecao")}
                >
                    <h3 className="Product_Type_Title">Inspeção</h3>
                </button>
                <button
                    key="ChocoClass_4"
                    className={activeSolutionClass === "transporte" ? "Product_Type active" : "Product_Type"}
                    onClick={() => handleSetActiveSolutionClass("transporte")}
                >
                    <h3 className="Product_Type_Title">Transporte</h3>
                </button>
            </div>
        </div>
    );
});

export default LP_Section_03_Solucoes;
