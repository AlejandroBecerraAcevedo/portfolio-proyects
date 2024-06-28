import Link from "next/link";
import MotionTransition from "./transition-component"
import { socialNetworks } from "@/data";

const Header = () => {
  return (   
    
    <header>
      <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10 px-20">
          
        <div className="container justify-between max-w-6xl mx-auto md:flex">
          <Link href="/">
            <h1 className="my-3 text-2xl font-bold text-center md:text-left">
              ALEJANDRO {" "}
              <span className="text-secondary">
                BECERRA ACEVEDO
              </span>
            </h1>                   
          </Link>
          <div className="flex items-center justify-center gap-7">
            {socialNetworks.map(({logo,src,id}) => (
              <Link key={id}
                href={src}
                target="_blank"
                className="transition-all duration-300 hover:text-secondary"
              >
                {logo}

              </Link>
            ))}
          </div>
        </div>
          
      </MotionTransition>
    </header>
    
  );
}

export default Header;