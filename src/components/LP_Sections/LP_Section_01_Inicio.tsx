// React Vanilla Imports
import { forwardRef } from "react";

import LogoImg from "../../../public/Logo.svg";
import backgroundImg from "../../assets/cacau_textures/dalle1.png";

const LP_Section_01_Inicio = forwardRef(function LP_Section_01_Inicio(props, ref: any) {
    return (
        <div className="LP_Section LP_Section_01_Inicio" id="LP_Section_1" ref={ref} key={"LP_Section_1"}>
            <img src={backgroundImg} alt="background" className="Section_01_Background" />
            <h2 className="Brand_Declaration">O Futuro da Robótica é Agora</h2>
        </div>
    );
});

export default LP_Section_01_Inicio;
