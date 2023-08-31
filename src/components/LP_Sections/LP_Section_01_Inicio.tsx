// React Vanilla Imports
import { forwardRef, useState, useEffect } from "react";

// Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

import LogoImg from "../../../public/Logo.svg";
import backgroundImg from "../../assets/cacau_textures/dalle1.png";
import CardContainer_Experiencias from "../legacy/Carrossel_Experiencias";
import CardContainer_Parceiros from "../legacy/Carrossel_Parceiros";

const LP_Section_01_Inicio = forwardRef(function LP_Section_01_Inicio(props, ref: any) {
    const [text, setText] = useState("Agora");
    const textArray = ["Agora", "Interativo", "Humano"];
    let index = 0;

    useEffect(() => {
        const interval = setInterval(() => {
            setText(textArray[index]);
            index = (index + 1) % textArray.length;
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="LP_Section LP_Section_01_Inicio" id="LP_Section_1" ref={ref} key={"LP_Section_1"}>
            <div className="carroussel_left_fade top_fade"></div>
            <div className="carroussel_right_fade top_fade"></div>
            <CardContainer_Experiencias />
            <div className="Section_01_Background"></div>
            <div className="Brand_Declaration">
                <h2 className="Brand_Declaration">O Futuro da Robótica é</h2>

                <AnimatePresence mode="wait">
                    {text === "Agora" && (
                        <m.h2 initial={{ x: 2000 }} animate={{ x: 0 }} exit={{ x: -2000 }} key="Agora" className="Brand_Name">
                            Agora
                        </m.h2>
                    )}
                    {text === "Interativo" && (
                        <m.h2 initial={{ x: 2000 }} animate={{ x: 0 }} exit={{ x: -2000 }} key="Interativo" className="Brand_Name">
                            Interativo
                        </m.h2>
                    )}
                    {text === "Humano" && (
                        <m.h2 initial={{ x: 2000 }} animate={{ x: 0 }} exit={{ x: -2000 }} key="Humano" className="Brand_Name">
                            Humano
                        </m.h2>
                    )}
                </AnimatePresence>
            </div>

            <CardContainer_Parceiros />
            <div className="carroussel_left_fade"></div>
            <div className="carroussel_right_fade"></div>
        </div>
    );
});

export default LP_Section_01_Inicio;
