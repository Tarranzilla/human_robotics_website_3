import SolutionType from "../types/01A_Solucao";

const TodasAsSolucoes: SolutionType[] = [
    {
        domId: "solucao-00",

        id: 0,
        name: "Atendimento",
        class: "atendimento",
        description:
            "Os robôs podem interagir com os clientes, fornecendo informações sobre produtos e ajudando a localizar itens específicos na loja. Ele pode até mesmo ajudar os clientes a fazer compras, oferecendo sugestões com base em suas preferências.",
        imgSrc: ["/robots_backgrounds/fundo_atendimento.png"],
        videoSrc: ["/videos/01_Robios_Eventos_Desktop_720p.mp4"],
        relatedProducts: [0, 1, 2, 3, 4, 5],
    },

    {
        domId: "solucao-01",

        id: 1,
        name: "Publicidade",
        class: "publicidade",
        description:
            "Os robôs podem realizar atividades promocionais, como distribuir brindes e amostras de produtos, fornecer informações sobre os produtos e serviços e até mesmo realizar vendas diretas.",
        imgSrc: ["/robots_backgrounds/fundo_entrega.png"],
        videoSrc: ["/videos/02_Robios_Varejo_Desktop_QuickCuts_720p.mp4"],
        relatedProducts: [0, 1, 2, 3, 4, 5],
    },

    {
        domId: "solucao-02",

        id: 2,
        name: "Inspeção",
        class: "inspecao",
        description:
            "Os robôs podem ser programados para inspecionar produtos e materiais em busca de defeitos ou irregularidades, usando o leitor de RFID e código de barras para identificar o produto e armazenar informações sobre a inspeção para análise posterior.",
        imgSrc: ["/robots_backgrounds/fundo_inspector.png"],
        videoSrc: ["/videos/05_Video_Navegacao.mp4"],
        relatedProducts: [0, 1, 2, 3, 4, 5],
    },

    {
        domId: "solucao-03",

        id: 3,
        name: "Transporte",
        class: "transporte",
        description:
            "Os robôs podem ser programados para entregar materiais e suprimentos em toda a fábrica, usando o leitor de RFID e código de barras para identificar a localização e a quantidade dos materiais a serem entregues.",
        imgSrc: ["/robots_backgrounds/fundo_cargo.png"],
        videoSrc: ["/videos/Robios_Evento_Transporte_Atendimento.mp4"],
        relatedProducts: [0, 1, 2, 3, 4, 5],
    },
];

export default TodasAsSolucoes;
