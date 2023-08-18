// Vanilla React Imports
import { forwardRef, useState } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { setActiveChocoClass } from "../../context/main_context";

// Product Card Import
import Product_Card from "../Shop/Product_Card";

const LP_Section_02_Produtos = forwardRef(function LP_Section_02_Produtos(props, ref: any) {
    const dispatch = useDispatch();
    const activeChocoClass = useSelector((state: any) => state.activeChocoClass);

    const handleSetActiveChocoClass = (activeChocoClass) => {
        dispatch(setActiveChocoClass(activeChocoClass));
    };

    const availableProducts = useSelector((state: any) => state.availableChocolates);

    return (
        <div className="LP_Section LP_Section_03_Produtos" id="LP_Section_2" ref={ref} key={"LP_Section_2"}>
            <div className="Section_03_Background"></div>
            <div className="Type_Header" key={"Product_Type_Header_A"}>
                {activeChocoClass === null && <h3 className="Type_Viewer_Title">Nenhum Produto Selecionado</h3>}
                {activeChocoClass === "classico" && <h3 className="Type_Viewer_Title">Robôs</h3>}
                {activeChocoClass === "especial" && <h3 className="Type_Viewer_Title">Softwares</h3>}
                {activeChocoClass === "kit" && <h3 className="Type_Viewer_Title">Assinaturas</h3>}
                {activeChocoClass === "assinatura" && <h3 className="Type_Viewer_Title">Experiências</h3>}
            </div>
            <div className="Type_Viewer">
                {activeChocoClass === 0 && (
                    <div className="Product_Container" key={"Product_Container_A"}>
                        <h3 className="No_Product_Selected_Title">Nenhuma Categoria de Produto Selecionada</h3>
                    </div>
                )}
                {activeChocoClass === "classico" && (
                    <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Product_Container" key={"Clássicos"}>
                        {availableProducts.map((product: any) => {
                            if (product.chocoClass === "classico") {
                                return <Product_Card product={product} key={product.id} />;
                            }
                        })}
                    </m.div>
                )}
                {activeChocoClass === "especial" && (
                    <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Product_Container" key={"Especiais"}>
                        {availableProducts.map((product: any) => {
                            if (product.chocoClass === "especial") {
                                return <Product_Card product={product} key={product.id} />;
                            }
                        })}
                    </m.div>
                )}
                {activeChocoClass === "kit" && (
                    <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Product_Container" key={"Kits"}>
                        <div className="Product_Card">
                            <h3>Assinatura Mensal Robios GO</h3>
                        </div>
                        <div className="Product_Card">
                            <h3>Assinatura Mensal Robios Inspector</h3>
                        </div>
                        <div className="Product_Card">
                            <h3>Assinatura Mensal Robios Cargo</h3>
                        </div>
                    </m.div>
                )}
                {activeChocoClass === "assinatura" && (
                    <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Product_Container" key={"Assinaturas"}>
                        <div className="Product_Card">
                            <h3>Experiências</h3>
                        </div>
                    </m.div>
                )}
            </div>
            <div className="Product_Type_Container" key={"Product_Type_Container_A"}>
                <button
                    key="ChocoClass_1"
                    className={activeChocoClass === "classico" ? "Product_Type active" : "Product_Type"}
                    onClick={() => handleSetActiveChocoClass("classico")}
                >
                    <h3 className="Product_Type_Title">Robôs</h3>
                </button>
                <button
                    key="ChocoClass_2"
                    className={activeChocoClass === "especial" ? "Product_Type active" : "Product_Type"}
                    onClick={() => handleSetActiveChocoClass("especial")}
                >
                    <h3 className="Product_Type_Title">Softwares</h3>
                </button>
                <button
                    key="ChocoClass_3"
                    className={activeChocoClass === "kit" ? "Product_Type active" : "Product_Type"}
                    onClick={() => handleSetActiveChocoClass("kit")}
                >
                    <h3 className="Product_Type_Title">Assinaturas</h3>
                </button>
                <button
                    key="ChocoClass_4"
                    className={activeChocoClass === "assinatura" ? "Product_Type active" : "Product_Type"}
                    onClick={() => handleSetActiveChocoClass("assinatura")}
                >
                    <h3 className="Product_Type_Title">Experiências</h3>
                </button>
            </div>
        </div>
    );
});

export default LP_Section_02_Produtos;
