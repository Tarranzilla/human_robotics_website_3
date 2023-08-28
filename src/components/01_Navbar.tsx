// Vanilla React Imports
import { useEffect } from "react";

// React Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, toggleCart, toggleSearch, setMode, toggleProductDetails } from "../context/main_context";

//Framer Motion Imports
import { motion as m } from "framer-motion";

// Tropical Icon Component Import
import TropicalIcon from "./Icons/Icon_TropicalCacau";
import HumanRoboticsIcon from "./Icons/Icon_HumanRobotics";

export default function Navbar() {
    const dispatch = useDispatch();
    const activeSection = useSelector((state: any) => state.activeSection);
    const menuIsOpen = useSelector((state: any) => state.menuIsOpen);
    const cartIsOpen = useSelector((state: any) => state.cartIsOpen);
    const searchIsOpen = useSelector((state: any) => state.searchIsOpen);
    const colorMode = useSelector((state: any) => state.mode);
    const productDetailsIsOpen = useSelector((state: any) => state.productDetailsIsOpen);

    const cartItems = useSelector((state: any) => state.cartItems);
    const cartItemsCount = cartItems.length;

    const toggleColorMode = () => {
        const body = document.body;
        if (body) {
            body.classList.toggle("darkmode");
            dispatch(setMode());
        }
    };

    const toggleMenuButton = () => {
        const menuButton = document.querySelector(".Navbar_Menu_Button");
        if (menuButton) {
            dispatch(toggleMenu());
        }
    };

    const toggleCartButton = () => {
        const cartButton = document.querySelector(".Navbar_Tools_Cart");
        if (cartButton) {
            dispatch(toggleCart());
        }
    };

    const toggleSearchButton = () => {
        const searchButton = document.querySelector(".Navbar_Tools_Search");
        if (searchButton) {
            dispatch(toggleSearch());
        }
    };

    const handleLinkClick = () => {
        if (productDetailsIsOpen) {
            dispatch(toggleProductDetails());
        }
    };

    useEffect(() => {
        const body = document.body;
        if (body) {
            if (colorMode === "dark") {
                body.classList.add("darkmode");
            } else {
                body.classList.remove("darkmode");
            }
        }
    }, [colorMode]);

    return (
        <div className="Navbar" key={"Navbar"}>
            <div className="Navbar_Logo_Container">
                <HumanRoboticsIcon />
                <a href="#LP_Section_1" className="Navbar_LogoType_Container">
                    <svg className="Navbar_LogoType Human" id="Human_Svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 594.73 92.55">
                        <g id="Grupo1">
                            <path
                                className="cls-1"
                                d="m351.33,91.65c-1.92,0-3.57-.55-4.93-1.67-1.36-1.11-2.05-2.52-2.05-4.23V25.43l-36.09,62.76c-.72,1.37-1.83,2.39-3.31,3.07-1.48.69-3.05,1.02-4.69,1.02s-3.21-.34-4.69-1.02c-1.49-.68-2.59-1.71-3.31-3.07l-36.09-62.76v60.33c0,1.71-.68,3.12-2.04,4.23-1.37,1.11-3.01,1.67-4.93,1.67h-4.21l-.12-90.81h6.13c2.57,0,4.45.98,5.65,2.95l43.67,77.62L343.87,3.79c1.2-1.96,3.09-2.95,5.65-2.95h6.13l-.12,90.81h-4.21Z"
                            />
                            <path
                                className="cls-1"
                                d="m588.96.84c-1.6,0-2.97.57-4.09,1.72-1.12,1.15-1.68,2.53-1.68,4.14v70.23L528.45,2.37c-.72-1.02-1.69-1.53-2.89-1.53h-11.67v90.87h5.77c1.6,0,2.96-.57,4.09-1.72,1.12-1.15,1.68-2.53,1.68-4.14V15.62l54.61,74.56c.72,1.02,1.68,1.53,2.89,1.53h11.79V.84h-5.77Z"
                            />
                            <path
                                className="cls-1"
                                d="m83.74,2.56c-1.19-1.15-2.63-1.72-4.33-1.72h-6.12v34.16H11.55V6.7c0-1.61-.56-2.99-1.68-4.14-1.12-1.15-2.49-1.72-4.09-1.72H0v85.01c0,1.62.56,2.99,1.68,4.14,1.12,1.15,2.49,1.72,4.09,1.72h5.77v-45.5h61.74v39.64c0,1.62.59,2.99,1.78,4.14,1.19,1.15,2.63,1.72,4.33,1.72h6.12V6.7c0-1.61-.6-2.99-1.78-4.14Z"
                            />
                            <path
                                className="cls-1"
                                d="m201.94.84c-.88,0-1.6.3-2.16.89-.56.6-.84,1.32-.84,2.17v43.84c0,6.46-1.66,12.41-4.99,17.84-3.33,5.44-7.84,9.64-13.54,12.62l-2.82.88c-8.06,1.93-16.45,1.99-24.54.2l-.65-.15c-.78-.28-1.52-.56-2.2-.81-.07-.04-.14-.09-.22-.13-5.7-2.97-10.21-7.18-13.53-12.62-3.33-5.44-4.99-11.38-4.99-17.84V3.9c0-.85-.28-1.57-.84-2.17-.56-.59-1.25-.89-2.05-.89h-8.18v46.9c0,4.93.76,9.69,2.29,14.27,1.52,4.59,3.67,8.79,6.44,12.62,2.77,3.82,6.07,7.16,9.92,10.01,3.85,2.85,8.1,4.99,12.75,6.44l2.16.64h0s.3.04.3.04c6.97,1.02,14.04,1.06,21.02.13l1.3-.17,2.05-.64c4.73-1.53,9.04-3.72,12.93-6.56,3.89-2.85,7.22-6.2,9.98-10.07,2.77-3.87,4.89-8.11,6.37-12.75,1.48-4.63,2.18-9.5,2.11-14.59V.84h-8.06Zm-48.93,78.52c.09.03.17.06.2.07-.03,0-.09-.03-.2-.07Z"
                            />
                            <path
                                className="cls-1"
                                d="m397.98,91.71c.88,0,1.6-.3,2.16-.89.56-.6.84-1.32.84-2.17v-43.84c0-6.46,1.66-12.41,4.99-17.84,3.33-5.44,7.84-9.64,13.54-12.62l2.82-.88c8.06-1.93,16.45-1.99,24.54-.2l.65.15c.78.28,1.52.56,2.2.81.07.04.14.09.22.13,5.7,2.97,10.21,7.18,13.53,12.62,3.33,5.44,4.99,11.38,4.99,17.84v43.84c0,.85.28,1.57.84,2.17.56.59,1.25.89,2.05.89h8.18v-46.9c0-4.93-.76-9.69-2.29-14.27-1.52-4.59-3.67-8.79-6.44-12.62-2.77-3.82-6.07-7.16-9.92-10.01-3.85-2.85-8.1-4.99-12.75-6.44l-2.16-.64h0s-.3-.04-.3-.04c-6.97-1.02-14.04-1.06-21.02-.13l-1.3.17-2.05.64c-4.73,1.53-9.04,3.72-12.93,6.56-3.89,2.85-7.22,6.2-9.98,10.07-2.77,3.87-4.89,8.11-6.37,12.75-1.48,4.63-2.18,9.5-2.11,14.59v46.26h8.06Zm48.93-78.52c-.09-.03-.17-.06-.2-.07.03,0,.09.03.2.07Z"
                            />
                        </g>
                    </svg>
                    <svg className="Navbar_LogoType Robotics" id="Robotics_Svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 879.64 91.3">
                        <g id="Grupo2">
                            <path
                                className="cls-1"
                                d="m350.61,25.92c0,2.38-.26,4.52-.78,6.43-.52,1.91-1.16,3.61-1.92,5.09-.76,1.49-1.55,2.74-2.35,3.75-.8,1.02-1.49,1.87-2.05,2.54,3.69,2.72,6.64,5.79,8.84,9.23,2.2,3.44,3.31,7.66,3.31,12.66,0,3.31-.6,6.43-1.81,9.35-1.2,2.93-2.83,5.54-4.87,7.83-2.04,2.29-4.45,4.16-7.22,5.6-2.77,1.44-5.76,2.33-8.96,2.67h-87.94v-5.47c0-1.61.56-2.99,1.68-4.14,1.12-1.15,2.49-1.72,4.09-1.72h80.73c1.76-.08,3.45-.51,5.05-1.27,1.6-.76,3.01-1.8,4.21-3.12,1.2-1.31,2.16-2.8,2.89-4.45.72-1.65,1.08-3.41,1.08-5.28s-.38-3.77-1.14-5.47c-.76-1.7-1.77-3.18-3.01-4.45-1.25-1.27-2.73-2.29-4.45-3.05-1.73-.76-3.55-1.15-5.47-1.15h-3.01c-.8,0-2.18-.02-4.15-.06-1.97-.04-5.11-.06-9.44-.06h-63.28c-1.6,0-2.97-.57-4.09-1.72-1.12-1.15-1.68-2.52-1.68-4.14v-5.47h80.48c1.92,0,3.75-.38,5.47-1.15,1.72-.76,3.23-1.78,4.51-3.05,1.28-1.27,2.29-2.76,3.01-4.45.72-1.7,1.08-3.52,1.08-5.47s-.36-3.8-1.08-5.54c-.72-1.74-1.73-3.25-3.01-4.52-1.28-1.27-2.79-2.29-4.51-3.05-1.73-.76-3.55-1.15-5.47-1.15h-74.71c-1.6,0-2.97-.57-4.09-1.72-1.12-1.15-1.68-2.52-1.68-4.14V.34h76.57c1.56,0,2.73-.02,3.49-.06.76-.04,1.46-.06,2.11-.06v.13c3.29.25,6.35,1.08,9.2,2.48,2.84,1.4,5.33,3.25,7.46,5.54,2.12,2.29,3.81,4.94,5.05,7.95,1.24,3.01,1.86,6.22,1.86,9.61Z"
                            />
                            <path
                                className="cls-1"
                                d="m596.23,5.86c0-1.61-.54-2.99-1.63-4.14C593.51.57,592.15,0,590.54,0h-75.53v5.48c0,1.62.56,2.99,1.69,4.14,1.13,1.15,2.5,1.72,4.12,1.72h29.05v73.67c0,1.62.56,2.99,1.69,4.14,1.13,1.15,2.5,1.72,4.12,1.72h5.81V11.34h34.74v-5.48Z"
                            />
                            <path
                                className="cls-1"
                                d="m636.9,90.87c-1.61,0-2.99-.57-4.12-1.72-1.13-1.15-1.7-2.53-1.7-4.14V0h5.81c1.61,0,2.99.57,4.12,1.72,1.13,1.15,1.69,2.53,1.69,4.14v85.01h-5.81Z"
                            />
                            <path
                                className="cls-1"
                                d="m76.8,80.13c-1.16-1.53-2.37-3.05-3.61-4.58-1.24-1.53-2.73-3.39-4.45-5.6-1.73-2.21-3.79-4.84-6.2-7.89,3.1,3.93-2.03-2.65-9.02-11.2,3.61.09,13.23-.58,16.36-1.9,3.13-1.31,5.83-3.14,8.12-5.47,2.29-2.33,4.11-5.05,5.47-8.14,1.36-3.1,2.05-6.38,2.05-9.86s-.68-6.89-2.05-9.99c-1.36-3.1-3.23-5.79-5.59-8.08-2.37-2.29-5.11-4.09-8.24-5.41-3.13-1.31-12.75-1.88-16.36-1.79H7.33C6.86.08,6.37,0,5.85,0H.08v.2h-.08v3.31c0,.39.03.76.08,1.13v80.37c0,1.62.56,2.99,1.68,4.14,1.12,1.15,2.49,1.72,4.09,1.72h5.77V11.66h42.26c1.92,0,10,.32,11.73,1.04,1.72.72,3.23,1.7,4.51,2.93,1.28,1.23,2.3,2.69,3.07,4.39.76,1.7,1.14,3.52,1.14,5.47s-.38,3.78-1.14,5.47c-.76,1.7-1.79,3.16-3.07,4.39-1.28,1.23-2.79,2.23-4.51,2.99-1.73.76-9.8,1.2-11.73,1.2h-24.18c7.46,9.25,13.57,16.84,18.34,22.78,4.77,5.94,8.58,10.69,11.43,14.25,2.85,3.56,4.95,6.19,6.32,7.89,1.36,1.7,2.33,2.88,2.89,3.56.56.68.92,1.1,1.08,1.27.16.17.48.55.96,1.15l.24-.25c1.12.59,2.41.89,3.85.89h10.71c-1.92-2.37-3.57-4.41-4.93-6.11-1.37-1.7-2.63-3.31-3.79-4.84Z"
                            />
                            <path
                                className="cls-1"
                                d="m722.44,11.66c-4.65,0-9.02.89-13.11,2.67-4.09,1.78-7.68,4.22-10.76,7.32-3.09,3.1-5.52,6.7-7.28,10.82-1.77,4.12-2.65,8.55-2.65,13.3s.88,9.06,2.65,13.17c1.76,4.12,4.19,7.72,7.28,10.82,3.09,3.1,6.68,5.54,10.76,7.32,4.09,1.78,8.46,2.67,13.11,2.67h32.96c1.6,0,2.97.57,4.09,1.72,1.12,1.15,1.68,2.53,1.68,4.14v5.47h-41.02c-5.94-.34-11.49-1.76-16.66-4.26-5.17-2.5-9.68-5.79-13.53-9.86-3.85-4.07-6.88-8.78-9.08-14.13-2.21-5.35-3.31-11.03-3.31-17.05s1.1-11.84,3.31-17.18c2.2-5.34,5.23-10.05,9.08-14.13,3.85-4.07,8.36-7.36,13.53-9.86,5.17-2.5,10.72-3.92,16.66-4.26h41.02v5.47c0,1.61-.56,2.99-1.68,4.14-1.12,1.15-2.49,1.72-4.09,1.72h-32.96Z"
                            />
                            <path
                                className="cls-1"
                                d="m877.66,55.51c-1.32-3.09-3.13-5.78-5.41-8.06-2.29-2.29-4.95-4.1-8-5.46-3.05-1.35-23.75-2.03-27.19-2.03h-1.94c-.4-.08-.81-.13-1.25-.13-1.93,0-16.43-.36-18.16-1.08-1.72-.72-3.21-1.71-4.45-2.98-1.24-1.27-2.25-2.77-3.01-4.51-.76-1.73-1.14-3.58-1.14-5.52s.38-3.77,1.14-5.46c.76-1.69,1.76-3.17,3.01-4.44,1.24-1.27,2.73-2.29,4.45-3.05,1.73-.76,3.55-1.14,5.47-1.14h49.08c1.6,0,2.97-.57,4.09-1.71,1.12-1.14,1.68-2.56,1.68-4.25V.33h-54.01c-3.61-.17-7,.4-10.16,1.71-3.17,1.31-5.91,3.13-8.24,5.46-2.33,2.33-4.17,5.06-5.53,8.19-1.37,3.13-2.05,6.48-2.05,10.03s.66,6.88,1.98,9.97c1.32,3.09,3.13,5.78,5.41,8.06,2.29,2.29,4.95,4.11,8,5.46,3.05,1.36,18.98,2.03,22.42,2.03h1.97c.28.06.57.11.86.13,2.32,0,21.84.42,23.64,1.27,1.81.85,3.31,1.95,4.51,3.3,1.2,1.36,2.12,2.86,2.77,4.51.64,1.65.96,3.32.96,5.02,0,1.86-.36,3.64-1.08,5.33-.72,1.69-1.68,3.17-2.89,4.44-1.2,1.27-2.61,2.29-4.21,3.05-1.6.76-3.33,1.19-5.17,1.27h-53.41c-1.61,0-2.97.57-4.09,1.71-1.12,1.14-1.68,2.52-1.68,4.13v5.46h60.14c3.37-.25,6.48-1.1,9.32-2.54,2.85-1.44,5.31-3.3,7.4-5.59,2.08-2.29,3.73-4.91,4.93-7.87,1.2-2.96,1.8-6.09,1.8-9.4,0-3.56-.66-6.88-1.98-9.97Z"
                            />
                            <path
                                className="cls-1"
                                d="m482.3,45.83c0,6.22-1.26,12.09-3.77,17.63-2.51,5.54-5.92,10.37-10.22,14.5-4.3,4.13-9.32,7.39-15.07,9.77-5.75,2.39-11.9,3.58-18.46,3.58s-12.73-1.19-18.52-3.58c-5.79-2.38-10.84-5.64-15.14-9.77-4.3-4.13-7.71-8.96-10.22-14.5-2.51-5.53-3.77-11.41-3.77-17.63s1.26-12.22,3.77-17.76c2.51-5.53,5.92-10.37,10.22-14.5,4.3-4.13,9.34-7.39,15.14-9.77,5.79-2.38,11.96-3.58,18.52-3.58s12.71,1.19,18.46,3.58c5.75,2.39,10.77,5.64,15.07,9.77,4.3,4.13,7.71,8.96,10.22,14.5,2.51,5.54,3.77,11.46,3.77,17.76Zm-47.52-34.23c-4.94,0-9.58.89-13.92,2.68-4.34,1.79-8.16,4.24-11.43,7.34-3.28,3.11-5.86,6.73-7.73,10.86-1.87,4.13-2.81,8.58-2.81,13.35s.94,9.09,2.81,13.22c1.87,4.13,4.45,7.75,7.73,10.86,3.28,3.11,7.09,5.56,11.43,7.34,4.34,1.79,8.98,2.68,13.92,2.68s9.58-.89,13.92-2.68c4.34-1.79,8.13-4.24,11.37-7.34,3.24-3.11,5.79-6.73,7.66-10.86,1.87-4.13,2.81-8.54,2.81-13.22s-.94-9.22-2.81-13.35c-1.87-4.13-4.43-7.75-7.66-10.86-3.24-3.11-7.03-5.56-11.37-7.34-4.34-1.79-8.99-2.68-13.92-2.68Z"
                            />
                            <path
                                className="cls-1"
                                d="m212.78,45.83c0,6.22-1.26,12.09-3.77,17.63-2.51,5.54-5.92,10.37-10.22,14.5-4.3,4.13-9.32,7.39-15.07,9.77-5.75,2.39-11.9,3.58-18.46,3.58s-12.73-1.19-18.52-3.58c-5.79-2.38-10.84-5.64-15.14-9.77-4.3-4.13-7.71-8.96-10.22-14.5-2.51-5.53-3.77-11.41-3.77-17.63s1.26-12.22,3.77-17.76c2.51-5.53,5.92-10.37,10.22-14.5,4.3-4.13,9.34-7.39,15.14-9.77,5.79-2.38,11.96-3.58,18.52-3.58s12.71,1.19,18.46,3.58c5.75,2.39,10.77,5.64,15.07,9.77,4.3,4.13,7.71,8.96,10.22,14.5,2.51,5.54,3.77,11.46,3.77,17.76Zm-47.52-34.23c-4.94,0-9.58.89-13.92,2.68-4.34,1.79-8.16,4.24-11.43,7.34-3.28,3.11-5.86,6.73-7.73,10.86-1.87,4.13-2.81,8.58-2.81,13.35s.94,9.09,2.81,13.22c1.87,4.13,4.45,7.75,7.73,10.86,3.28,3.11,7.09,5.56,11.43,7.34,4.34,1.79,8.98,2.68,13.92,2.68s9.58-.89,13.92-2.68c4.34-1.79,8.13-4.24,11.37-7.34,3.24-3.11,5.79-6.73,7.66-10.86,1.87-4.13,2.81-8.54,2.81-13.22s-.94-9.22-2.81-13.35c-1.87-4.13-4.43-7.75-7.66-10.86-3.24-3.11-7.03-5.56-11.37-7.34-4.34-1.79-8.99-2.68-13.92-2.68Z"
                            />
                        </g>
                    </svg>
                </a>
            </div>
            <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Navbar_Main">
                {!menuIsOpen && (
                    <>
                        <m.a
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            href="#LP_Section_1"
                            className={activeSection === 0 ? "Navbar_Main_Links active" : "Navbar_Main_Links"}
                            onClick={handleLinkClick}
                        >
                            Início
                        </m.a>
                        <m.a
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            href="#LP_Section_2"
                            className={activeSection === 1 ? "Navbar_Main_Links active" : "Navbar_Main_Links"}
                            onClick={handleLinkClick}
                        >
                            Produtos
                        </m.a>
                        <m.a
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            href="#LP_Section_3"
                            className={activeSection === 2 ? "Navbar_Main_Links active" : "Navbar_Main_Links"}
                            onClick={handleLinkClick}
                        >
                            Soluções
                        </m.a>
                        <m.a
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            href="#LP_Section_4"
                            className={activeSection === 3 ? "Navbar_Main_Links active" : "Navbar_Main_Links"}
                            onClick={handleLinkClick}
                        >
                            Sobre
                        </m.a>

                        <m.a
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            href="#LP_Section_5"
                            className={activeSection === 4 ? "Navbar_Main_Links active" : "Navbar_Main_Links"}
                            onClick={handleLinkClick}
                        >
                            Contato
                        </m.a>
                    </>
                )}
            </m.div>
            <div className="Navbar_Mobile">
                {activeSection === 0 && !menuIsOpen && (
                    <m.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href="#LP_Section_1"
                        className={activeSection === 0 ? "Navbar_Main_Links active" : "Navbar_Main_Links"}
                        key={"Navbar_Mobile_Links_1"}
                    >
                        Início
                    </m.a>
                )}
                {activeSection === 1 && !menuIsOpen && (
                    <m.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href="#LP_Section_2"
                        className={activeSection === 1 ? "Navbar_Main_Links active" : "Navbar_Main_Links"}
                        key={"Navbar_Mobile_Links_2"}
                    >
                        Produtos
                    </m.a>
                )}

                {activeSection === 2 && !menuIsOpen && (
                    <m.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href="#LP_Section_3"
                        className={activeSection === 2 ? "Navbar_Main_Links active" : "Navbar_Main_Links"}
                        key={"Navbar_Mobile_Links_3"}
                    >
                        Soluções
                    </m.a>
                )}

                {activeSection === 3 && !menuIsOpen && (
                    <m.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href="#LP_Section_4"
                        className={activeSection === 3 ? "Navbar_Main_Links active" : "Navbar_Main_Links"}
                        key={"Navbar_Mobile_Links_4"}
                    >
                        Sobre
                    </m.a>
                )}

                {activeSection === 4 && !menuIsOpen && (
                    <m.a
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        href="#LP_Section_5"
                        className={activeSection === 3 ? "Navbar_Main_Links active" : "Navbar_Main_Links"}
                        key={"Navbar_Mobile_Links_4"}
                    >
                        Contato
                    </m.a>
                )}

                {menuIsOpen && (
                    <m.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Mobile_Navbar_Title">
                        Human Robotics
                    </m.h1>
                )}
            </div>

            <div className="Navbar_Tools">
                <a
                    href="#"
                    className={searchIsOpen ? "Navbar_Tool Navbar_Tools_Search active" : "Navbar_Tool Navbar_Tools_Search"}
                    onClick={toggleSearchButton}
                >
                    <span className="material-icons">search</span>
                </a>
                <a
                    href="#"
                    className={cartIsOpen ? "Navbar_Tool Navbar_Tools_Cart active" : "Navbar_Tool Navbar_Tools_Cart"}
                    onClick={toggleCartButton}
                >
                    {cartItemsCount > 0 && (
                        <m.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="Navbar_Tools_Cart_Indicator">
                            {cartItemsCount < 10 ? cartItemsCount : "10 +"}
                        </m.div>
                    )}

                    <span className="material-icons">shopping_cart</span>
                </a>
                <a
                    href="#"
                    className={colorMode === "dark" ? "Navbar_Tool Navbar_Tools_ToggleMode active" : "Navbar_Tool Navbar_Tools_ToggleMode"}
                    onClick={toggleColorMode}
                >
                    <span className="material-icons">brightness_4</span>
                </a>

                <a href="#" className={menuIsOpen ? "Navbar_Menu_Button active" : "Navbar_Menu_Button"} onClick={toggleMenuButton}>
                    <div className="Menu_Button_Line Line_1"></div>
                    <div className="Menu_Button_Line Line_2"></div>
                    <div className="Menu_Button_Line Line_3"></div>
                </a>
            </div>
        </div>
    );
}
