"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `I’m a dedicated software developer with a passion for creating innovative tech solutions. From building responsive websites and intuitive mobile apps to crafting seamless APIs and custom software, I provide a range of services tailored to your needs. With a focus on quality, functionality, and user experience, I’m here to turn your ideas into reality.
`;

export default function TextGenerateEffectDemo() {
    return (<div className="h-content py-10 md:py-20 px-5 md:px-10 flex text-center justify-center items-center" >
        <TextGenerateEffect words={words} />
    </div>);
}
