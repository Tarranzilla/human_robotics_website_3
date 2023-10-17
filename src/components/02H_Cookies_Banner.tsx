//Framer Motion Imports
import { motion as m } from "framer-motion";

// React Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { setLgpdConsent } from "../context/main_context";

export default function Cookies_Banner() {
    const dispatch = useDispatch();

    const toggleCookiesButton = () => {
        dispatch(setLgpdConsent());
    };

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Cookies_Banner">
            <div className="Cookies_Banner_Header">
                <span className="material-icons">info</span>
                <h3 className="Cookies_Banner_Title">Política de Cookies</h3>
                <button className="Cookies_Banner_Close_Btn" onClick={toggleCookiesButton}>
                    <span className="material-icons">close</span>
                </button>
            </div>

            <div className="Cookies_Banner_Body">
                <p>Esse website utiliza cookies para garantir a funcionalidade da loja e aprimorar a experiência de uso.</p>

                <p>
                    Também utilizamos cookies para identificar a origem e tipos de interação com nossos visitantes. Mas não se preocupe, nenhum dado
                    pessoal crítico é coletado durante o uso deste site.
                </p>
                <p>Ao navegar neste site voce concorda com o uso destas tecnogias e com nosso termo de privacidade.</p>
                <p>
                    Para saber mais sobre como cuidamos da segurança de seus dados acesse a{" "}
                    <a className="CB_Link" href="#Privacy">
                        Aba de Privacidade.
                    </a>
                </p>
            </div>
        </m.div>
    );
}
