import { useState } from "react";
import { nanoid } from "nanoid";

import exp_activa_id from "../../assets/experiencia/exp_activa_id.png";
import exp_bioos from "../../assets/experiencia/exp_bioos.png";
import exp_caixa from "../../assets/experiencia/exp_caixa.png";
import exp_cajuru from "../../assets/experiencia/exp_cajuru.png";
import epx_condor from "../../assets/experiencia/exp_condor.png";
import exp_inno from "../../assets/experiencia/exp_inno.png";
import exp_lab from "../../assets/experiencia/exp_lab.png";
import exp_montagem from "../../assets/experiencia/exp_montagem.png";
import exp_novo from "../../assets/experiencia/exp_novo.png";
import exp_pipefy_1 from "../../assets/experiencia/exp_pipefy_1.png";
import exp_pipefy_2 from "../../assets/experiencia/exp_pipefy_2.png";
import exp_shopping from "../../assets/experiencia/exp_shopping.png";
import exp_teatro from "../../assets/experiencia/exp_teatro.png";
import exp_terca_da_terra from "../../assets/experiencia/exp_terca_da_terra.png";
import exp_topmed from "../../assets/experiencia/exp_topmed.png";
import exp_valedopinhao from "../../assets/experiencia/exp_valedopinhao.png";
import exp_varejo from "../../assets/experiencia/exp_varejo.png";

const baseExperiencias = [
    { id: nanoid(), text: "Activa Id", description: "Campanha de Marketing", image: exp_activa_id },
    { id: nanoid(), text: "Bioos", description: "Campanha de Marketing", image: exp_bioos },
    { id: nanoid(), text: "Caixa", description: "Campanha de Marketing", image: exp_caixa },
    { id: nanoid(), text: "Cajuru", description: "Campanha de Marketing", image: exp_cajuru },
    { id: nanoid(), text: "Condor", description: "Campanha de Marketing", image: epx_condor },
    { id: nanoid(), text: "Inno", description: "Campanha de Marketing", image: exp_inno },
    { id: nanoid(), text: "Lab", description: "Campanha de Marketing", image: exp_lab },
    { id: nanoid(), text: "Montagem", description: "Campanha de Marketing", image: exp_montagem },
    { id: nanoid(), text: "Novo", description: "Campanha de Marketing", image: exp_novo },
    { id: nanoid(), text: "Pipefy 1", description: "Campanha de Marketing", image: exp_pipefy_1 },
    { id: nanoid(), text: "Pipefy 2", description: "Campanha de Marketing", image: exp_pipefy_2 },
    { id: nanoid(), text: "Shopping", description: "Campanha de Marketing", image: exp_shopping },
    { id: nanoid(), text: "Teatro", description: "Campanha de Marketing", image: exp_teatro },
    { id: nanoid(), text: "Terça da Terra", description: "Campanha de Marketing", image: exp_terca_da_terra },
    { id: nanoid(), text: "Topmed", description: "Campanha de Marketing", image: exp_topmed },
    { id: nanoid(), text: "Vale do Pinhão", description: "Campanha de Marketing", image: exp_valedopinhao },
    { id: nanoid(), text: "Varejo", description: "Campanha de Marketing", image: exp_varejo },
];

const CardContainer_Experiencias = () => {
    const [cards] = useState(baseExperiencias);

    return (
        <div className="card_carroussel carroussel_experiencias">
            <div className="card_carroussel_track track_experiencias">
                {cards.map((card) => (
                    <div key={card.id} className="carroussel_card experiencia_card">
                        <div className="carroussel_card_content">
                            <p>{card.text}</p>
                            <p>{card.description}</p>
                        </div>
                        <img src={card.image} alt={card.text} />
                    </div>
                ))}
                {cards.map((card) => (
                    <div key={`${card.id}B`} className="carroussel_card experiencia_card">
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

export default CardContainer_Experiencias;
