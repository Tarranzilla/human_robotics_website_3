// Vanilla React Imports
import { forwardRef } from "react";

import backgroundImg from "../../assets/cacau_textures/dalle3.png";
import fotoLeticia from "../../assets/sobre/chocolateria_confeiteira.webp";

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
                        <h2 className="Sobre_Card_Title">A Fundadora</h2>
                    </div>
                    <div className="Card_Content Sobre_Card_Content">
                        <div className="Sobre_Img_Container_Desktop Desktop_Only">
                            <img className="Sobre_Img" src={fotoLeticia}></img>
                        </div>

                        <div className="Sobre_Text_Container">
                            <p className="Kakaw_Header">
                                <strong>
                                    A Tropical Cacau é uma chocolateria Brasileira criada pela confeiteira e nutricionista{" "}
                                    <a className="Link_Leticia" href="#Leticia_Guedes">
                                        Letícia Guedes
                                    </a>
                                    .
                                </strong>
                            </p>
                            <div className="Sobre_Img_Container Sobre_Mobile_Only">
                                <img className="Sobre_Img" src={fotoLeticia}></img>
                            </div>
                            <p className="Kakaw_Description">
                                "Inspirada na tropicalidade que a nossa cultura tem a oferecer, busco confecionar sabores e experiências de forma
                                consciente por meio do uso de ingredientes sustentáveis, orgânicos e saborosos."
                            </p>
                            <p className="Kakaw_Header">
                                Letícia é formada em nutrição pela Universidade Federal do Paraná e confeiteira pela Escola de Confeitaria Diego
                                Lozano.
                            </p>
                            <p className="Kakaw_Description">
                                Após anos de experiência em confeitaria, Letícia decidiu fundar a Tropical Cacau, uma chocolateria que tem como
                                objetivo oferecer uma experiência única e deliciosa para seus clientes, ao mesmo tempo que promove a responsabilidade
                                social e ambiental em cada etapa da produção.
                            </p>
                        </div>
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
                        <h2 className="Sobre_Card_Title">A Tropical Cacau</h2>
                    </div>
                    <div className="Sobre_Text_Container">
                        <p className="Kakaw_Header">
                            <strong>
                                Na Tropical Cacau, estamos empenhados em trazer para você um chocolate de qualidade excepcional, enquanto protegemos o
                                meio ambiente e promovemos o comércio justo.
                            </strong>
                        </p>
                        <p className="Kakaw_Description">
                            Como uma empresa com valores éticos e sustentáveis, estamos comprometidos em fornecer a nossos clientes uma experiência
                            única e deliciosa. Desde o cacau cuidadosamente selecionado, até a produção artesanal em nossa própria fábrica em
                            Curitiba, cada etapa do processo é feita com paixão e responsabilidade.
                        </p>
                        <p className="Kakaw_Header">
                            Nossa missão é ser uma referência em chocolate de qualidade, inovação e responsabilidade social e ambiental. Nossa visão é
                            oferecer ao mundo o melhor chocolate brasileiro, baseado em uma cadeia produtiva justa e sustentável, que valorize o
                            trabalho humano e promova o desenvolvimento econômico e social.
                        </p>
                        <p className="Kakaw_Description">
                            Nosso compromisso com o comércio justo e sustentabilidade ambiental é refletido em nosso portfólio de produtos. Desde os
                            nossos Kits personalizados, passando por nossa linha de barras tradicionais até nossas assinaturas mensais de chocolates,
                            nós oferecemos uma variedade de opções que atendem as necessidades e expectativas dos nossos clientes.
                        </p>
                        <p className="Kakaw_Description">
                            Na Tropical Cacau, nosso objetivo é levar uma experiência única e deliciosa para nossos clientes, ao mesmo tempo que
                            promovemos a responsabilidade social e ambiental em cada etapa da produção.
                        </p>
                        <p className="Kakaw_Header">Junte-se a nós nesta jornada pelo chocolate brasileiro de qualidade, justo e sustentável.</p>
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
                        <h2 className="Sobre_Card_Title">Histórias do Cacau</h2>
                    </div>
                    <div className="Sobre_Text_Container">
                        <p className="Kakaw_Header">
                            <strong>O Cacau, uma planta nativa da região amazônica, é uma das culturas mais importantes e populares no mundo</strong>,
                            tendo uma história antiga e fascinante que inclui diversas lendas e mitos. Eis algumas de suas lendas na América do Norte,
                            Central e do Sul ...
                        </p>
                        <p className="Kakaw_Description">
                            <strong>América do Norte:</strong> Segundo a mitologia maia, Coração do Céu, a principal divindade, criou os seres humanos
                            utilizando vários materiais da natureza, incluindo o cacau, como um dos ingredientes essenciais.
                        </p>
                        <p className="Kakaw_Description">
                            <strong>América Central:</strong> De acordo com a lenda asteca, Quetzalcoatl, a serpente emplumada, foi a primeira a
                            trazer as sementes de cacau para a Terra do Jardim do Éden. Quetzalcoatl ensinou os humanos a arte da agricultura,
                            medicina e cultivo do cacau. Esta divindade não gostava de rituais de sacrifício humano e era amada pelas pessoas.
                        </p>
                        <p className="Kakaw_Description">
                            <strong>América do Sul (Peru):</strong> O deus das tempestades, Khuno, destruiu uma aldeia com chuva torrencial e granizo
                            porque seus habitantes derrubaram as árvores e atearam fogo na floresta para clarear a terra e cultivar alimentos. Quando
                            a tempestade acabou, os sobreviventes encontraram uma árvore de cacau, que se tornou um alimento essencial para eles e os
                            ajudou a viver em harmonia com a natureza.
                        </p>
                        <p className="Kakaw_Description">
                            <strong>América do Sul:</strong> Uma lenda dos Andes fala sobre um deus onipotente chamado Sibu que transferiu seus
                            poderes para outro deus, Sura, mas suas sementes foram comidas por uma terceira divindade, Jabaru. Jabaru foi morto por
                            Sura, que enterrou seu corpo no local onde estavam as sementes. Quando Sura voltou, encontrou um cacaueiro e um pé de
                            cabaça crescendo no local. Sibu ordenou que Jabaru preparasse uma bebida com as sementes do cacau, mas a bebida fez a
                            barriga de Jabaru inchar e explodir, deixando cair as sementes no chão. Sibu restaurou a vida de Sura e devolveu as
                            sementes, permitindo que humanos e animais nascessem e crescessem.
                        </p>
                        <p className="Kakaw_Header">
                            A história do cacau na América do Sul ainda inclui outros mitos e lendas, como a história de como os deuses teriam dado o
                            cacau como presente para os humanos, para que eles pudessem ter acesso à imortalidade. De acordo com essa história, o deus
                            Viracocha teria criado a primeira árvore de cacau e dado seus frutos aos homens, que aprenderam a prepará-los como bebida.
                            Ao consumir essa bebida, os humanos teriam adquirido poderes divinos e se tornado imortais.
                        </p>
                        <p className="Kakaw_Description">
                            Ao longo dos séculos, o cacau se tornou um ingrediente essencial na culinária e cultura de muitos países da América
                            Latina. Os Astecas e Maias usavam o cacau para fazer uma bebida quente e espumosa, chamada de "xocoatl", que era misturada
                            com especiarias e mel. Essa bebida era considerada sagrada e utilizada em rituais religiosos, e também era consumida como
                            um tônico energético.
                        </p>
                        <p className="Kakaw_Description">
                            Com a chegada dos europeus na América, o cacau foi introduzido na Europa e se tornou um produto de luxo e prestígio. Os
                            europeus descobriram que misturando açúcar com cacau, era possível fazer uma bebida ainda mais saborosa, e assim nasceu o
                            chocolate. A partir do século XVIII, o cultivo do cacau se espalhou por outras partes do mundo, como a África e a Ásia, e
                            o chocolate se tornou um produto popular e consumido em todo o mundo.
                        </p>
                        <p className="Kakaw_Description">
                            Hoje em dia, o cacau é um dos principais produtos agrícolas do mundo, e é cultivado em países como Gana, Costa do Marfim,
                            Indonésia e Brasil. O chocolate é um produto amplamente consumido em todo o mundo, em diferentes formas e variedades, e
                            continua a ser um símbolo de luxo, prazer e indulgência. A história do cacau é rica em mitos e lendas, e é uma prova da
                            importância que essa planta teve e ainda tem na cultura e na gastronomia de muitos países ao redor do mundo.
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
                        <h2 className="Sobre_Card_Title">O Cacau no Brasil</h2>
                    </div>
                    <div className="Sobre_Text_Container">
                        <p className="Kakaw_Header">
                            <strong>
                                O cacau tem uma longa história no Brasil, remontando a milhares de anos, quando as civilizações indígenas já o
                                consumiam.
                            </strong>{" "}
                            No entanto, foi somente durante o século XVIII que a cultura do cacau ganhou impulso significativo no país. Em meados do
                            século XIX, a Bahia se tornou o principal estado produtor de cacau, graças às condições climáticas favoráveis e ao solo
                            rico da região cacaueira.
                        </p>
                        <p className="Kakaw_Description">
                            Com a crescente demanda mundial por chocolate na virada do século XX, a produção de cacau no Brasil aumentou
                            substancialmente. A partir da década de 1930, o país se consolidou como o maior produtor mundial de cacau, impulsionado
                            principalmente pela produção de chocolate em grande escala por empresas brasileiras e internacionais.
                        </p>
                        <p className="Kakaw_Description">
                            No entanto, a década de 1980 trouxe desafios significativos para a indústria do cacau no Brasil. A propagação de uma
                            doença devastadora chamada vassoura-de-bruxa causou grandes perdas nas plantações de cacau e teve um impacto significativo
                            na produção. Além disso, a concorrência com outros países produtores e mudanças nos hábitos de consumo também afetaram o
                            setor.
                        </p>
                        <p className="Kakaw_Description">
                            A partir dos anos 2000, o Brasil começou a se recuperar dessa crise através de esforços de pesquisa e desenvolvimento de
                            variedades resistentes da planta. Novas áreas de cultivo foram exploradas em outros estados além da Bahia, como Pará e
                            Espírito Santo, diversificando a produção do país.
                        </p>
                        <p className="Kakaw_Description">
                            Atualmente, o Brasil continua sendo um dos principais produtores de cacau no mundo, embora a liderança tenha sido
                            compartilhada com outros países. O cultivo sustentável e a busca por práticas agrícolas responsáveis estão se tornando
                            cada vez mais relevantes para garantir a preservação do cacau brasileiro e o crescimento sustentável da indústria do
                            chocolate no país.
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
                        <h2 className="Sobre_Card_Title">Propriedades do Cacau</h2>
                    </div>
                    <div className="Sobre_Text_Container">
                        <p className="Kakaw_Header">
                            <strong>
                                O cacau, especialmente em sua forma não processada, oferece várias propriedades benéficas para o corpo humano, graças
                                à presença de compostos naturais.
                            </strong>
                        </p>
                        <p className="Kakaw_Description">Abaixo estão as principais propriedades e efeitos do cacau no corpo:</p>
                        <p className="Kakaw_Description">
                            <strong>Antioxidantes:</strong> O cacau é uma rica fonte de antioxidantes, incluindo flavonoides e polifenóis. Esses
                            antioxidantes ajudam a combater os radicais livres no corpo, reduzindo o estresse oxidativo e protegendo as células contra
                            danos, o que pode contribuir para a prevenção de doenças crônicas e o envelhecimento celular.
                        </p>
                        <p className="Kakaw_Description">
                            <strong>Efeitos cardiovasculares:</strong>O cacau tem propriedades que podem melhorar a saúde do coração. Os flavonoides
                            encontrados no cacau podem promover a dilatação dos vasos sanguíneos, melhorar a circulação e reduzir a pressão arterial.
                            Além disso, estudos sugerem que o consumo regular de cacau pode contribuir para a redução do colesterol LDL (colesterol
                            ruim) e aumentar o colesterol HDL (colesterol bom).
                        </p>
                        <p className="Kakaw_Description">
                            <strong>Estimulante e bem-estar: </strong>O cacau contém teobromina e cafeína em quantidades moderadas, substâncias
                            estimulantes que podem promover um aumento temporário de energia e melhorar o humor. Além disso, o cacau é associado à
                            liberação de endorfinas, neurotransmissores que podem gerar uma sensação de prazer e bem-estar.
                        </p>
                        <p className="Kakaw_Description">
                            <strong>Cognição e humor:</strong>
                            Algumas pesquisas sugerem que o cacau pode ter efeitos positivos na cognição e no humor. Os flavonoides presentes no cacau
                            podem melhorar o fluxo sanguíneo cerebral, o que pode aumentar a função cognitiva e a concentração. Além disso, o cacau
                            pode reduzir os sintomas de estresse e ansiedade, melhorando o humor.
                        </p>
                        <p className="Kakaw_Description">
                            <strong>Efeitos anti-inflamatórios:</strong>
                            Os antioxidantes encontrados no cacau também podem ter propriedades anti-inflamatórias. Eles podem ajudar a reduzir a
                            inflamação no corpo, contribuindo para a prevenção de doenças inflamatórias crônicas, como a artrite reumatoide e algumas
                            doenças cardiovasculares.
                        </p>
                        <p className="Kakaw_Description">
                            É importante lembrar que esses efeitos benéficos estão associados ao consumo moderado de cacau e preferencialmente em sua
                            forma menos processada, como o chocolate amargo com alto teor de cacau ou o cacau em pó natural. O consumo excessivo de
                            produtos de chocolate altamente açucarados e processados pode anular esses benefícios e até mesmo ser prejudicial à saúde.
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
                        <h2 className="Sobre_Card_Title">Produção do Cacau</h2>
                    </div>
                    <div className="Sobre_Text_Container">
                        <p className="Kakaw_Header">
                            <strong>
                                O ciclo sazonal da plantação e do crescimento do cacau segue um padrão bem definido, com quatro principais etapas:
                            </strong>
                        </p>
                        <p className="Kakaw_Description">
                            <strong>Florada:</strong> O ciclo começa com a florada, que geralmente ocorre entre novembro e janeiro, período em que as
                            árvores de cacau florescem. As pequenas flores são de coloração branca e nascem diretamente no tronco e nos galhos mais
                            velhos das árvores.
                        </p>
                        <p className="Kakaw_Description">
                            <strong>Frutificação:</strong> Após a polinização cruzada, as flores dão lugar às frutas do cacau, conhecidas como
                            "cápsulas" ou "cabruca". Essas cápsulas têm formato oval e contêm diversas sementes envolvidas por uma polpa adocicada. O
                            processo de frutificação começa cerca de 5 a 7 meses após a florada, geralmente a partir de maio ou junho.
                        </p>
                        <p className="Kakaw_Description">
                            <strong>Colheita:</strong>A colheita das cápsulas de cacau acontece de forma manual e é um processo trabalhoso. Ela é
                            realizada ao longo de vários meses, uma vez que as cápsulas não amadurecem todas ao mesmo tempo. Os agricultores colhem as
                            cápsulas maduras e, ao mesmo tempo, fazem a poda das árvores para garantir um melhor crescimento futuro.
                        </p>
                        <p className="Kakaw_Description">
                            <strong>Pós-colheita e secagem:</strong>
                            Após a colheita, as cápsulas são abertas e as sementes de cacau (amêndoas) são retiradas. As amêndoas, ainda envoltas em
                            uma polpa mucilaginosa, são deixadas para fermentar por alguns dias em caixotes ou cestos cobertos. Em seguida, as
                            amêndoas são espalhadas para secar ao sol, processo que pode levar de uma a duas semanas. A secagem é uma etapa essencial
                            para evitar a formação de fungos e garantir a qualidade do cacau.
                        </p>

                        <p className="Kakaw_Description">
                            Completado o ciclo sazonal, o cacau está pronto para ser comercializado e processado. As amêndoas de cacau serão
                            transformadas em produtos como o cacau em pó, a manteiga de cacau e, é claro, o tão apreciado chocolate. Esse ciclo se
                            repete anualmente, com as árvores de cacau produzindo frutos por várias décadas, desde que cuidadas adequadamente pelos
                            agricultores.
                        </p>

                        <p className="Kakaw_Header">
                            Os produtos da Tropical Cacau são produzidos com base em práticas sustentáveis, desde a plantação do cacau até a
                            fabricação do chocolate. O ciclo de vida desses produtos é dividido em três fases: produção, uso e descarte.
                        </p>
                        <p className="Kakaw_Description">
                            Produção: Durante a fase de produção, a Tropical Cacau se preocupa em utilizar técnicas que minimizem o impacto ambiental,
                            como o uso de insumos orgânicos e o respeito às leis trabalhistas. Além disso, a empresa promove a preservação das
                            florestas e do habitat natural dos animais, realizando um manejo florestal responsável em suas fazendas produtoras de
                            cacau..
                        </p>
                        <p className="Kakaw_Description">
                            Uso: Durante a fase de uso, a Tropical Cacau incentiva o consumo consciente, promovendo a educação sobre a importância da
                            sustentabilidade e do respeito ao meio ambiente. Os produtos são embalados de forma a minimizar a utilização de plástico e
                            outros materiais que causem danos ambientais, além de serem oferecidos em embalagens reutilizáveis e/ou recicláveis.
                        </p>
                        <p className="Kakaw_Description">
                            Descarte: Durante a fase de descarte, a Tropical Cacau promove a reciclagem e o correto descarte das embalagens, além de
                            buscar formas de reutilização dos resíduos gerados na produção do chocolate, como a utilização de cascas de cacau na
                            fabricação de adubo orgânico. A empresa também se preocupa em apoiar projetos de recuperação ambiental e social em suas
                            comunidades.
                        </p>
                        <p className="Kakaw_Description">
                            Em resumo, a Tropical Cacau busca seguir práticas sustentáveis em todas as fases do ciclo de vida de seus produtos, desde
                            a produção até o descarte, visando a preservação do meio ambiente e o desenvolvimento sustentável.
                        </p>
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
                            <strong>Contamos com uma rede de parceiros que nos ajudam a levar o melhor do cacau para você.</strong> Conheça um pouco
                            mais sobre eles:
                        </p>
                        <p className="Kakaw_Description">
                            <strong>Parceiros de produção:</strong> Nossos parceiros de produção são fazendas de cacau localizadas na região sul da
                            Bahia que seguem práticas sustentáveis e respeitam as leis trabalhistas. Essas fazendas são certificadas pelo Instituto de
                            Manejo e Certificação Florestal e Agrícola (IMAFLORA) e pelo Conselho de Manejo Florestal (FSC), que garantem a
                            sustentabilidade da produção de cacau.
                        </p>
                        <p className="Kakaw_Description">
                            <strong>Parceiros de distribuição:</strong> Nossos parceiros de distribuição são empresas que nos ajudam a levar nossos
                            produtos para todo o Brasil. Eles são responsáveis pela logística de entrega e pela comercialização dos produtos da
                            Tropical Cacau em suas lojas físicas e virtuais.
                        </p>
                        <p className="Kakaw_Description">
                            <strong>Parceiros de reciclagem:</strong> Nossos parceiros de reciclagem são empresas que nos ajudam a reciclar as
                            embalagens dos nossos produtos. Eles são responsáveis pela coleta e reciclagem das embalagens, garantindo que elas não
                            causem danos ao meio ambiente.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default LP_Section_02_Sobre;
