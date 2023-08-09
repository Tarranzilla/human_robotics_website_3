// Chocolate Type Import
import ChocolateType from "../types/Chocolate";

// Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { addToCart, toggleProductDetails, setActiveProduct } from "../context/main_context";

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

    const getItemTotalQuantity = (cartItems: ChocolateType[], itemId: number): number => {
        let totalQuantity = 0;

        for (const item of cartItems) {
            if (item.id === itemId) {
                totalQuantity += item.cartQuantity;
            }
        }

        return totalQuantity;
    };

    const cartItems = useSelector((state: any) => state.cartItems);
    const itemId = activeProduct.id;
    const itemTotalQuantity = getItemTotalQuantity(cartItems, itemId);

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
                        <img className="Product_Detail_Image" src={activeProduct.imgSrc}></img>
                    </div>

                    <div className="Product_Detail_Image_Block" id="detail_image_02">
                        <a href="#detail_image_01" className="Product_Detail_Image_Previous_Btn">
                            <span className="material-icons">west</span>
                        </a>
                        <a href="#detail_image_03" className="Product_Detail_Image_Next_Btn">
                            <span className="material-icons">east</span>
                        </a>
                        <img className="Product_Detail_Image" src={activeProduct.imgSrc}></img>
                    </div>

                    <div className="Product_Detail_Image_Block" id="detail_image_03">
                        <a href="#detail_image_01" className="Product_Detail_Image_Previous_Btn">
                            <span className="material-icons">west</span>
                        </a>
                        <img className="Product_Detail_Image" src={activeProduct.imgSrc}></img>
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
                            <p className="Product_Detail_Text_Content">{activeProduct.description}</p>
                        </div>
                    </div>

                    <div className="Product_Detail_Text_Item">
                        <div className="Product_Detail_Text_Item_Header">
                            <h3 className="Product_Detail_Text_Item_Header_Title">Coordenadas de Origem</h3>
                        </div>
                        <div className="Product_Detail_Text_Item_Content">
                            <p className="Product_Detail_Text_Content">{activeProduct.chocoOriginCoordinates}</p>
                        </div>
                    </div>

                    <div className="Product_Detail_Text_Item">
                        <div className="Product_Detail_Text_Item_Header">
                            <h3 className="Product_Detail_Text_Item_Header_Title">Origem do Cacau</h3>
                        </div>
                        <div className="Product_Detail_Text_Item_Content">
                            <p className="Product_Detail_Text_Content">{activeProduct.chocoOriginName}</p>
                        </div>
                    </div>

                    <div className="Product_Detail_Text_Item">
                        <div className="Product_Detail_Text_Item_Header">
                            <h3 className="Product_Detail_Text_Item_Header_Title">Produtor do Cacau</h3>
                        </div>
                        <div className="Product_Detail_Text_Item_Content">
                            <p className="Product_Detail_Text_Content">{activeProduct.chocoProducerName}</p>
                        </div>
                    </div>

                    <div className="Product_Detail_Text_Item">
                        <div className="Product_Detail_Text_Item_Header">
                            <h3 className="Product_Detail_Text_Item_Header_Title">Ingredientes</h3>
                        </div>
                        <div className="Product_Detail_Text_Item_Content">
                            <p className="Product_Detail_Text_Content">{activeProduct.ingredients}</p>
                        </div>
                    </div>

                    <div className="Product_Detail_Text_Item">
                        <div className="Product_Detail_Text_Item_Header">
                            <h3 className="Product_Detail_Text_Item_Header_Title">ChocoTags</h3>
                        </div>
                        <div className="Product_Detail_Text_Item_Content">
                            <p className="Product_Detail_Text_Content">{activeProduct.chocoClass}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Product_Detail_Footer">
                <button
                    className="Card_AddToCart_Button"
                    onClick={() => {
                        addToCartButton(activeProduct.id, 1);
                    }}
                >
                    <h3 className="Card_Product_Price">R$ {activeProduct.price},00</h3>Adicionar ao Carrinho{" "}
                    {itemTotalQuantity > 0 && `(${itemTotalQuantity})`}
                </button>
            </div>
        </m.div>
    );
}
