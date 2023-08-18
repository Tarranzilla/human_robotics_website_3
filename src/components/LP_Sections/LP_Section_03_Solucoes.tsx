// Vanilla React Imports
import { forwardRef, useState } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { setActiveSolution } from "../../context/main_context";

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
                        <h3>Atendimento</h3>
                        <p>
                            Os robôs podem interagir com os clientes, fornecendo informações sobre produtos e ajudando a localizar itens específicos
                            na loja. Ele pode até mesmo ajudar os clientes a fazer compras, oferecendo sugestões com base em suas preferências.
                        </p>
                    </m.div>
                )}
                {activeSolution === "publicidade" && (
                    <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Solution_Card" key={"EspeciaisB"}>
                        <h3>Publicidade</h3>
                        <p>
                            Os robôs podem realizar atividades promocionais, como distribuir brindes e amostras de produtos, fornecer informações
                            sobre os produtos e serviços e até mesmo realizar vendas diretas.
                        </p>
                    </m.div>
                )}
                {activeSolution === "inspecao" && (
                    <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Solution_Card" key={"KitsB"}>
                        <h3>Inspeção</h3>
                        <p>
                            Os robôs podem ser programados para inspecionar produtos e materiais em busca de defeitos ou irregularidades, usando o
                            leitor de RFID e código de barras para identificar o produto e armazenar informações sobre a inspeção para análise
                            posterior.
                        </p>
                    </m.div>
                )}
                {activeSolution === "transporte" && (
                    <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Solution_Card" key={"AssinaturasB"}>
                        <h3>Transporte</h3>
                        <p>
                            Os robôs podem ser programados para entregar materiais e suprimentos em toda a fábrica, usando o leitor de RFID e código
                            de barras para identificar a localização e a quantidade dos materiais a serem entregues.
                        </p>
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
