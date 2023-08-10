import { useState } from "react";
import { nanoid } from "nanoid";

import tresM from "../../assets/parceiros/3M.webp";
import ambev from "../../assets/parceiros/ambev.webp";
import brmalls from "../../assets/parceiros/brmalls.webp";
import cajuru from "../../assets/parceiros/cajuru_2.png";
import ebanx from "../../assets/parceiros/ebanx.webp";
import finep from "../../assets/parceiros/finep.webp";
import nivea from "../../assets/parceiros/nivea.png";
import ntu from "../../assets/parceiros/ntu.webp";
import sao_cristovao from "../../assets/parceiros/sao_cristovao.webp";
import sebrae from "../../assets/parceiros/sebrae.webp";
import tercadaterra from "../../assets/parceiros/tercadaterra.webp";
import unimed from "../../assets/parceiros/unimed.webp";

const baseParceiros = [
    { id: nanoid(), text: "3M", description: "Campanha de Marketing", image: tresM },
    { id: nanoid(), text: "Ambev", description: "Campanha de Marketing", image: ambev },
    { id: nanoid(), text: "BRMalls", description: "Campanha de Marketing", image: brmalls },
    { id: nanoid(), text: "Cajuru", description: "Campanha de Marketing", image: cajuru },
    { id: nanoid(), text: "Ebanx", description: "Campanha de Marketing", image: ebanx },
    { id: nanoid(), text: "Finep", description: "Campanha de Marketing", image: finep },
    { id: nanoid(), text: "Nivea", description: "Campanha de Marketing", image: nivea },
    { id: nanoid(), text: "NTU", description: "Campanha de Marketing", image: ntu },
    { id: nanoid(), text: "São Cristovão", description: "Campanha de Marketing", image: sao_cristovao },
    { id: nanoid(), text: "Sebrae", description: "Campanha de Marketing", image: sebrae },
    { id: nanoid(), text: "TercadaTerra", description: "Campanha de Marketing", image: tercadaterra },
    { id: nanoid(), text: "Unimed", description: "Campanha de Marketing", image: unimed },
];

const CardContainer_Parceiros = () => {
    const [cards] = useState(baseParceiros);

    return (
        <div className="card_carroussel">
            <div className="card_carroussel_track track_parceiros">
                {cards.map((card) => (
                    <div key={`${card.id}C`} className="carroussel_card">
                        <div className="carroussel_card_content">
                            <p>{card.text}</p>
                            <p>{card.description}</p>
                        </div>
                        <img src={card.image} alt={card.text} />
                    </div>
                ))}
                {cards.map((card) => (
                    <div key={`${card.id}D`} className="carroussel_card">
                        <div className="carroussel_card_content">
                            <p>{card.text}</p>
                            <p>{card.description}</p>
                        </div>
                        <img src={card.image} alt={card.text} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardContainer_Parceiros;
