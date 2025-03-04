const portfolio = [
    {
        id: 0,
        projectName: "SU Student Property Registration System",
        url: "https://github.com/Deju12/project/tree/main/semester%20project",
        image: "projects/su property.png",
        projectDetail: "This project is my 4th year semister project.It is desktop application and used for Register Student laptops.",
        technologiesUsed: [
            {
                tech: "JAVA"
            },
            {
                tech: "NetBeans"
            },
            {
                tech: "MYSQL"
            },
            
        ]
    },
    {
        id: 0,
        projectName: "Advanced Plant Irrigation System",
        url: "https://github.com/Deju12/project/tree/main/final%20thesis",
        image: "projects/advanced.png",
        projectDetail: "This project is my final thesis project. It is used for automate your plant watering system",
        technologiesUsed: [
            {
                tech: "Arduino"
            },
            {
                tech: "C#"
            },
            {
                tech: "C"
            },
            {
                tech: "Proteus"
            },
            {
                tech: "visual studio 2022"
            },
        ]
    },
    {
        id: 0,
        projectName: "Customer outdoor get system",
        url: "https://github.com/Deju12/project/tree/main/apparent%20project",
        image: "projects/oromia.png",
        projectDetail: "This project done in apparent time. It is used to give permission for Customers to enter the building.",
        technologiesUsed: [
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: "PHP"
            },
            {
                tech: "JavaScript"
            },
            {
                tech: "XAMPP"
            },
            {
                tech: "MYSQL"
            },
        ]
    },
    {
        id: 0,
        projectName: "MY First portfolio",
        url: "https://dejuportfolio.vercel.app/",
        image: "projects/portfolio.png",
        projectDetail: "this is my first portfolio i developed using React.js for frontend and django for backend email integration.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "Django"
            },
            {
                tech: "HTML"
            },
            {
                tech: "CSS"
            },
            {
                tech: "Django Restframework"
            },
        ]
    },
    {
        id: 0,
        projectName: "Al habesha foreign employment agency",
        url: "https://al-habesha.vercel.app/",
        image: "projects/alhabesha.png",
        projectDetail: "i create this website to test my self how i can create a website using Nextjs and tailwindcss",
        technologiesUsed: [
            {
                tech: "NEXTJS"
            },
            {
                tech: "TailwindCSS"
            },
           
        ]
    },
    
    // {
    //     id: 2,
    //     projectName: "Culyte",
    //     url: "https://culyte.com",
    //     image: "projects/culyte.png",
    //     projectDetail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corrupti aut veritatis, adipisci natus optio dolores cum rem? Aut perferendis fugit, eos rerum totam aspernatur iure alias temporibus ipsa perspiciatis!",
    //     technologiesUsed: [
    //         {
    //             tech: "ReactJS"
    //         },
    //         {
    //             tech: "NodeJS"
    //         },
    //         {
    //             tech: "Ant Design"
    //         },
    //         {
    //             tech: "TailwindCSS"
    //         },
    //     ]
    // },
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
