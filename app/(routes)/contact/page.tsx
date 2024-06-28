import CircleImage from '@/components/circle-image';
import ContainerPage from '@/components/container-page';
import CoverParticles from '@/components/cover-particles';
import TransitionPage from '@/components/transition-page';
import Image from 'next/image';

const ContactPage = () => {
    return (
        
        <ContainerPage>
            <TransitionPage/>
            
            <CircleImage/>

            <div className='flex flex-col justify-center h-full'>
            <CoverParticles/>
                
                <Image src="/Profile.jpg" alt="Profile" width={250} height={250} className="mx-auto rounded-full inset-0 object-cover z-10" />
                <div className='flex flex-col justify-center max-w-md mx-auto'>
                    <p className='text-2xl leading-tight text-center md:text-3xl md:mb-4'>                    
                        Hola, soy <span className='text-secondary'>Alejandro!</span>, desarrollador de software.
                    </p>
                </div>
                <div className='flex flex-col justify-center max-w-md mx-auto'>
                    <p className='text-2xl leading-tight text-center md:text-3xl md:mb-4'>                    
                        Hazme saber si tienes alguna pregunta o si deseas colaborar en un proyecto.
                    </p>                
                </div>
                
            
            </div>


        </ContainerPage>        
    );
};

export default ContactPage;


