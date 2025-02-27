import MotionTransition from "./transition-component";
import Image from "next/image";
const AvatarServices = () => {
    return (

        
        <MotionTransition position="bottom"
            className="bottom-0 left-0 hidden md:inline-block md:absolute"
        >
            
            <Image src="/services.png" width={300} height={300} 
            className="w-[200px] h-full" alt="Avatar"/>


        </MotionTransition>

    );
}

export default AvatarServices;