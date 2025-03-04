const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'I am educating myself on the processing of postgresql, nextjs, React.js, and django-based web applications.  In my expertise, I can provide a plan that provides different web solutions that will vary to customers.',
    },
   /* {
        id: 1,
        title: 'Scrum and Jira',
        desc: "As a developer, I'm proficient in Jira and Scrum methodologies. I use Jira to simplify project management tasks like task assignment, prioritization, and progress tracking. Scrum has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly.",
    },*/

    {
        id: 2,
        title: 'IT Support',
        desc: 'I have done my part by doing things like printer, copy machine and computer repair. I have also had a year of experience working in TNT.',
    },
    {
        id: 3,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
    {
        id: 4,
        title: 'Open Source Contributor',
        desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
