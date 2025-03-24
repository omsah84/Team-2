import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function Works() {
    return (
        <div className="w-full h-full py-5 bg-gradient-to-b from-gray-900 to-black ">
            <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-100 font-sans">
            Innovative Works Portfolio
            </h2>
            <HoverEffect items={itemsData} />
        </div>
    )
}


const itemsData = [
    {
        title: "Frontend Web Application - E-commerce",
        description: "A responsive and dynamic e-commerce frontend application using React.js, Redux, and Material-UI for seamless shopping experiences.",
        link: "/projects/1",
    },
    {
        title: "Backend API - RESTful Service",
        description: "A backend RESTful API built with Node.js, Express, and MongoDB to handle user authentication, product management, and order processing.",
        link: "/projects/2",
    },
    {
        title: "Full-stack Web Application - Task Manager",
        description: "A full-stack task manager app utilizing React.js for the frontend, Node.js for the backend, and MongoDB for data storage, allowing real-time task updates.",
        link: "/projects/3",
    },
    {
        title: "Machine Learning - Predictive Analysis",
        description: "A machine learning model for predictive analysis using Python and scikit-learn, trained on historical data to forecast future trends.",
        link: "/projects/4",
    },
    {
        title: "Full-stack Web Application - Blogging Platform",
        description: "A blogging platform with a full-stack implementation: React.js for the frontend, Node.js and Express.js for the backend, and MongoDB for data storage.",
        link: "/projects/5",
    },
    {
        title: "Machine Learning - Image Classification",
        description: "A deep learning project using TensorFlow and Keras to classify images into categories, leveraging Convolutional Neural Networks (CNNs).",
        link: "/projects/6",
    },
];