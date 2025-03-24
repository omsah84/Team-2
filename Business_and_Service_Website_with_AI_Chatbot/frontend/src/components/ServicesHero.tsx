
import React from "react";
import { Cover } from "@/components/ui/cover";

export default function Hero() {
    return (
        <div className="w-100 h-[500px] flex justify-center items-center">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center  relative z-20 py-6 bg-clip-text text-white bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                Build amazing websites <br /> by <Cover>Service</Cover>
            </h1>
        </div>
    );
}
