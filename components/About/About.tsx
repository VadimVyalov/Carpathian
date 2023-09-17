
import clsx from "clsx";
import Container from "../Conteiner/Container";
import { Section } from "../Section/Section";
import style from "./styles.module.scss";


const About = () => {


  return (
    <Section id="about" className={` h-[826px] bg-gradient-to-b from-[#001826] from-10%   to-[#002426] to-90% `} >
      <Container>
        <div   className="grid grid-cols-1 t:grid-cols-[426px_230px] d:grid-cols-[646px_294px] t:grid-rows-[auto_auto_auto] gap-[24px] t:gap-0 t:justify-between ">
        

          <h2 className="heading-content t:col-start-1 t:row-start-1 t:row-span-2">
            <span className="block font-medium ">Uncover</span>
            Carpathian’s
            <br />
            Secrets
          </h2>

          <p className="w-[157px] t:w-[263px] d:w-full text-[10px] t:text-[14px] d:text-[16px] leading-[1.6] t:leading-[1.14] 
          d:leading-[1.5] font-extralight t:tracking-[0.09em] t:row-start-3 t:mt-auto">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </p>

 

          <div className="t:mt-[28px] w-full">


          </div>
        </div>
    
    </Container>
    </Section>
  );
};

export default About;