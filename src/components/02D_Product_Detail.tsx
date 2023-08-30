// Chocolate Type Import
import ProductType from "../types/00_Produto";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleProductDetails, toggleCart } from "../context/main_context";

//Framer Motion Imports
import { motion as m } from "framer-motion";

export default function ProductDetail() {
    const dispatch = useDispatch();

    const activeProduct = useSelector((state: any) => state.activeProduct);

    const closeDetailsButton = () => {
        console.log("Closing details");
        dispatch(toggleProductDetails());
    };

    const addToCartButton = (id, quantity) => {
        console.log("Adding to cart");
        dispatch(addToCart({ id, quantity }));
    };

    const getItemTotalQuantity = (cartItems: ProductType[], itemId: number): number => {
        let totalQuantity = 0;

        for (const item of cartItems) {
            if (item.id === itemId) {
                totalQuantity += item.cartQuantity;
            }
        }

        return totalQuantity;
    };

    const cartIsOpen = useSelector((state: any) => state.cartIsOpen);

    const cartItems = useSelector((state: any) => state.cartItems);
    const itemId = activeProduct.id;
    const itemTotalQuantity = getItemTotalQuantity(cartItems, itemId);

    const demoMessage = `Olá, eu gostaria de fazer uma solicitação de demonstração para o seguinte produto:\n\n${activeProduct.name}\n\n`;
    const demoPhoneNumber = "+5541999977955"; // Replace with your desired WhatsApp number

    const toggleFinishOrderButton = () => {
        const whatsappUrl = `https://wa.me/${demoPhoneNumber}/?text=${encodeURIComponent(demoMessage)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Product_Detail">
            <div className="Product_Detail_Header">
                <span className="material-icons">info</span>
                <h3 className="Product_Detail_Title">{activeProduct.name}</h3>
                <button className="Product_Detail_Close_Btn" onClick={closeDetailsButton}>
                    <span className="material-icons">close</span>
                </button>
            </div>
            <div className="Product_Detail_Content">
                <div className="Product_Detail_Image_Container">
                    <div className="Product_Detail_Image_Block" id="detail_image_01">
                        <a href="#detail_image_02" className="Product_Detail_Image_Next_Btn">
                            <span className="material-icons">east</span>
                        </a>
                        <img className="Product_Detail_Image" src={activeProduct.imgSrc[0]}></img>
                    </div>

                    <div className="Product_Detail_Image_Block" id="detail_image_02">
                        <a href="#detail_image_01" className="Product_Detail_Image_Previous_Btn">
                            <span className="material-icons">west</span>
                        </a>
                        <a href="#detail_image_03" className="Product_Detail_Image_Next_Btn">
                            <span className="material-icons">east</span>
                        </a>
                        <img className="Product_Detail_Image" src={activeProduct.imgSrc[0]}></img>
                    </div>

                    <div className="Product_Detail_Image_Block" id="detail_image_03">
                        <a href="#detail_image_01" className="Product_Detail_Image_Previous_Btn">
                            <span className="material-icons">west</span>
                        </a>
                        <img className="Product_Detail_Image" src={activeProduct.imgSrc[0]}></img>
                    </div>
                </div>
                <div className="Product_Detail_Text_Container">
                    <div className="Product_Detail_Text_Item">
                        <div className="Product_Detail_Text_Item_Header">
                            <h3 className="Product_Detail_Text_Item_Header_Title">Tipo do Produto</h3>
                        </div>
                        <div className="Product_Detail_Text_Item_Content">
                            <p className="Product_Detail_Text_Content">{activeProduct.type}</p>
                        </div>
                    </div>

                    <div className="Product_Detail_Text_Item">
                        <div className="Product_Detail_Text_Item_Header">
                            <h3 className="Product_Detail_Text_Item_Header_Title">Descrição</h3>
                        </div>
                        <div className="Product_Detail_Text_Item_Content">
                            <p className="Product_Detail_Text_Content">
                                <strong>{activeProduct.description}</strong>
                            </p>
                            <div className="Product_Detail_FullDescription">
                                {activeProduct.fullDescription.map((paragraph) => {
                                    return <p className="Product_Detail_Text_Content">{paragraph}</p>;
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="Product_Detail_Text_Item">
                        <div className="Product_Detail_Text_Item_Header">
                            <h3 className="Product_Detail_Text_Item_Header_Title">Componentes</h3>
                        </div>
                        <div className="Product_Detail_Text_Item_Content">
                            <p className="Product_Detail_Text_Content">
                                {activeProduct.components.map((component) => {
                                    return (
                                        <div className="Product_Component">
                                            <span className="material-icons">check</span>
                                            <p>{component.name}</p>
                                        </div>
                                    );
                                })}
                            </p>
                        </div>
                    </div>

                    <div className="Product_Detail_Text_Item">
                        <div className="Product_Detail_Text_Item_Header">
                            <h3 className="Product_Detail_Text_Item_Header_Title">Soluções</h3>
                        </div>
                        <div className="Product_Detail_Text_Item_Content">
                            <div className="Product_Detail_Solution_Container">
                                {activeProduct.solutions.map((solution: string) => {
                                    return <p className="Product_Detail_Solution">{solution}</p>;
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="Product_Detail_Text_Item">
                        <div className="Product_Detail_Text_Item_Header">
                            <h3 className="Product_Detail_Text_Item_Header_Title">Coordenadas de Origem</h3>
                        </div>
                        <div className="Product_Detail_Text_Item_Content">
                            <p className="Product_Detail_Text_Content">{activeProduct.productOriginCoordinates}</p>
                        </div>
                    </div>

                    <div className="Product_Detail_Text_Item">
                        <div className="Product_Detail_Text_Item_Header">
                            <h3 className="Product_Detail_Text_Item_Header_Title">Origem das Peças</h3>
                        </div>
                        <div className="Product_Detail_Text_Item_Content">
                            <p className="Product_Detail_Text_Content">{activeProduct.productOrigin}</p>
                        </div>
                    </div>

                    <div className="Product_Detail_Text_Item">
                        <div className="Product_Detail_Text_Item_Header">
                            <h3 className="Product_Detail_Text_Item_Header_Title">Produtor do Robô</h3>
                        </div>
                        <div className="Product_Detail_Text_Item_Content">
                            <p className="Product_Detail_Text_Content">{activeProduct.producerName}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Product_Detail_Footer">
                <button
                    className="Card_AddToCart_Button"
                    onClick={() => {
                        addToCartButton(activeProduct.id, 1);
                        if (!cartIsOpen) dispatch(toggleCart());
                    }}
                >
                    <div className="AddToCartLeft">
                        À partir de<h3 className="Card_Product_Price">R$ {activeProduct.buyPrice},00</h3>
                    </div>
                    <div className="AddToCartRight">Solicitar uma Cotação {itemTotalQuantity > 0 && `(${itemTotalQuantity})`}</div>
                </button>
                <button className="Card_ScheduleDemo_Button" onClick={toggleFinishOrderButton}>
                    Agendar Demonstração
                </button>
            </div>
        </m.div>
    );
}
