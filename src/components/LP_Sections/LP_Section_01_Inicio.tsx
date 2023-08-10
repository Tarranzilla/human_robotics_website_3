// React Vanilla Imports
import { forwardRef } from "react";

import LogoImg from "../../../public/Logo.svg";
import backgroundImg from "../../assets/cacau_textures/dalle1.png";
import CardContainer_Experiencias from "../legacy/Carrossel_Experiencias";
import CardContainer_Parceiros from "../legacy/Carrossel_Parceiros";

const LP_Section_01_Inicio = forwardRef(function LP_Section_01_Inicio(props, ref: any) {
    return (
        <div className="LP_Section LP_Section_01_Inicio" id="LP_Section_1" ref={ref} key={"LP_Section_1"}>
            <CardContainer_Experiencias />
            <img src={backgroundImg} alt="background" className="Section_01_Background" />
            <h2 className="Brand_Declaration">O Futuro da Robótica é Agora</h2>
            <CardContainer_Parceiros />
        </div>
    );
});

export default LP_Section_01_Inicio;
