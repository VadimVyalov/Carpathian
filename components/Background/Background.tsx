import Image from "next/image";

export function Background({ src,children, className = ""}) {
	return (
      
        
        <div className={'fixed h-[100vh] w-[100vh] overflow-hidden z-[-1]'}>
          <Image
            alt="Mountains"
            src={scr}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
 
 
	);
    }

