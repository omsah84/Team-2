import React from "react";
import WorkGrid from "@/components/WorkGrid";

interface ProjectSchema {
    title: string;
    description: string;
    liveUrl: string;
    codeUrl: string;
    imageUrl: string[];
}



const page = () => {
    return (
        <section>
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white my-5">Frontend Application</h2>
            <WorkGrid projects={frontendData} />
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white my-5">Others Application</h2>
            <WorkGrid projects={othersData} />
        </section>
    );
};

export default page;



const frontendData: ProjectSchema[] = [
    {
        title: "Interior Design",
        description: "Tech Stack: Next.js, React, SSR, CSR, Material UI, JSX",
        liveUrl: "https://omsahinteriordesign.vercel.app/",
        codeUrl: "https://github.com/omsah84/",
        imageUrl: [
            "/images/interior-design-img1.jpg",
            "/images/interior-design-img2.jpg",
            "/images/interior-design-img3.jpg",
            "/images/interior-design-img4.jpg",
            "/images/interior-design-img5.jpg",
            "/images/interior-design-img6.jpg",
        ],
    },
    {
        title: "Material Hub Platform",
        description: "Role: FrontEnd Developer",
        liveUrl: "https://omsahmaterialhub.vercel.app/",
        codeUrl: "https://github.com/omsah84/",
        imageUrl: [
            "/images/material-hub-img1.jpg",
            "/images/material-hub-img2.jpg",
            "/images/material-hub-img3.jpg",
        ],
    },


    {
        title: "Virtual Interview",
        description: "Role: Frontend Developer",
        liveUrl: "https://omsahvirtualinterview.vercel.app/",
        codeUrl: "https://github.com/omsah84/",
        imageUrl: [
            "/images/virtual-interview-img1.jpg",
            "/images/virtual-interview-img2.jpg",
            "/images/virtual-interview-img3.jpg",
        ],
    },
    {
        title: "Account Manager",
        description: "Tech Stack: React, Firebase",
        liveUrl: "https://accountmanager.netlify.app/",
        codeUrl: "https://github.com/omsah84/",
        imageUrl: [
            "/images/account-manager-img1.jpg",

        ],
    },

    {
        title: "BMI Calculator",
        description: "Role: Frontend Developer",
        liveUrl: "https://omsahbmicalculator.netlify.app/",
        codeUrl: "https://github.com/omsah84/",
        imageUrl: [
            "/images/bmi-calculator-img1.jpg",

        ],
    },
    {
        title: "Unique Counter App",
        description: "Role: Frontend Developer",
        liveUrl: "https://omsahcounterapp.netlify.app/",
        codeUrl: "https://github.com/omsah84/",
        imageUrl: [
            "/images/counter-app-img1.jpg",

        ],
    },
    {
        title: "Dynamic Form Generator",
        description: "Role: Frontend Developer",
        liveUrl: "https://omsahdynamicformgenerator.netlify.app/",
        codeUrl: "https://github.com/omsah84/",
        imageUrl: [
            "/images/dynamic-form-generator-img1.jpg",
            "/images/dynamic-form-generator-img2.jpg",
            "/images/dynamic-form-generator-img3.jpg",

        ],
    },

    {
        title: "SI Calculator",
        description: "Role: Frontend Developer",
        liveUrl: "https://omsahsicalculator.netlify.app",
        codeUrl: "https://github.com/omsah84/",
        imageUrl: [
            "/images/si-calculator-img1.jpg",
        ],
    },
    {
        title: "Project Sales App",
        description: "Role: Frontend Developer",
        liveUrl: "https://omsahprojectsalesapp.netlify.app",
        codeUrl: "https://github.com/omsah84/",
        imageUrl: [
            "/images/project-sales-app-img1.jpg",
            "/images/project-sales-app-img2.jpg",
        ],
    },
    {
        title: "Sum Calculator",
        description: "Role: Frontend Developer",
        liveUrl: "https://omsahsumcalculator.netlify.app",
        codeUrl: "https://github.com/omsah84/",
        imageUrl: [
            "/images/sum-calculator-img1.jpg",
        ],
    },
    {
        title: "Weather App",
        description: "Role: Frontend Developer",
        liveUrl: "https://omsahweatherapp.netlify.app",
        codeUrl: "https://github.com/omsah84/",
        imageUrl: [
            "/images/weather-app-img1.jpg",
            "/images/weather-app-img2.jpg",
        ],
    },


    // Add more projects as needed
];

const othersData: ProjectSchema[] = [
    {
        title: "MCQ Practice Platform",
        description: "Role: WordPress Developer",
        liveUrl: "https://nepalexamprep.com/",
        codeUrl: "https://github.com/omsah84/",
        imageUrl: [
            "/images/mcq-practice-img1.jpg",
            "/images/mcq-practice-img2.jpg",
            "/images/mcq-practice-img3.jpg",
            "/images/mcq-practice-img4.jpg",
            "/images/mcq-practice-img5.jpg",
            "/images/mcq-practice-img6.jpg",
        ],
    },
    {
        title: "GUI Calculator",
        description: "Role: Window Application",
        liveUrl: "https://github.com/omsah84/gui-calculate",
        codeUrl: "https://github.com/omsah84/",
        imageUrl: [
            "/images/gui-img1.jpg",
        ],
    },

    // Add more projects as needed
];