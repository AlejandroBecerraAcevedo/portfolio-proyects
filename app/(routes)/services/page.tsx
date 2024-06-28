import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import ContainerPage from "@/components/container";
import CoverParticles from "@/components/cover-particles";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const Services = () => {
    return (
        <>
            <TransitionPage/>
            <CoverParticles/>
            <CircleImage/>
            <AvatarServices/>  

            <ContainerPage>
                <div className="grid items-center justify-center 
                    h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2 md:px-20"
                >
                    <div className="max-w-[450px]">
                        <h2 className="text-2xl leading-tight text-center 
                            md:text-left md:text-4xl md:mb-5"
                        >
                            Mis{" "}

                            <span className="font-bold text-secondary">
                                servicios
                            </span>

                        </h2>
                        <p className="mb-3 text-xl text-gray-300">
                            Entre los servicios que ofrezco se encuentran el desarrollo de aplicaciones descentralizadas en ICP con Motoko y Azle, así como el desarrollo de Backend con Spring Boot,
                            también me especializo en aplicaciones IOT con Arduino, Raspberry Pi y ESP32. Como lo son los sistemas de control de piso.
                        </p>   
                        <a href="/contact" className="px-3 py-2 rounded-lg bg-secondary 
                            hover:bg-secondary/65" 
                        >
                            Contacta conmigo                    
                        </a>                
                    </div>
                    <SliderServices/>
                </div>   



            </ContainerPage>
               
        </>
    );
}

export default Services;