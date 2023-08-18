// Vanilla React Imports
import { forwardRef, useState } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { setActiveSolution } from "../../context/main_context";

// Video Imports
import VideoEventos from "../../assets/videos/01_Robios_Eventos_Desktop_720p.mp4";
import VideoVarejo from "../../assets/videos/02_Robios_Varejo_Desktop_QuickCuts_720p.mp4";
import VideoSaude from "../../assets/videos/03_Robios_Saúde_Desktop_720p.mp4";
import VideoNavegação from "../../assets/videos/05_Video_Navegacao.mp4";
import VideoApresentacao from "../../assets/videos/Robios_Apresentacao.mp4";
import VideoEventosAtendimento from "../../assets/videos/Robios_Evento_Transporte_Atendimento.mp4";

const LP_Section_03_Solucoes = forwardRef(function LP_Section_03_Solucoes(props, ref: any) {
    const dispatch = useDispatch();
    const activeSolution = useSelector((state: any) => state.activeSolution);

    const handleSetActiveSolution = (activeSolution) => {
        dispatch(setActiveSolution(activeSolution));
    };

    return (
        <div className="LP_Section LP_Section_03_Solucoes" id="LP_Section_3" ref={ref} key={"LP_Section_3"}>
            <div className="Section_03_Background"></div>
            <div className="Solution_Viewer">
                {activeSolution === 0 && (
                    <div className="Solution_Card" key={"Product_Container_B"}>
                        <h3 className="No_Product_Selected_Title">Nenhuma Categoria de Produto Selecionada</h3>
                    </div>
                )}
                {activeSolution === "atendimento" && (
                    <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Solution_Card" key={"ClássicosB"}>
                        <div className="Solution_Video_Fader"></div>
                        <video className="Solution_Video" src={VideoEventosAtendimento} autoPlay loop muted />
                        <h3 className="Solution_Title">Atendimento</h3>
                        <p className="Solution_Description">
                            Os robôs podem interagir com os clientes, fornecendo informações sobre produtos e ajudando a localizar itens específicos
                            na loja. Ele pode até mesmo ajudar os clientes a fazer compras, oferecendo sugestões com base em suas preferências.
                        </p>
                        <button className="Solution_KnowMore_Button">Mais Detalhes</button>
                    </m.div>
                )}
                {activeSolution === "publicidade" && (
                    <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Solution_Card" key={"EspeciaisB"}>
                        <div className="Solution_Video_Fader"></div>
                        <video className="Solution_Video" src={VideoEventos} autoPlay loop muted />
                        <h3 className="Solution_Title">Publicidade</h3>
                        <p className="Solution_Description">
                            Os robôs podem realizar atividades promocionais, como distribuir brindes e amostras de produtos, fornecer informações
                            sobre os produtos e serviços e até mesmo realizar vendas diretas.
                        </p>
                        <button className="Solution_KnowMore_Button">Mais Detalhes</button>
                    </m.div>
                )}
                {activeSolution === "inspecao" && (
                    <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Solution_Card" key={"KitsB"}>
                        <div className="Solution_Video_Fader"></div>
                        <video className="Solution_Video" src={VideoSaude} autoPlay loop muted />
                        <h3 className="Solution_Title">Inspeção</h3>
                        <p className="Solution_Description">
                            Os robôs podem ser programados para inspecionar produtos e materiais em busca de defeitos ou irregularidades, usando o
                            leitor de RFID e código de barras para identificar o produto e armazenar informações sobre a inspeção para análise
                            posterior.
                        </p>
                        <button className="Solution_KnowMore_Button">Mais Detalhes</button>
                    </m.div>
                )}
                {activeSolution === "transporte" && (
                    <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Solution_Card" key={"AssinaturasB"}>
                        <div className="Solution_Video_Fader"></div>
                        <video className="Solution_Video" src={VideoNavegação} autoPlay loop muted />
                        <h3 className="Solution_Title">Transporte</h3>
                        <p className="Solution_Description">
                            Os robôs podem ser programados para entregar materiais e suprimentos em toda a fábrica, usando o leitor de RFID e código
                            de barras para identificar a localização e a quantidade dos materiais a serem entregues.
                        </p>
                        <button className="Solution_KnowMore_Button">Mais Detalhes</button>
                    </m.div>
                )}
            </div>
            <div className="Product_Type_Container" key={"Product_Type_Container_B"}>
                <button
                    key="ChocoClass_1"
                    className={activeSolution === "atendimento" ? "Product_Type active" : "Product_Type"}
                    onClick={() => handleSetActiveSolution("atendimento")}
                >
                    <h3 className="Product_Type_Title">Atendimento</h3>
                </button>
                <button
                    key="ChocoClass_2"
                    className={activeSolution === "publicidade" ? "Product_Type active" : "Product_Type"}
                    onClick={() => handleSetActiveSolution("publicidade")}
                >
                    <h3 className="Product_Type_Title">Publicidade</h3>
                </button>
                <button
                    key="ChocoClass_3"
                    className={activeSolution === "inspecao" ? "Product_Type active" : "Product_Type"}
                    onClick={() => handleSetActiveSolution("inspecao")}
                >
                    <h3 className="Product_Type_Title">Inspeção</h3>
                </button>
                <button
                    key="ChocoClass_4"
                    className={activeSolution === "transporte" ? "Product_Type active" : "Product_Type"}
                    onClick={() => handleSetActiveSolution("transporte")}
                >
                    <h3 className="Product_Type_Title">Transporte</h3>
                </button>
            </div>
        </div>
    );
});

export default LP_Section_03_Solucoes;
