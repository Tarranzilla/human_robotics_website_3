// Vanilla React Imports
import { forwardRef, useState } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { setActiveProductClass } from "../../context/main_context";

// Product Card Import
import Product_Card from "../Shop/Product_Card";

const LP_Section_02_Produtos = forwardRef(function LP_Section_02_Produtos(props, ref: any) {
    const dispatch = useDispatch();
    const activeProductClass = useSelector((state: any) => state.activeProductClass);

    const handleSetActiveProductClass = (activeProductClass) => {
        dispatch(setActiveProductClass(activeProductClass));
    };

    const availableProducts = useSelector((state: any) => state.availableProducts);

    return (
        <div className="LP_Section LP_Section_03_Produtos" id="LP_Section_2" ref={ref} key={"LP_Section_2"}>
            <div className="Section_03_Background"></div>
            <div className="Type_Header" key={"Product_Type_Header_A"}>
                {activeProductClass === null && <h3 className="Type_Viewer_Title">Nenhum Produto Selecionado</h3>}
                {activeProductClass === "robos" && <h3 className="Type_Viewer_Title">Robôs</h3>}
                {activeProductClass === "softwares" && <h3 className="Type_Viewer_Title">Softwares</h3>}
                {activeProductClass === "assinaturas" && <h3 className="Type_Viewer_Title">Assinaturas</h3>}
                {activeProductClass === "experiencias" && <h3 className="Type_Viewer_Title">Experiências</h3>}
            </div>
            <div className="Type_Viewer">
                {activeProductClass === null && (
                    <div className="Product_Container" key={"Product_Container_A"}>
                        <h3 className="No_Product_Selected_Title">Nenhuma Categoria de Produto Selecionada</h3>
                    </div>
                )}
                {activeProductClass === "robos" && (
                    <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Product_Container" key={"Prod_Cont_1"}>
                        {availableProducts.map((product: any) => {
                            if (product.class === "robos") {
                                return <Product_Card product={product} key={product.id} />;
                            }
                        })}
                    </m.div>
                )}
                {activeProductClass === "softwares" && (
                    <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Product_Container" key={"Prod_Cont_2"}>
                        {availableProducts.map((product: any) => {
                            if (product.class === "softwares") {
                                return <Product_Card product={product} key={product.id} />;
                            }
                        })}
                    </m.div>
                )}
                {activeProductClass === "assinaturas" && (
                    <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Product_Container" key={"Prod_Cont_3"}>
                        <div className="Product_Card Card_Template">
                            <h3>Assinatura Mensal Robios GO</h3>
                        </div>
                        <div className="Product_Card Card_Template">
                            <h3>Assinatura Mensal Robios Inspector</h3>
                        </div>
                        <div className="Product_Card Card_Template">
                            <h3>Assinatura Mensal Robios Cargo</h3>
                        </div>
                    </m.div>
                )}
                {activeProductClass === "experiencias" && (
                    <m.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: -1000 }} className="Product_Container" key={"Prod_Cont_4"}>
                        <div className="Product_Card">
                            <h3>Experiências</h3>
                        </div>
                    </m.div>
                )}
            </div>
            <div className="Product_Type_Container" key={"Product_Type_Container_A"}>
                <button
                    key="ProductClass_1"
                    className={activeProductClass === "robos" ? "Product_Type active" : "Product_Type"}
                    onClick={() => handleSetActiveProductClass("robos")}
                >
                    <h3 className="Product_Type_Title">Robôs</h3>
                </button>
                <button
                    key="ProductClass_2"
                    className={activeProductClass === "softwares" ? "Product_Type active" : "Product_Type"}
                    onClick={() => handleSetActiveProductClass("softwares")}
                >
                    <h3 className="Product_Type_Title">Softwares</h3>
                </button>
                <button
                    key="ProductClass_3"
                    className={activeProductClass === "assinaturas" ? "Product_Type active" : "Product_Type"}
                    onClick={() => handleSetActiveProductClass("assinaturas")}
                >
                    <h3 className="Product_Type_Title">Assinaturas</h3>
                </button>
                <button
                    key="ProductClass_4"
                    className={activeProductClass === "experiencias" ? "Product_Type active" : "Product_Type"}
                    onClick={() => handleSetActiveProductClass("experiencias")}
                >
                    <h3 className="Product_Type_Title">Experiências</h3>
                </button>
            </div>
        </div>
    );
});

export default LP_Section_02_Produtos;
