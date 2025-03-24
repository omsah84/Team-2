"use client";

import React from "react";
import WorkCard from "./WorkCard";

interface Project {
    title: string;
    description: string;
    imageUrl: string[];
    liveUrl: string;
    codeUrl: string;
}

interface WorkGridProps {
    projects: Project[];
}

const WorkGrid: React.FC<WorkGridProps> = ({ projects }) => {
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container gap-10 my-10">
            {projects.map((project, index) => (
                <WorkCard key={index} {...project} />
            ))}
        </div>
    );
};

export default WorkGrid;
