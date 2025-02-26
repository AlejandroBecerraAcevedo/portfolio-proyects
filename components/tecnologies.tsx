"use client";

import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SkillData } from "@/data";

const PasaTecnologies = () => {
    return (

        <div className="mb-40">
            <p className="text-gray-400 items-center justify-center  text-[20px] lg:text-[25px] mx-10 ">
                Estas son algunas de las tecnologías y lenguajes de programación que
                domino.
            </p>
        
            <Swiper
                spaceBetween={5}
                slidesPerView={6}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                speed={5000}
                modules={[Autoplay]}
                className="max-w-[80%] mt-20"
            >
                {SkillData.map((skill, index) => (
                    <SwiperSlide key={index} className="mx-1">
                        <Image
                            src={skill.Image}
                            alt={skill.name}
                            width={skill.width}
                            height={skill.height} 
                            priority
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
                
            <Swiper
                spaceBetween={5}
                slidesPerView={5}
                loop={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: true,
                }}
                speed={5000}
                modules={[Autoplay]}
                className="max-w-[80%] mt-20 "
            >
                {SkillData.map((skill, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={skill.Image}
                            alt={skill.name}
                            width={skill.width}
                            height={skill.height} 
                            priority
                        />
                    </SwiperSlide>
                ))}
            
            </Swiper>
        </div>
    

    );

}

export default PasaTecnologies;