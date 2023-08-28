import SolutionType from "../types/01A_Solucao";

const TodasAsSolucoes: SolutionType[] = [
    {
        domId: "solucao-00",

        id: 0,
        name: "Atendimento",
        class: "atendimento",
        fullDescription:
            "Automatizar tarefas repetitivas e contínuas, permitindo que os funcionários se concentrem em atividades que exigem mais habilidade e criatividade. Disponibilizar robôs de guia que possam auxiliar as pessoas e fornecer informações e descrições precisas em ambientes públicos. Aumentar a segurança e a privacidade em pesquisas públicas, proporcionando soluções avançadas de reconhecimento facial e análise de dados.",
        description:
            "Interaja com os seus clientes como nunca antes, ofereça sugestões e informações personalizadas e em tempo real sobre produtos, como localização, preço e avaliações",
        imgSrc: ["/robots_backgrounds/fundo_atendimento.png"],
        videoSrc: ["/videos/01_Robios_Eventos_Desktop_720p.mp4"],
        relatedProducts: [0, 1, 2, 3, 4, 5],
        partners: [
            {
                name: "Unimed",
                imgSrc: "/partners/unimed.png",
                description: "https://robios.com.br/",
            },
            {
                name: "Carrefour",
                imgSrc: "/partners/carrefour.png",
                description: "https://robios.com.br/",
            },
            {
                name: "Shopping Mueller",
                imgSrc: "/partners/mueller.png",
                description: "https://robios.com.br/",
            },
        ],
    },

    {
        domId: "solucao-01",

        id: 1,
        name: "Publicidade",
        class: "publicidade",
        fullDescription:
            "Oferecer soluções de publicidade interativa durante eventos, permitindo a interação com potenciais clientes e coletando informações valiosas para análise de dados.",
        description:
            "Realize atividades promocionais, distribuia presentes e amostras, forneça informações sobre os produtos e serviços e até mesmo realize vendas diretas.",
        imgSrc: ["/robots_backgrounds/fundo_entrega.png"],
        videoSrc: ["/videos/02_Robios_Varejo_Desktop_QuickCuts_720p.mp4"],
        relatedProducts: [0, 1, 2, 3, 4, 5],
        partners: [
            {
                name: "Unimed",
                imgSrc: "/partners/unimed.png",
                description: "https://robios.com.br/",
            },
            {
                name: "Carrefour",
                imgSrc: "/partners/carrefour.png",
                description: "https://robios.com.br/",
            },
            {
                name: "Shopping Mueller",
                imgSrc: "/partners/mueller.png",
                description: "https://robios.com.br/",
            },
        ],
    },

    {
        domId: "solucao-02",

        id: 2,
        name: "Inspeção",
        class: "inspecao",
        fullDescription:
            "Realizar rondas e vistorias recorrentes em ambientes comerciais e industriais, proporcionando maior segurança e controle de qualidade.",
        description:
            "Inspecione ambientes, ferramentas e produtos em busca de defeitos ou irregularidades, usando tecnologias de ponta como LIDAR, RFID e código de barras para identificar o produto e armazenar informações sobre a inspeção para análise posterior.",
        imgSrc: ["/robots_backgrounds/fundo_inspector.png"],
        videoSrc: ["/videos/05_Video_Navegacao.mp4"],
        relatedProducts: [0, 1, 2, 3, 4, 5],
        partners: [
            {
                name: "Unimed",
                imgSrc: "/partners/unimed.png",
                description: "https://robios.com.br/",
            },
            {
                name: "Carrefour",
                imgSrc: "/partners/carrefour.png",
                description: "https://robios.com.br/",
            },
            {
                name: "Shopping Mueller",
                imgSrc: "/partners/mueller.png",
                description: "https://robios.com.br/",
            },
        ],
    },

    {
        domId: "solucao-03",

        id: 3,
        name: "Transporte",
        class: "transporte",
        fullDescription:
            "Oferecer soluções de transporte de pequenos objetos de um ponto a outro, permitindo a redução de custos e aumentando a eficiência operacional.",
        description:
            "Programe a entrega de materiais e suprimentos em todo seu ambiente de trabalho, tendo em mãos a localização e a quantidade dos produtos.",
        imgSrc: ["/robots_backgrounds/fundo_cargo.png"],
        videoSrc: ["/videos/Robios_Evento_Transporte_Atendimento.mp4"],
        relatedProducts: [0, 1, 2, 3, 4, 5],
        partners: [
            {
                name: "Unimed",
                imgSrc: "/partners/unimed.png",
                description: "https://robios.com.br/",
            },
            {
                name: "Carrefour",
                imgSrc: "/partners/carrefour.png",
                description: "https://robios.com.br/",
            },
            {
                name: "Shopping Mueller",
                imgSrc: "/partners/mueller.png",
                description: "https://robios.com.br/",
            },
        ],
    },
];

export default TodasAsSolucoes;
