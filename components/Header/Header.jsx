
"use client";
import  Navbar  from "../Navbar/Navbar";
import useScreen from "../../hooks/useScreen";
//import Image from "next/image";
//import { Link } from "react-scroll";
//import Container from "../Conteiner/Container";

//import config from '../../public/config/index.json';

const Header=({className=""})=>{
	const {isM}=useScreen()
	//const {menu} = config;
    return (
		
		<header
			className={`w-[100vw] z-30  px-[20px] pt-[36px] t:px-[32px] t:pt-[25px] d:px-[24px] d:pt-[48px] ${className}`}
		>
					 {isM ? <Navbar  /> : <p>'BurgerMenu'</p>}
         
		</header>
	);
}

export default Header;