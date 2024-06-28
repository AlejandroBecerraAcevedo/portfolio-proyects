"use client"


import ContainerPage from '@/components/container';
import CoverParticles from '@/components/cover-particles';
import PasaTecnologies from '@/components/tecnologies';
import TransitionPage from '@/components/transition-page';
import Particles from '@tsparticles/react';

const TestimonialsPage = () => {
    return (
        <>
            <CoverParticles/>
            <ContainerPage>
                <TransitionPage />                
                <PasaTecnologies/>
            </ContainerPage>
            
            
        
        </>
        
    );
}

export default TestimonialsPage;