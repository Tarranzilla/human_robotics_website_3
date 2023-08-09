//Framer Motion Imports
import { motion as m } from "framer-motion";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import {
    toggleMenu,
    setActiveProduct,
    toggleProductDetails,
    setActiveChocoClass,
    togglePrivacyPolicy,
    toggleTerms,
    toggleSiteMap,
    setMode,
    toggleCurrency,
    toggleLanguage,
} from "../context/main_context";

export default function Menu() {
    const dispatch = useDispatch();
    const productDetailsIsOpen = useSelector((state: any) => state.productDetailsIsOpen);
    const mode = useSelector((state: any) => state.mode);
    const currencyType = useSelector((state: any) => state.currencyType);
    const language = useSelector((state: any) => state.language);

    const toggleMenuButton = () => {
        dispatch(toggleMenu());
    };

    const toggleColorModeButton = () => {
        dispatch(setMode());
        // "light" || "dark"
    };

    const toggleProductDetailsButton = (chocoClass, productId) => {
        dispatch(toggleMenu());
        dispatch(setActiveChocoClass(chocoClass));
        dispatch(setActiveProduct({ id: productId }));
        if (!productDetailsIsOpen) {
            dispatch(toggleProductDetails());
        }
    };

    const togglePrivacyButton = () => {
        dispatch(togglePrivacyPolicy());
        dispatch(toggleMenu());
    };

    const toggleTermsButton = () => {
        dispatch(toggleTerms());
        dispatch(toggleMenu());
    };

    const toggleSiteMapButton = () => {
        dispatch(toggleSiteMap());
        dispatch(toggleMenu());
    };

    const toggleCurrencyButton = () => {
        dispatch(toggleCurrency());
    };

    const toggleLanguageButton = () => {
        dispatch(toggleLanguage());
    };

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Menu" key={"Menu"}>
            <div className="Menu_Header">
                <span className="material-icons">home</span>
                <p className="Menu_Title">Menu</p>
                <button className="Searchbar_Close_Btn Desktop_Only" onClick={toggleMenuButton}>
                    <span className="material-icons">close</span>
                </button>
                <span className="material-icons Mobile_Only">home</span>
            </div>
            <div className="Menu_List_Container">
                <div className="LP_Links_Container">
                    <div className="LP_Links_Header">
                        <a href="#LP_Section_1" className="Menu_Link" onClick={toggleMenuButton}>
                            <span className="material-icons LP_Links_Icon">flag_circle</span>
                            Início
                        </a>
                    </div>
                    <div className="LP_Links_Horizontal_Organizer">
                        <div className="LP_Links_Line_Container">
                            <div className="LP_Links_Line"></div>
                        </div>
                        <div className="LP_Links">
                            <a href="#LP_Section_2" className="Menu_Link" onClick={toggleMenuButton}>
                                Sobre
                            </a>
                            <div className="Product_Links_Container">
                                <div className="Product_Links_Header">
                                    <a href="#LP_Section_3" className="Menu_Link" onClick={toggleMenuButton}>
                                        Chocolates
                                    </a>
                                </div>
                                <div className="LP_Links_Horizontal_Organizer">
                                    <div className="LP_Links_Line_Container">
                                        <div className="LP_Links_Line"></div>
                                    </div>
                                    <div className="Product_Links">
                                        <a
                                            href="#chocolate-00"
                                            className="Menu_Link"
                                            onClick={() => {
                                                toggleProductDetailsButton("classico", 0);
                                            }}
                                        >
                                            Tropical 35%
                                        </a>
                                        <a
                                            href="#chocolate-01"
                                            className="Menu_Link"
                                            onClick={() => {
                                                toggleProductDetailsButton("classico", 1);
                                            }}
                                        >
                                            Tropical 60%
                                        </a>
                                        <a
                                            href="#chocolate-02"
                                            className="Menu_Link"
                                            onClick={() => {
                                                toggleProductDetailsButton("classico", 2);
                                            }}
                                        >
                                            Tropical 80%
                                        </a>
                                        <a
                                            href="#chocolate-03"
                                            className="Menu_Link"
                                            onClick={() => {
                                                toggleProductDetailsButton("especial", 3);
                                            }}
                                        >
                                            Tropical Branco
                                        </a>
                                        <a
                                            href="#chocolate-04"
                                            className="Menu_Link"
                                            onClick={() => {
                                                toggleProductDetailsButton("especial", 4);
                                            }}
                                        >
                                            Tropical Frutas
                                        </a>
                                        <a
                                            href="#chocolate-05"
                                            className="Menu_Link"
                                            onClick={() => {
                                                toggleProductDetailsButton("especial", 5);
                                            }}
                                        >
                                            Tropical Nozes
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <a href="#LP_Section_4" className="Menu_Link" onClick={toggleMenuButton}>
                                Contato
                            </a>
                        </div>
                    </div>
                </div>

                <div className="Secondary_Links">
                    <a href="#Privacidade" className="Menu_Link_Secondary" onClick={togglePrivacyButton}>
                        <span className="material-icons">privacy_tip</span>Privacidade
                    </a>
                    <a href="#Termos" className="Menu_Link_Secondary" onClick={toggleTermsButton}>
                        <span className="material-icons">assignment</span>
                        Termos
                    </a>
                    <a href="#Mapa do Site" className="Menu_Link_Secondary" onClick={toggleSiteMapButton}>
                        <span className="material-icons">map</span>Mapa do Site
                    </a>
                </div>

                <div className="Configurations">
                    <div className="Configurations_Header">
                        <span className="material-icons LP_Links_Icon">settings</span>
                        <p className="Menu_Link">Configurações</p>
                    </div>
                    <div className="LP_Links_Horizontal_Organizer Config_Organizer">
                        <div className="LP_Links_Line_Container">
                            <div className="LP_Links_Line"></div>
                        </div>
                        <div className="Configurations_Links">
                            <a href="#Idioma" className="Menu_Link Config_Link" onClick={toggleLanguageButton}>
                                Idioma: <span className={language === "pt-br" ? "Config_Option active" : "Config_Option"}>Português</span>
                                <span className={language === "en" ? "Config_Option active" : "Config_Option"}>English</span>
                            </a>
                            <a href="#Moeda" className="Menu_Link Config_Link" onClick={toggleCurrencyButton}>
                                Moeda: <span className={currencyType === "BRL" ? "Config_Option active" : "Config_Option"}>Real (R$)</span>{" "}
                                <span className={currencyType === "USD" ? "Config_Option active" : "Config_Option"}>Dollar (USD)</span>
                            </a>
                            <a href="#Cores" className="Menu_Link Config_Link" onClick={toggleColorModeButton}>
                                Modo de Cor: <span className={mode === "dark" ? "Config_Option active" : "Config_Option"}>Escuro</span>
                                <span className={mode === "light" ? "Config_Option active" : "Config_Option"}>Claro</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </m.div>
    );
}
