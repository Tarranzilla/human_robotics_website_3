// Vanilla React Imports
import { forwardRef } from "react";

import backgroundImg from "../../assets/cacau_textures/dalle3.png";

import fotoOlivier from "../../assets/sobre/olivier.jpeg";
import fotoFranklin from "../../assets/sobre/franklin_link.jpeg";
import fotoGustavo from "../../assets/sobre/gustavo_da_paz.jpeg";
import fotoGustavo2 from "../../assets/sobre/gustavo_raposo.jpeg";
import fotoHelen from "../../assets/sobre/helen_almeida.jpeg";
import fotoIeda from "../../assets/sobre/ieda_ikuta.jpeg";
import fotoJean from "../../assets/sobre/jean_soares.jpeg";
import fotoKarla from "../../assets/sobre/karla_gomes.jpeg";
import fotoLarissa from "../../assets/sobre/larissa_felix.jpeg";
import fotoLeticia from "../../assets/sobre/leticia_rodrigues.jpeg";
import fotoLucas from "../../assets/sobre/lucas_costa.jpeg";
import fotoMarcos from "../../assets/sobre/marcos_graebin.jpeg";
import fotoMaria from "../../assets/sobre/maria_oliveira.jpeg";
import fotoOtoniel from "../../assets/sobre/otoniel_da_rocha.jpeg";
import fotoRenan from "../../assets/sobre/renan_felipe.jpeg";
import fotoRodrigo from "../../assets/sobre/rodrigo_zan.jpeg";
import fotoRonald from "../../assets/sobre/ronald_landaeta.jpeg";
import fotoSamuel from "../../assets/sobre/samuel_pizzato.jpeg";
import fotoVitor from "../../assets/sobre/vitor_hirozawa.jpeg";

const todasAsFotos = [
    fotoOlivier,
    fotoFranklin,
    fotoGustavo,
    fotoGustavo2,
    fotoHelen,
    fotoIeda,
    fotoJean,
    fotoKarla,
    fotoLarissa,
    fotoLeticia,
    fotoLucas,
    fotoMarcos,
    fotoMaria,
    fotoOtoniel,
    fotoRenan,
    fotoRodrigo,
    fotoRonald,
    fotoSamuel,
    fotoVitor,
];

const membrosDaEquipe = [
    {
        nome: "Olivier Smadja",
        cargo: "CEO",
        foto: fotoOlivier,
    },
    {
        nome: "Franklin Link",
        cargo: "Técnico em Mecatrônica",
        foto: fotoFranklin,
    },
    {
        nome: "Gustavo da Paz",
        cargo: "Design 3D e Gestão de Projetos",
        foto: fotoGustavo,
    },
    {
        nome: "Gustavo Raposo",
        cargo: "Desenvolvedor Mobile",
        foto: fotoGustavo2,
    },
    {
        nome: "Helen Almeida",
        cargo: "Assistente Administrativa",
        foto: fotoHelen,
    },
    {
        nome: "Ieda Ikuta",
        cargo: "Técnica em Eletrônica",
        foto: fotoIeda,
    },
    {
        nome: "Jean Soares",
        cargo: "Analista e Marketing Digital",
        foto: fotoJean,
    },
    {
        nome: "Karla Gomes",
        cargo: "Especialista em Tecnologia para Varejo",
        foto: fotoKarla,
    },
    {
        nome: "Larissa Felix",
        cargo: "Diretora de Marketing e Comunicação",
        foto: fotoLarissa,
    },
    {
        nome: "Leticia Rodrigues",
        cargo: "Estagiária de Garantia de Qualidade de Software",
        foto: fotoLeticia,
    },
    {
        nome: "Lucas Costa",
        cargo: "Desenvolvedor de Software",
        foto: fotoLucas,
    },
    {
        nome: "Marcos Graebin",
        cargo: "Desenvolvedor de Hardware",
        foto: fotoMarcos,
    },
    {
        nome: "Maria Oliveira",
        cargo: "Marketing",
        foto: fotoMaria,
    },
    {
        nome: "Otoniel da Rocha",
        cargo: "Diretor de Engenharia de Hardware e Operações",
        foto: fotoOtoniel,
    },
    {
        nome: "Renan Felipe",
        cargo: "Desenvolvedor de Software",
        foto: fotoRenan,
    },
    {
        nome: "Rodrigo Zan",
        cargo: "UX, UI e Designer de Produto",
        foto: fotoRodrigo,
    },
    {
        nome: "Ronald Landaeta",
        cargo: "Técnico Eletrônico",
        foto: fotoRonald,
    },
    {
        nome: "Samuel Pizzato",
        cargo: "Desenvolvedor de Software em Visão Computacional",
        foto: fotoSamuel,
    },
    {
        nome: "Vitor Hirozawa",
        cargo: "Desenvolvedor IoT",
        foto: fotoVitor,
    },
];

