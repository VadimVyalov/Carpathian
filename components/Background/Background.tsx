import Image from "next/image";

const  Background=({ src, className = ""}) =>{
	return (
      
        <div className={'absolute top-0 center h-screen w-screen overflow-hidden z-[-1]'}>
          <Image
            alt="Mountains"
            src={src}
            placeholder="blur"
            quality={100}
   
            sizes="(max-width: 320px) 16w, (max-width: 768px) 32w, (max-width: 1200px) 48w, 64w"
            layout="fill"
            objectFit="cover"
          />
        </div>
 
 
	);
    }

    export default Background;