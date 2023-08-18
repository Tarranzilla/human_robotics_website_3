import SolutionType from "../types/01A_Solucao";

const TodasAsSolucoes: SolutionType[] = [
    {
        domId: "solucao-00",

        id: 0,
        name: "Atendimento",
        description:
            "Os robôs podem interagir com os clientes, fornecendo informações sobre produtos e ajudando a localizar itens específicos na loja. Ele pode até mesmo ajudar os clientes a fazer compras, oferecendo sugestões com base em suas preferências.",
        imgSrc: ["/robots_backgrounds/fundo_atendimento.png"],
        videoSrc: ["/videos/Atendimento.mp4"],
        relatedProducts: [0, 1, 2, 3, 4, 5],
    },

    {
        domId: "solucao-01",

        id: 1,
        name: "Publicidade",
        description:
            "Os robôs podem realizar atividades promocionais, como distribuir brindes e amostras de produtos, fornecer informações sobre os produtos e serviços e até mesmo realizar vendas diretas.",
        imgSrc: ["/robots_backgrounds/fundo_entrega.png"],
        videoSrc: ["/videos/Entrega.mp4"],
        relatedProducts: [0, 1, 2, 3, 4, 5],
    },

    {
        domId: "solucao-02",

        id: 2,
        name: "Inspeção",
        description:
            "Os robôs podem ser programados para inspecionar produtos e materiais em busca de defeitos ou irregularidades, usando o leitor de RFID e código de barras para identificar o produto e armazenar informações sobre a inspeção para análise posterior.",
        imgSrc: ["/robots_backgrounds/fundo_inspector.png"],
        videoSrc: ["/videos/Inspecao.mp4"],
        relatedProducts: [0, 1, 2, 3, 4, 5],
    },

    {
        domId: "solucao-03",

        id: 3,
        name: "Transporte",
        description:
            "Os robôs podem ser programados para entregar materiais e suprimentos em toda a fábrica, usando o leitor de RFID e código de barras para identificar a localização e a quantidade dos materiais a serem entregues.",
        imgSrc: ["/robots_backgrounds/fundo_cargo.png"],
        videoSrc: ["/videos/Transporte.mp4"],
        relatedProducts: [0, 1, 2, 3, 4, 5],
    },
];
