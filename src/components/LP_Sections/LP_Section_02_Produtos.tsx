// Vanilla React Imports
import { forwardRef, useState } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { setActiveProductClass } from "../../context/main_context";

// Card Imports
import Product_Card from "../Shop/Product_Card";

import Robot_Card from "../cards/Robot_Card";
import Software_Card from "../cards/Software_Card";
import Service_Card from "../cards/Service_Card";
import Experience_Card from "../cards/Experience_Card";

const easeInOutQuad = [0.455, 0.03, 0.515, 0.955]; // This easing function provides a smooth start and a smooth end to the animation. It's a simple and widely appreciated easing curve.
const easeInOutCubic = [0.645, 0.045, 0.355, 1]; // This easing function is similar to the quad version but has a slightly more pronounced acceleration towards the middle of the animation.
const easeInOutExpo = [1, 0, 0, 1]; // This easing function starts and ends very softly, but has a bit more pronounced acceleration in the middle, giving it an interesting feel.
const customOvershoot = [0.23, 1, 0.32, 1.5]; // This custom cubic bezier curve gives a subtle bounce effect at the end of the animation, which can add a playful touch.

const customBezier = easeInOutCubic;

const springTransition = {
    type: "spring",
    stiffness: 100,
    damping: 15,
    bounce: 0.5,
    velocity: 50,
};

const customTransition = springTransition;

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
                <AnimatePresence mode="popLayout">
                    {activeProductClass === null && (
                        <m.h3 initial={{ y: 50 }} animate={{ y: 0 }} exit={{ y: -50 }} key="NPSelected" className="Type_Viewer_Title">
                            Nenhum Produto Selecionado
                        </m.h3>
                    )}
                    {activeProductClass === "robos" && (
                        <m.h3 initial={{ y: 50 }} animate={{ y: 0 }} exit={{ y: -50 }} key="ROBOS_Type" className="Type_Viewer_Title">
                            ROBÔS
                        </m.h3>
                    )}
                    {activeProductClass === "softwares" && (
                        <m.h3 initial={{ y: 50 }} animate={{ y: 0 }} exit={{ y: -50 }} key="SOFTWARES_TYPE" className="Type_Viewer_Title">
                            SOFTWARES
                        </m.h3>
                    )}
                    {activeProductClass === "servicos" && (
                        <m.h3 initial={{ y: 50 }} animate={{ y: 0 }} exit={{ y: -50 }} key="SERVICOS_TYPE" className="Type_Viewer_Title">
                            RobiOS UNIVERSE
                        </m.h3>
                    )}
                    {activeProductClass === "experiencias" && (
                        <m.h3 initial={{ y: 50 }} animate={{ y: 0 }} exit={{ y: -50 }} key="EXPERIENCIAS_TYPE" className="Type_Viewer_Title">
                            EXPERIÊNCIAS
                        </m.h3>
                    )}
                </AnimatePresence>
            </div>
            <div className="Type_Viewer">
                <AnimatePresence mode="popLayout">
                    {activeProductClass === null && (
                        <m.div className="Product_Container" key={"Product_Container_A"}>
                            <h3 className="No_Product_Selected_Title">Nenhuma Categoria de Produto Selecionada</h3>
                        </m.div>
                    )}
                    {activeProductClass === "robos" && (
                        <m.div
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100vw" }}
                            transition={customTransition}
                            className="Product_Container"
                            key={"Prod_Cont_1"}
                        >
                            {availableProducts.map((product: any) => {
                                if (product.class === "robos") {
                                    return <Robot_Card product={product} key={product.id} />;
                                }
                            })}
                        </m.div>
                    )}
                    {activeProductClass === "softwares" && (
                        <m.div
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100vw" }}
                            transition={customTransition}
                            className="Product_Container"
                            key={"Prod_Cont_2"}
                        >
                            {availableProducts.map((product: any) => {
                                if (product.class === "softwares") {
                                    return <Software_Card product={product} key={product.id} />;
                                }
                            })}
                        </m.div>
                    )}
                    {activeProductClass === "servicos" && (
                        <m.div
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100vw" }}
                            transition={customTransition}
                            className="Product_Container"
                            key={"Prod_Cont_3"}
                        >
                            {availableProducts.map((product: any) => {
                                if (product.class === "servicos") {
                                    return <Service_Card product={product} key={product.id} />;
                                }
                            })}
                        </m.div>
                    )}
                    {activeProductClass === "experiencias" && (
                        <m.div
                            initial={{ x: "100vw" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100vw" }}
                            transition={customTransition}
                            className="Product_Container"
                            key={"Prod_Cont_4"}
                        >
                            {availableProducts.map((product: any) => {
                                if (product.class === "experiencias") {
                                    return <Experience_Card product={product} key={product.id} />;
                                }
                            })}
                        </m.div>
                    )}
                </AnimatePresence>
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
                    onClick={() => handleSetActiveProductClass("servicos")}
                >
                    <h3 className="Product_Type_Title">Serviços</h3>
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
