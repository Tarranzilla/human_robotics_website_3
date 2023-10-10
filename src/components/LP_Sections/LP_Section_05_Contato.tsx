// Vanilla React Imports
import { forwardRef, useState } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence } from "framer-motion";

//Bg Image Import
import backgroundImg from "../../assets/cacau_textures/dalle4.png";

//Icon imports
import Icon_Whatsapp from "../Icons/Icon_Whatsapp";
import Icon_Instagram from "../Icons/Icon_Instagram";
import Icon_Facebook from "../Icons/Icon_Facebook";
import Icon_Twitter from "../Icons/Icon_Twitter";
import Icon_Linkedin from "../Icons/Icon_Linkedin";
import Icon_Youtube from "../Icons/Icon_Youtube";

const LP_Section_05_Contato = forwardRef(function LP_Section_05_Contato(props, ref: any) {
    const [map1isOpen, setMap1isOpen] = useState(false);
    const [map2isOpen, setMap2isOpen] = useState(false);

    const toggleMap1 = () => {
        setMap1isOpen(!map1isOpen);
    };

    const toggleMap2 = () => {
        setMap2isOpen(!map2isOpen);
    };

    return (
        <div className="LP_Section LP_Section_04_Contato" id="LP_Section_5" ref={ref} key={"LP_Section_5"}>
            <div className="Section_04_Background"></div>
            <AnimatePresence>
                {map1isOpen && (
                    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Mapa_Container Mapa_1">
                        <div className="Mapa_Header">
                            <span className="material-icons">info</span>
                            <h3 className="Mapa_Title">Mapa para o Escritório</h3>
                            <button className="Mapa_Close_Btn" onClick={toggleMap1}>
                                <span className="material-icons">close</span>
                            </button>
                        </div>
                        <div className="Mapa_Body">
                            <iframe
                                className="Mapa_Iframe"
                                title="Google Maps"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDyXfuRSunXyy-YO9HSag0AFrMJexBPcZA&q=Curitiba`}
                                allowFullScreen
                            ></iframe>
                        </div>
                    </m.div>
                )}

                {map2isOpen && (
                    <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Mapa_Container Mapa_2">
                        <div className="Mapa_Header">
                            <span className="material-icons">info</span>
                            <h3 className="Mapa_Title">Mapa para o Laboratório</h3>
                            <button className="Mapa_Close_Btn" onClick={toggleMap2}>
                                <span className="material-icons">close</span>
                            </button>
                        </div>
                        <div className="Mapa_Body">
                            <iframe
                                className="Mapa_Iframe"
                                title="Google Maps"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDyXfuRSunXyy-YO9HSag0AFrMJexBPcZA&q=Curitiba`}
                                allowFullScreen
                            ></iframe>
                        </div>
                    </m.div>
                )}
            </AnimatePresence>

            <div className="Conteudo_Chamada">
                <h3 className="Chamada_Contato">Sinta-se a vontade para entrar em contato!</h3>
                <h3 className="Chamada_Contato">
                    Estamos de prontidão para responder suas dúvidas, realizar suporte técnico e encomendar robôs personalizados.
                </h3>
            </div>

            <div className="Conteudo_Contato">
                <div className="Info_Contato">
                    <div className="Info_Contato_Item">
                        <h3>Telefone:</h3>
                        <p className="Info_Contato_Item_Detail">+55 (41) 999 999 999</p>
                    </div>

                    <div className="Info_Contato_Item">
                        <h3>Email:</h3> <p className="Info_Contato_Item_Detail">contato@humanrobotics.com.br</p>
                    </div>

                    <div className="Info_Contato_Item">
                        <h3>Escritório:</h3>{" "}
                        <p className="Info_Contato_Item_Detail">
                            Curitiba, Paraná, Brasil.{" "}
                            <button className="Contato_Location_Button" onClick={toggleMap1}>
                                <span className="material-icons">map</span>Ver Mapa
                            </button>
                        </p>
                    </div>

                    <div className="Info_Contato_Item">
                        <h3>Laboratório:</h3>
                        <p className="Info_Contato_Item_Detail">
                            Curitiba, Paraná, Brasil.{" "}
                            <button className="Contato_Location_Button" onClick={toggleMap2}>
                                {" "}
                                <span className="material-icons">map</span>Ver Mapa
                            </button>
                        </p>
                    </div>
                </div>

                <div className="Acoes_Contato">
                    <a className="Acao_Contato" href="mailto:recipient@example.com">
                        Enviar Email
                    </a>
                    <a className="Acao_Contato" href="https://api.whatsapp.com/send?phone=5541999977955&text=Ol%C3%A1" target="_blank">
                        Enviar Mensagem por WhatsApp
                    </a>
                    <a className="Acao_Contato" href="https://api.whatsapp.com/send?phone=5541999977955&text=Ol%C3%A1" target="_blank">
                        Inscreva-se na Newsletter
                    </a>
                </div>

                <div className="Social_Media_Container Secondary_Media_Container">
                    <Icon_Whatsapp />
                    <Icon_Linkedin />
                    <Icon_Facebook />
                    <Icon_Instagram />
                    <Icon_Youtube />
                </div>
            </div>
        </div>
    );
});

export default LP_Section_05_Contato;
