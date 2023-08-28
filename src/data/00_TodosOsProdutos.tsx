import ProductType from "../types/00_Produto"; // Import the Product interface

const TodosOsProdutos: ProductType[] = [
    {
        domId: "produto-00",

        id: 0,
        prename: "RobiOS",
        name: "GO",
        type: "Robô Autônomo Móvel",
        class: "robos",
        description: "Um robô capaz de se locomover de forma autônoma e inteligente.",
        bgImgSrc: "/robots_backgrounds/fundo_go.png",
        imgSrc: ["/robots_images/new5/01_go_crop.png", "/robots_images/go_fullsize.png"],

        buyPrice: 25000,
        rentPrice: 1250,
        cartQuantity: 0,

        producerName: "Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        sellerName: "Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        components:
            "Sensores de Navegação LIDAR, Sensores de Navegação Ultrasom, Tela de 11 Polegadas, Auto Falantes HiFi, Bateria com capacidade para 6 Horas.",
        solutions: ["Atendimento", "Publicidade", "Inspeção", "Transporte"],
    },

    {
        domId: "produto-01",

        id: 1,
        prename: "RobiOS",
        name: "INSPECTOR",
        type: "Robô Autônomo Móvel",
        class: "robos",
        description: "Um robô para a inspeção de ambientes, produtos e equipamentos.",
        bgImgSrc: "/robots_backgrounds/fundo_inspector.png",
        imgSrc: ["/robots_images/new5/02_inspector_crop.png", "/robots_images/inspector_fullsize.png"],

        buyPrice: 35000,
        rentPrice: 1750,
        cartQuantity: 0,

        producerName: "Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        sellerName: "Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        components:
            "Sensores de Navegação LIDAR, Sensores de Navegação Ultrasom, Tela de 11 Polegadas, Auto Falantes HiFi, Bateria com capacidade para 6 Horas.",
        solutions: ["Atendimento", "Publicidade", "Inspeção", "Transporte"],
    },

    {
        domId: "produto-02",

        id: 2,
        prename: "RobiOS",
        name: "CARGO",
        type: "Robô Autônomo Móvel",
        class: "robos",
        description: "Um robô para o transporte.",
        bgImgSrc: "/robots_backgrounds/fundo_cargo.png",
        imgSrc: ["/robots_images/new5/03_cargo_crop.png", "/robots_images/cargo_fullsize.png"],
        buyPrice: 25000,
        rentPrice: 1250,
        cartQuantity: 0,

        producerName: "Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        sellerName: "Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        components:
            "Sensores de Navegação LIDAR, Sensores de Navegação Ultrasom, Tela de 11 Polegadas, Auto Falantes HiFi, Bateria com capacidade para 6 Horas.",
        solutions: ["Atendimento", "Publicidade", "Inspeção", "Transporte"],
    },

    {
        domId: "produto-03",

        id: 3,
        prename: "",
        name: "RobiOS",
        type: "Sistema Operacional Robótico",
        class: "softwares",
        description:
            "Um sistema operacional robótico capaz de gerenciar e controlar robôs autônomos móveis, com uma interface gráfica intuitiva e de fácil utilização.",
        bgImgSrc: "/robots_backgrounds/fundo_avatar.png",
        imgSrc: ["/robots_images/new5/04_RobiOs.png"],
        buyPrice: 5000,
        rentPrice: 500,
        cartQuantity: 0,

        producerName: "Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        sellerName: "Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        components:
            "Sensores de Navegação LIDAR, Sensores de Navegação Ultrasom, Tela de 11 Polegadas, Auto Falantes HiFi, Bateria com capacidade para 6 Horas.",
        solutions: ["Atendimento", "Publicidade", "Inspeção", "Transporte"],
    },

    {
        domId: "produto-04",

        id: 4,
        prename: "RobiOS",
        name: "STUDIO",
        type: "Software de Personalização",
        class: "softwares",
        description: "Um software para personalizar as ações dos robôs e assistentes, com uma interface gráfica intuitiva e fácil de usar.",
        bgImgSrc: "/robots_backgrounds/fundo_avatar.png",
        imgSrc: ["/robots_images/new5/05_Studio.png"],
        buyPrice: 3500,
        rentPrice: 350,
        cartQuantity: 0,

        producerName: "Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        sellerName: "Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        components: "Software RobiOS Studio.",
        solutions: ["Atendimento", "Publicidade", "Inspeção", "Transporte"],
    },

    {
        domId: "produto-05",

        id: 5,
        prename: "RobiOS",
        name: "AVATAR",
        type: "Assistente Virtual Inteligente",
        class: "softwares",
        description: "Um software capaz de emular avatares virtuais que pode ser usado em qualquer dispositivo Android",
        bgImgSrc: "/robots_backgrounds/fundo_avatar.png",
        imgSrc: ["/robots_images/new5/06_Avatar.png"],
        buyPrice: 3500,
        rentPrice: 350,
        cartQuantity: 0,

        producerName: "Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        sellerName: "Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        components: "Software RobiOS.",
        solutions: ["Atendimento", "Publicidade", "Inspeção", "Transporte"],
    },
    {
        domId: "produto-06",

        id: 6,
        prename: "",
        name: "Customização",
        type: "Serviço Adicional",
        class: "servicos",

        description: "Customize o seu robô com a sua marca, com a sua identidade visual, com a sua cara. Nós podemos fazer isso para você.",
        bgImgSrc: "/robots_backgrounds/fundo_go.png",
        imgSrc: ["/robots_images/new5/07_Customizacao.png"],
        buyPrice: 5000,
        rentPrice: 500,
        cartQuantity: 0,

        producerName: "Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        sellerName: "Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        components: "Personalização de Robôs Autônomos Móveis, Personalização de Software, Personalização de Avatares Virtuais.",
        solutions: ["Atendimento", "Publicidade", "Inspeção", "Transporte"],
    },

    {
        domId: "produto-07",

        id: 7,
        prename: "",
        name: "Mapeamento de Ambientes",
        type: "Serviço Adicional",
        class: "servicos",

        description: "Mapeamos ambientes com LIDAR e os compilamos um arquivo digital.",
        bgImgSrc: "/robots_backgrounds/fundo_go.png",
        imgSrc: ["/robots_images/new5/08_Mapeamento.png"],
        buyPrice: 5000,
        rentPrice: 500,
        cartQuantity: 0,

        producerName: "Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        sellerName: "Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        components: "Mapeamento de Ambientes Internos, Mapeamento de Ambientes Externos.",
        solutions: ["Atendimento", "Publicidade", "Inspeção", "Transporte"],
    },

    {
        domId: "produto-08",

        id: 8,
        prename: "",
        name: "Treinamento e Suporte Técnico",
        type: "Serviço Adicional",
        class: "servicos",

        description: "Treinamos a sua equipe para que ela possa operar e personalizar o seu robô.",
        bgImgSrc: "/robots_backgrounds/fundo_go.png",
        imgSrc: ["/robots_images/new5/09_Treinamento.png"],
        buyPrice: 5000,
        rentPrice: 500,
        cartQuantity: 0,

        producerName: "Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        sellerName: "Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        components: "Treinamento de Operação, Treinamento de Manutenção, Suporte Técnico.",
        solutions: ["Atendimento", "Publicidade", "Inspeção", "Transporte"],
    },

    {
        domId: "produto-09",

        id: 9,
        prename: "",
        name: "Varejo",
        type: "Experiência",
        class: "experiencias",

        description: "Experiências para engajar o público e aprimorar sua linha de produção.",
        bgImgSrc: "/robots_backgrounds/fundo_go.png",
        imgSrc: ["/robots_images/new5/10_Varejo.png"],
        buyPrice: 5000,
        rentPrice: 500,
        cartQuantity: 0,

        producerName: "Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",
        sellerName: "Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",
        components: "Experiências publicitárias e operacionais.",
        solutions: ["Atendimento", "Publicidade", "Inspeção", "Transporte"],
    },

    {
        domId: "produto-10",

        id: 10,
        prename: "",
        name: "Indústria",
        type: "Experiência",
        class: "experiencias",

        description: "Experiências com o atendimento de demandas, inspeção e transporte de equipamento.",
        bgImgSrc: "/robots_backgrounds/fundo_go.png",
        imgSrc: ["/robots_images/new5/11_Industria.png"],
        buyPrice: 5000,
        rentPrice: 500,
        cartQuantity: 0,

        producerName: "Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        sellerName: "Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        components: "Experiências publicitárias e operacionais.",
        solutions: ["Atendimento", "Inspeção", "Transporte"],
    },

    {
        domId: "produto-11",

        id: 11,
        prename: "",
        name: "Cultura",
        type: "Experiência",
        class: "experiencias",

        description: "Experiências com foco em atendimentos humanizados e criativos.",
        bgImgSrc: "/robots_backgrounds/fundo_go.png",
        imgSrc: ["/robots_images/new5/12_Cultura.png"],
        buyPrice: 5000,
        rentPrice: 500,
        cartQuantity: 0,

        producerName: "Human Robotics",
        productOrigin: "Curitiba, Paraná, Brasil",
        productOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        sellerName: "Human Robotics",
        sellerOrigin: "Curitiba, Paraná, Brasil",
        sellerOriginCoordinates: "Latitude: -25.4284, Longitude: -49.2733",

        components: "Experiências publicitárias e operacionais.",
        solutions: ["Atendimento", "Publicidade"],
    },
];

export default TodosOsProdutos;