import fotoEquipe from "../../assets/sobre/Equipe_HR.png";

import fotoAlexandria from "../../assets/sobre/alexandria.webp";
import fotoAlexandria2 from "../../assets/sobre/alexandria_02.jpg";
import fotoDaVinci from "../../assets/sobre/davinci.jpg";

const LP_Section_02_Sobre = forwardRef(function LP_Section_02_Sobre(props, ref: any) {
    return (
        <div className="LP_Section LP_Section_02_Sobre" id="LP_Section_2" ref={ref} key={"LP_Section_2"}>
            <img src={backgroundImg} alt="background" className="Section_02_Background" />
            <div className="Sobre_Card_Container">
                {/* Sobre a Fundadora */}
                <div className="Sobre_Card" id="sobre_card_01">
                    <a href="#sobre_card_02" className="Sobre_Card_Next_Btn">
                        <span className="material-icons">east</span>
                    </a>
                    <div className="Sobre_Card_Header">
                        <h3 className="Sobre_Card_SubTitle">Sobre</h3>
                        <h2 className="Sobre_Card_Title">A Human Robotics</h2>
                    </div>
                    <div className="Sobre_Text_Container">
                        <p className="Kakaw_Header">
                            <strong>
                                Na Human Robotics, estamos empenhados em trazer para você robôs de qualidade excepcional, enquanto protegemos o meio
                                ambiente e promovemos o comércio justo.
                            </strong>
                        </p>
                        <img className="Sobre_Img WideImg" src={fotoEquipe}></img>
                        <p className="Kakaw_Description">
                            A história da Human Robotics começa em março de 2017, quando Olivier Smadja teve a ideia de criar um robô para cuidar de
                            pessoas idosas. Com o passar do tempo, porém, a ideia foi ganhando forma e se transformando em algo muito maior: uma linha
                            de robôs capazes de interagir com pessoas de todas as idades, em diferentes contextos e situações.
                        </p>
                        <p className="Kakaw_Description">
                            Foi assim que nasceu o primeiro robô autônomo de atendimento e telepresença do Brasil. Com a ajuda de Rodrigo, Otoniel ,
                            Leandro, Larissa e muitas outras pessoas* a equipe da Human Robotics cresceu e trabalhou incansavelmente para criar
                            assistentes virtuais que pudessem auxiliar pessoas em diversas áreas, desde a educação infantil até a assistência médica
                            remota.
                        </p>
                        <p className="Kakaw_Description">
                            Como uma empresa com valores criativos, éticos e sustentáveis, estamos comprometidos em fornecer a nossos clientes uma
                            experiência única e intuitiva. Desde os componentes cuidadosamente selecionados, até a produção quase artesanal em nossa
                            própria fábrica em Curitiba, cada etapa do processo é feita com paixão e responsabilidade.
                        </p>
                        <p className="Kakaw_Header">
                            A Human Robotics tem uma visão clara e ambiciosa para o futuro. Nossa meta é liderar a transformação tecnológica no
                            Brasil, sendo a vanguarda das tecnologias de atendimento, educação, interação, inspeção e transporte em bases robóticas.
                        </p>
                        <p className="Kakaw_Header">
                            A missão da Human Robotics é simples e ao mesmo tempo revolucionária: tornar a robótica mais humana, mais acessível e mais
                            presente na vida das pessoas. Com soluções inovadoras e uma equipe comprometida com a excelência, a empresa está mudando a
                            forma como interagimos com a tecnologia, tornando-a uma aliada poderosa em todas as áreas da vida.
                        </p>
                        <p className="Kakaw_Header">
                            Acreditamos que a tecnologia deve ser usada para servir as pessoas, os animais e o meio ambiente.
                        </p>

                        <p className="Kakaw_Header">
                            Valorizamos a diversidade e o respeito às diferenças entre as pessoas, promovendo a inclusão e a igualdade em todas as
                            nossas atividades.
                        </p>
                        <p className="Kakaw_Header">
                            Acreditamos na transparência e na ética em todas as nossas relações, sejam elas com clientes, colaboradores ou parceiros.
                        </p>
                        <p className="Kakaw_Header">
                            Encorajamos a criatividade e a inovação, estimulando a liberdade e a subjetividade dos pensamentos de todos os envolvidos
                            em nossas atividades.
                        </p>
                        <p className="Kakaw_Header">
                            Valorizamos o trabalho em equipe e a colaboração, acreditando que juntos podemos alcançar grandes feitos.
                        </p>
                        <p className="Kakaw_Header">
                            Comprometemo-nos com a excelência em todas as nossas atividades, sempre buscando aperfeiçoamento contínuo e a satisfação
                            dos clientes.
                        </p>
                        <p className="Kakaw_Header">
                            Somos movidos pelos desafios e pela busca por soluções inovadoras, sempre com foco na qualidade e eficiência.
                        </p>
                        <p className="Kakaw_Header">
                            Acreditamos que a tecnologia deve ser acessível a todos, e nos esforçamos para tornar a robótica cada vez mais disponível
                            e útil para a maioria dos brasileiros.
                        </p>

                        <p className="Kakaw_Header">
                            <strong>Junte-se a nós nesta jornada por uma transformação tecnológica mais humana!</strong>
                        </p>
                    </div>
                </div>

                {/* Sobre a Tropical Cacau */}
                <div className="Sobre_Card" id="sobre_card_02">
                    <a href="#sobre_card_01" className="Sobre_Card_Previous_Btn">
                        <span className="material-icons">west</span>
                    </a>
                    <a href="#sobre_card_03" className="Sobre_Card_Next_Btn">
                        <span className="material-icons">east</span>
                    </a>

                    <div className="Sobre_Card_Header">
                        <h3 className="Sobre_Card_SubTitle">Sobre</h3>
                        <h2 className="Sobre_Card_Title">A Fundação</h2>
                    </div>
                    <div className="Card_Content Sobre_Card_Content">
                        <div className="Sobre_Img_Container_Desktop Desktop_Only">
                            <img className="Sobre_Img" src={fotoOlivier}></img>
                        </div>

                        <div className="Sobre_Text_Container">
                            <p className="Kakaw_Header">
                                <strong>
                                    A Human Robotics é uma Startup Brasileira de Robótica e Inteligência Artificial criada pelo Engenheiro e
                                    Programador{" "}
                                    <a className="Link_Leticia" href="#Leticia_Guedes">
                                        Olivier Smadja
                                    </a>
                                    .
                                </strong>
                            </p>
                            <div className="Sobre_Img_Container Sobre_Mobile_Only">
                                <img className="Sobre_Img" src={fotoOlivier}></img>
                            </div>
                            <p className="Kakaw_Description">
                                "Inspirados na Subjetividade que a nossa Cultura tem a oferecer e na Precisão que nossas Tecnologias desbloqueiam,
                                buscamos confecionar robôs e experiências de forma pragmática por meio do uso de componentes sofisticados e
                                pesquisadores de campo habilitados."
                            </p>
                            <p className="Kakaw_Header">
                                Olivier é formado em engenharia da produção pela Universidade de Paris e possui especializações em programação e
                                robótica pela USP.
                            </p>
                            <p className="Kakaw_Description">
                                Após anos de experiência em engenharia e automação rodoviária, Olivier decidiu fundar a Human Robotics, uma empresa
                                que tem como objetivo oferecer as melhores experiências para seus clientes, ao mesmo tempo que promove a
                                responsabilidade social e ambiental em cada etapa da produção.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Histórias do Cacau */}
                <div className="Sobre_Card" id="sobre_card_03">
                    <a href="#sobre_card_02" className="Sobre_Card_Previous_Btn">
                        <span className="material-icons">west</span>
                    </a>
                    <a href="#sobre_card_04" className="Sobre_Card_Next_Btn">
                        <span className="material-icons">east</span>
                    </a>
                    <div className="Sobre_Card_Header">
                        <h3 className="Sobre_Card_SubTitle">Sobre</h3>
                        <h2 className="Sobre_Card_Title">História da Robótica</h2>
                    </div>
                    <div className="Sobre_Text_Container">
                        <p className="Kakaw_Header">
                            <strong>
                                Aristóteles, em sua obra Política de 322 a.C, especulou que autômatos poderiam, um dia, trazer a igualdade humana
                                tornando possível a abolição da escravidão:
                            </strong>
                        </p>
                        <p className="Kakaw_Description">
                            “Há apenas uma condição em que podemos imaginar gerentes não precisando de subordinados e mestres não precisando de
                            escravos. Esta condição seria que cada instrumento pudesse fazer seu próprio trabalho, à palavra de comando ou por
                            antecipação inteligente, como as estátuas de Dédalo ou os tripés feitos por Hefesto, dos quais Homero relata que "Por
                            movimento próprio, eles entraram na assembléia dos Deuses no Olimpo", como se um pente de tear pudesse tecer sozinho e um
                            plectro pudesse tocar harpa sozinho.”
                        </p>
                        <p className="Kakaw_Description">
                            No século IV a.C. , o matemático Arquitas de Tarento postulou um dos primei ros registros que temos sobre um autômato,
                            neste ele apresenta um pássaro mecânico que ele chamou de "O Pombo" , impulsionado a vapor.
                        </p>
                        <img className="Sobre_Img WideImg" src={fotoAlexandria}></img>
                        <p className="Kakaw_Header">
                            Quando os gregos controlaram o Egito, uma sucessão de engenheiros que podiam construir autômatos se estabeleceram em
                            Alexandria. A partir do polímata Ctesibius (285-222 a.C. ) , os engenheiros alexandrinos deixaram textos detalhando
                            autômatos viáveis alimentados por hidráulica ou vapor. Ctesibius construiu autômatos semelhantes a humanos, frequentemente
                            usados em cerimônias religiosas e no culto a deuses.
                        </p>
                        <img className="Sobre_Img WideImg" src={fotoAlexandria2}></img>
                        <p className="Kakaw_Description">
                            Um dos últimos grandes engenheiros alexandrinos, Heron de Alexandria (10-70 d.C. ) construiu um teatro de marionetes
                            autômatos, onde as figuras e os cenários se moviam por meios mecânicos. Ele descreveu a construção de tais autômatos em
                            seu tratado sobre pneumática. Os engenheiros de Alexandria construíram autômatos em reverência ao aparente domínio dos
                            humanos sobre a natureza e como ferramentas para os sacerdotes, mas também iniciaram uma tradição em que autômatos eram
                            construídos para o entretenimento de quem fosse rico o suficiente.
                        </p>
                        <p className="Kakaw_Header">
                            Entre as primeiras automações verificáveis está um humanoide desenhado por Leonardo da Vinci (1452-1519) em torno de 1495.
                            Os cadernos de Leonardo, redescobertos na década de 1950, contêm desenhos detalhados de um cavaleiro mecânico em armadura
                            que era capaz de sentar, acenar com os braços e mover a cabeça e a mandíbula.
                        </p>
                        <img className="Sobre_Img WideImg" src={fotoDaVinci}></img>
                        <p className="Kakaw_Description">
                            O desenvolvimento inicial dos robôs baseou-se no esforço de automatizar as operações industriais. Este esforço foi
                            bastante exarcebado no começou no século XVIII , dentro da indústria têxtil, com o aparecimento dos primeiros teares
                            mecânicos. Com o contínuo progresso da revolução industrial, as fábricas procuraram equipar-se com máquinas capazes de
                            realizar e reproduzir, automaticamente, determinadas tarefas.
                        </p>
                        <p className="Kakaw_Header">
                            Nos anos 1770, o suíço Pier re Jaquet-Droz criou autômatos móveis que pareciam crianças, o que encantou Mary Shelley, que
                            mais tarde escreveu Frankenstein: O Moderno Prometeu.
                        </p>
                        <p className="Kakaw_Description">
                            A tentativa final de automação foi O Turco de Wolfgang von Kempelen, uma máquina sofisticada que podia jogar xadrez contra
                            um oponente humano e percorreu a Europa. Quando a máquina foi levada para o Novo Mundo, ela levou Edgar Allan Poe a
                            escrever um ensaio, no qual ele concluiu que era impossível para dispositivos mecânicos raciocinar ou pensar.
                        </p>
                        <p className="Kakaw_Header">
                            Em 1898, Nikola Tesla demonstrou um submarino controlado remotamente no Madison Square Garden como "um autômato que,
                            deixado a si mesmo, agirá como se possuísse razão e sem nenhum controle voluntário do exterior".
                        </p>
                        <p className="Kakaw_Description">
                            Ele defendeu sua invenção cont ra repór teres críticos, argumentando que seus autômatos não eram "torpedos sem fio", mas
                            sim "homens mecânicos que farão o trabalho laborioso da raça humana".
                        </p>
                        <p className="Kakaw_Header">
                            O termo "robô" foi usado pela primeira vez em uma peça publicada pelo checo Karel Čapek em 1921. R.U.R. (Robôs Universais
                            de Rossum) era uma sátira, os robôs eram seres biológicos fabricados que realizavam todo o trabalho manual desagradável.
                            Segundo Čapek, a palavra foi criada por seu irmão Josef a partir da palavra checa robota 'corvée', ou em eslovaco '
                            trabalho' ou 'trabalho braçal '. (Karel Čapek trabalhava em sua peça durante sua estadia em Trenčianske Teplice, na
                            Eslováquia, onde seu pai trabalhava como médico. ) A peça R.U.R. substituiu o uso popular da palavra "autômato".
                        </p>
                        <p className="Kakaw_Description">
                            Em 1939, Konrad Zuse const ruiu o primeiro computador eletromecânico programável, lançando as bases para a construção de
                            uma máquina humanoide e interativa que hoje consideramos ser um robô.
                        </p>
                        <p className="Kakaw_Header">
                            Em 1941 e 1942, Isaac Asimov formulou as Três Leis da Robótica e, no processo, cunhou a palavra " robótica". Em 1945,
                            Vannevar Bush publicou Como Podemos Pensar, um ensaio que investigou o potencial do processamento eletrônico de dados. Ele
                            previu o surgimento de computadores, processadores de texto digital, reconhecimento de voz e tradução automática.
                        </p>
                        <p className="Kakaw_Description">
                            O primeiro robô móvel capaz de raciocinar sobre seu ambiente, Shakey, foi const ruído em 1970 pelo Stanford Research
                            Institute (agora SRI International ). Shakey combinava várias entradas de sensores, incluindo câmeras de TV, medidores de
                            distância a laser e "sensores de impacto" para navegar.
                        </p>
                        <p className="Kakaw_Description">
                            Em 1986, a Honda iniciou seu programa de pesquisa e desenvolvimento para criar robôs capazes de interagir com sucesso com
                            humanos. Um robô hexapodal chamado Genghis foi revelado pelo MIT em 1989. Genghis era famoso por ser feito rapidamente e
                            de forma barata devido a métodos de construção; Genghis usava 4 microprocessadores, 22 sensores e 12 motores servo.
                        </p>
                        <p className="Kakaw_Description">
                            O popular Roomba, um aspirador de pó robótico, foi lançado pela primeira vez em 2002 pela empresa iRobot. Robôs comerciais
                            e industriais estão agora em uso generalizado, executando trabalhos mais baratos ou com maior precisão e confiabilidade do
                            que os humanos. Eles também são empregados para tarefas que são muito sujas, perigosas ou monótonas para serem adequadas
                            para os humanos.
                        </p>
                        <p className="Kakaw_Description">
                            Nos últimos anos, houve um aumento no interesse pelo desenvolvimento de robôs com capacidades mais avançadas, como
                            inteligência artificial ( IA), aprendizado de máquina e processamento de linguagem natural.
                        </p>
                        <p className="Kakaw_Description">
                            Esses robôs são projetados para real izar tarefas que exigem habilidades cognitivas de nível mais elevado, como tomada de
                            decisão, resolução de problemas e adaptação a novas situações.
                        </p>
                        <p className="Kakaw_Description">
                            À medida que a tecnologia continua a evoluir, é certo que os robôs se tornarão cada vez mais sofisticados e capazes de
                            executar uma ampla gama de tarefas complexas. No entanto, também há preocupações sobre o impacto que os robôs terão na
                            força de trabalho e na economia.
                        </p>
                        <p className="Kakaw_Description">
                            Conforme os robôs se tornam mais avançados, eles podem substituir trabalhadores humanos em certas indústrias, o que poder
                            ia levar a perdas de emprego e agitação social . Será importante gerenciar cuidadosamente a integração de robôs na
                            sociedade para garantir que os benefícios sejam maximizados enquanto as consequências negativas sejam minimizadas.
                        </p>
                        <p className="Kakaw_Header">Mas como podemos definir usos éticos e humanos da tecnologia?</p>
                        <p className="Kakaw_Description">
                            Uma das idealizações para a Quinta Revolução Industrial, ou 5RI, abrange a noção de colaborações harmoniosas entre humanos
                            e máquinas, com um foco específico no bem-estar dos múltiplos atores de um ecossistema (ou seja, sociedade, empresas,
                            pessoas, animais, vegetais, minerais, etc… ).
                        </p>
                        <p className="Kakaw_Header">
                            Essa aceitação harmoniosa de colaborações entre humanos e máquinas distingue a 5IR da Quarta Revolução Industrial (4IR),
                            que se concentrou predominantemente em alcançar apenas eficiência, e por consequência lucro, usando tecnologia.
                        </p>
                        <p className="Kakaw_Header">
                            Dessa forma, a 5RI abre caminho para uma (r)evolução no pensamento e na alavancagem de colaborações entre humanos e
                            máquinas para um maior bem-estar da sociedade.
                        </p>
                    </div>
                </div>

                {/*O Cacau no Brasil */}
                <div className="Sobre_Card" id="sobre_card_04">
                    <a href="#sobre_card_03" className="Sobre_Card_Previous_Btn">
                        <span className="material-icons">west</span>
                    </a>
                    <a href="#sobre_card_05" className="Sobre_Card_Next_Btn">
                        <span className="material-icons">east</span>
                    </a>
                    <div className="Sobre_Card_Header">
                        <h3 className="Sobre_Card_SubTitle">Sobre</h3>
                        <h2 className="Sobre_Card_Title">A Robótica no Brasil</h2>
                    </div>
                    <div className="Sobre_Text_Container">
                        <p className="Kakaw_Header">
                            <strong>
                                A robótica poder ser uma força transformadora para a sociedade brasileira, ajudando a criar empregos de alta
                                qualidade, aumentando a eficiência e a produtividade, e melhorando a qualidade de vida das pessoas em todo o país.
                            </strong>
                        </p>
                        <p className="Kakaw_Header">
                            Para falar em robótica no Brasil é impossível não falar do setor onde essa pesquisa e seu desenvolvimento aconteceram de
                            forma intensa e pioneira, que é a pesquisa de robótica para águas profundas e ultra profundas, na prospecção e exploração
                            de petróleo na costa brasileira.
                        </p>
                        <p className="Kakaw_Description">
                            Quando, na década de 1980, a Petróleo Brasileiro S.A. - PETROBRAS, além de iniciar suas buscas por hidrocarbonetos na
                            Amazônia, passou a intensificar pesquisas e realizações positivas de descobertas de novas fontes de óleo na plataforma
                            cont inental brasileira, foi preciso entender, desenvolver pesquisas e dominar tecnologias relacionadas a águas profundas.
                        </p>
                        <p className="Kakaw_Description">
                            Dentro deste esforço foi criado o Laboratório de Robótica do Centro de Pesquisas Leopoldo Miguez de Mello - CENPES, da
                            PETROBRAS, onde realmente começou-se do início, trabalhando com manipuladores hidráulicos submarinos, depois com o
                            desenvolvimento de várias ferramentas, algumas tele operadas, e outros sistemas para intervenções especiais.
                        </p>
                        <p className="Kakaw_Description">
                            O robô G.I.R.I.N.O. 3 (Gabarito Interno Robotizado de Incidência Normal ao Oleoduto) é um robô desenvolvido pelo
                            Laboratório de Robótica da área de Tecnologia Submarina do Centro de Pesquisa da Petrobras, que visa procurar vias menos
                            arriscadas no processo de inspeção interna de dutos, cujos movimentos de deslocamento são gerados por energia hidráulica.
                            (PANTA, 2005).
                        </p>
                        <p className="Kakaw_Description">
                            O robô Chico Mendes 4 é um novo conceito de veículo híbrido, tele-operado, desenvolvido prioritariamente para atender as
                            demandas de pesquisa e monitoramento socioambientais na Amazônia, também pode ser considerado como uma alternativa de
                            locomoção para a região amazônica. Versátil, pouco invasivo, reconhece e se adapta aos diferentes tipos de cenários e
                            obstáculos ao longo de seus trajetos e missões – características fundamentais para mobilidade e acessibilidade na região.
                        </p>
                    </div>
                </div>

                {/* Propriedades do Cacau */}
                <div className="Sobre_Card" id="sobre_card_05">
                    <a href="#sobre_card_04" className="Sobre_Card_Previous_Btn">
                        <span className="material-icons">west</span>
                    </a>
                    <a href="#sobre_card_06" className="Sobre_Card_Next_Btn">
                        <span className="material-icons">east</span>
                    </a>
                    <div className="Sobre_Card_Header">
                        <h3 className="Sobre_Card_SubTitle">Sobre</h3>
                        <h2 className="Sobre_Card_Title">O Grande Desafio</h2>
                    </div>
                    <div className="Sobre_Text_Container">
                        <p className="Kakaw_Header">
                            <strong>
                                A Human Robotics acredita que a robótica é uma das mais importantes tecnologias para o futuro da humanidade. Através
                                da automação de tarefas repetitivas, onerosas e complexas, a robótica tem o poder de melhorar a qualidade de vida das
                                pessoas e liberá-las para realizar atividades mais criativas e significativas.
                            </strong>
                        </p>

                        <p className="Kakaw_Header">
                            No entanto, a robótica ainda é vista por muitos como uma tecnologia inacessível e cara, destinada apenas a experts de
                            grandes empresas e organizações governamentais. A Human Robotics está empenhada em mudar essa percepção, tornando a
                            robótica tão comum quanto os computadores pessoais e os smartphones a todas as pessoas no Brasil, independentemente de sua
                            posição econômica ou nível de conhecimento técnico.
                        </p>

                        <p className="Kakaw_Header">
                            Para alcançar esse objetivo, estamos desenvolvendo robôs acessíveis e fáceis de usar, que podem ser utilizados em uma
                            ampla variedade de aplicações e setores.
                        </p>
                    </div>
                </div>

                {/* Produção do Cacau */}
                <div className="Sobre_Card" id="sobre_card_06">
                    <a href="#sobre_card_05" className="Sobre_Card_Previous_Btn">
                        <span className="material-icons">west</span>
                    </a>
                    <a href="#sobre_card_07" className="Sobre_Card_Next_Btn">
                        <span className="material-icons">east</span>
                    </a>
                    <div className="Sobre_Card_Header">
                        <h3 className="Sobre_Card_SubTitle">Sobre</h3>
                        <h2 className="Sobre_Card_Title">Nossa Equipe</h2>
                    </div>
                    <div className="Sobre_Text_Container">
                        <p className="Kakaw_Header">
                            <strong>
                                Nossa Equipe é Multidisciplinar e conta com profissionais de diversas áreas, como Engenharia, Design, Administração e
                                Marketing. Sinta-se à vontade para entrar em contato com qualquer um de nós.
                            </strong>
                        </p>
                        <div className="Sobre_Member_Container">
                            {membrosDaEquipe.map((membro: any) => {
                                return (
                                    <div className="Sobre_Member_Card" key={membro.nome}>
                                        <div className="Sobre_Member_Image_Container">
                                            <img src={membro.foto} alt={membro.nome} className="Sobre_Member_Image" />
                                        </div>
                                        <div className="Sobre_Member_Text_Container">
                                            <h3 className="Sobre_Member_Name">{membro.nome}</h3>
                                            <p className="Sobre_Member_Description">{membro.cargo}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Parceiros */}
                <div className="Sobre_Card" id="sobre_card_07">
                    <a href="#sobre_card_06" className="Sobre_Card_Previous_Btn">
                        <span className="material-icons">west</span>
                    </a>
                    <div className="Sobre_Card_Header">
                        <h3 className="Sobre_Card_SubTitle">Sobre</h3>
                        <h2 className="Sobre_Card_Title">Nossos Parceiros</h2>
                    </div>
                    <div className="Sobre_Text_Container">
                        <p className="Kakaw_Header">
                            <strong>
                                Contamos com uma rede de parceiros que nos ajudam a levar tecnologia de ponta para você. Conheça um pouco mais sobre
                                eles:
                            </strong>
                        </p>
                        <p className="Kakaw_Description">
                            <strong>Parceiros de produção:</strong> Nossos parceiros de produção são laboratórios de eletrônica e robótica localizadas
                            nas cidades de Curitiba e São Paulo. Esses laboratórios são certificados pelo Instituto de Robótica do Brasil (IRB) e pelo
                            Conselho de Manejo Industrial (CMI), que garantem a sustentabilidade e qualidade da produção de hardwares.
                        </p>
                        <p className="Kakaw_Description">
                            <strong>Parceiros de distribuição:</strong> Nossos parceiros de distribuição são empresas que nos ajudam a levar nossos
                            produtos para todo o Brasil. Eles são responsáveis pela logística de entrega e pela comercialização dos produtos da Human
                            Robotics em suas lojas físicas e virtuais.
                        </p>
                        <p className="Kakaw_Description">
                            <strong>Parceiros de Assistência Técnica:</strong> Nossos parceiros de assistência técnica são capazes de oferecer
                            serviços de reparo, configuração e treinamento para o uso dos robôs.
                        </p>
                        <p className="Kakaw_Description">
                            <strong>Parceiros de reciclagem:</strong> Nossos parceiros de reciclagem são empresas que nos ajudam a reciclar as partes
                            eletrônicas e estruturais de nossos robôs, garantindo que nossos produtos causem menos danos ao meio ambiente.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default LP_Section_02_Sobre;
