const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Samara University',
                degree: 'BS, Electrical and Computer Engineering',
                detail: "I have a BSC Degree in electrical and computer engineering, Computer stream with 3.75 CGPA and 80% exit exam result",
                year: '2019 - 2023'
            },
            {
                id: 1,
                title: 'Cisco Networking Acadamy',
                degree: 'Cirtificate, IT Essentials and CCNA Networking',
                detail: "I have two certificates by IT Essentials and CCNA Networking from cisco acadamy",
                year: 'Nev 2021 - Jun 2023'
            },
            {
                id: 2,
                title: 'Satcom Institute of Technology',
                degree: 'Cirtificate, office machine maintenance',
                detail: "I cirtified in office machine maintenance from SATCOM INSTUTE OF TECHNOLOGY, and now i am working in TNT as IT support",
                year: 'April 2024 -  Sep 2024'
            },
            {
                id: 3,
                title: 'Preparatory School',
                degree: 'Abomsa Preparatory School',
                detail: "From grade 11 to 12 i am studied in oromia region Abomsa Town. And my University enterance exam result is 372",
                year: '2017 - 2018'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'TNT Constraction And Trading',
                role: 'IT Support Specialist,',
                url: 'Permanent Worker',
                desc: "I have not work only as IT support , I worked as camera man and i am dynamic worker in this organization",
                year: 'Jun 2024 – present',
                location: 'Addis Abeba, Ayat, Ethiopia'
            },
            {
                id: 2,
                title: 'Oromia Broadcasting Network',
                role: 'Website Developer',
                url: 'Internship',
                desc: 'I have done custemor outdoor get system website using php, html, css, javascript and xammp server for oromia brodcasting network company. now it is working by local server.',
                year: 'Oct 2023 - Feb 2023',
                location: 'Adama, Ethiopia'
            },
            {
                id: 3,
                title: 'By teaching myselves',
                role: 'Fullstack Development',
                url: 'teaching myselves',
                desc: 'I learned by myself some programming languages like python and now i have working on some projects like todo webapp, store managment, property registration system.',
                year: '02/2024 - Present',
                location: 'Addis Abeba, Ethiopia'
            },
            {
                id: 4,
                title: 'Commercial Bank Of Ethiopia',
                role: 'IT Technician',
                url: 'Internship',
                desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
                year: 'Oct 2023 - Feb 2023',
                location: 'Adama, Ethiopia'
            },
           

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
