 "use client";

 import { useRouter } from "next/navigation";
 import { useCallback } from "react";
import Button from "../Buttons/Button";
import Container from "../Conteiner/Container";
import { Section } from "../Section/Section";
import style from "./styles.module.scss";
//import { heroData } from "@/constants";

//import { Container } from "@/components";

const Hero = () => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push("./");
  }, [router]);

  return (
    <Section className={`${style.bg}`}>
    <Container >
      
        <div className="grid grid-cols-1 t:grid-cols-[426px_230px] d:grid-cols-[646px_294px] t:grid-rows-[auto_auto_auto] gap-[24px] t:gap-0 t:justify-between ">
        

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
            <Button
                
              type='button'
              onClick={handleClick}
         
              className=" bg-btn-normal hover:bg-btn-hover text-center leading-normal text-5xl text-white uppercase 
              d:px-16 d:py-4"
            > join now </Button>

          </div>
        </div>
    
    </Container>
    </Section>
  );
};

export default Hero;