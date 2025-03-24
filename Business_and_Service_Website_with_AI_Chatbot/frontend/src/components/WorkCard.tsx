"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

interface WorkCardProps {
    title: string;
    description: string;
    imageUrl: string[];
    liveUrl: string;
    codeUrl: string;
}

const WorkCard: React.FC<WorkCardProps> = ({
    title,
    description,
    imageUrl,
    liveUrl,
    codeUrl,
}) => {

    const [idx, setIdx] = useState(0);

    useEffect(() => {
        const intervalTime = setInterval(() => {
            setIdx((prevIdx) => (prevIdx + 1) % imageUrl.length);
        }, 3000);

        return () => clearInterval(intervalTime);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
    return (
        <CardContainer className="inter-var">
            <CardBody className=" relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[23rem] h-auto rounded-xl p-6 border border-white-700 ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white dark:text-white"
                >
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    {description}
                </CardItem>
                <CardItem translateZ="100" className="w-full h-70 mt-4">
                    <Image
                        src={imageUrl[idx]}
                        width={1000}
                        height={1000}
                        className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                        style={{ height: "100%", width: "100%" }}
                        blurDataURL="data:image/png;base64,..."
                        placeholder="blur" 
                    />
                </CardItem>

                <div className="flex justify-between items-center mt-7">
                    <CardItem
                        translateZ={20}
                        target="__blank"
                        className="px-4  rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-bold"
                    >
                        <Link href={liveUrl} target="-blank">
                            Live
                        </Link>
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4  rounded-xl bg-black dark:bg-white dark:text-black text-white text-sm font-bold"
                    >
                        <Link href={codeUrl} target="-blank">
                            Code
                        </Link>
                    </CardItem>
                </div>
            </CardBody>
            {/* moving border */}
            <div className="absolute inset-0 border-2 border-transparent rounded-xl animate-borderEffect" />
        </CardContainer>
    );
};

export default WorkCard;
