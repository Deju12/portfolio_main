// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Endris',
    image: "images/shahmr.jfif",
    designation: 'Head of electrical and computer engineering department at Samara University',
    view: "I am pleased to recommend Dejene Tesfaye, who developed an impressive 'Advanced Irrigation System' for the Samara University plant. As the head of the Electrical and Computer Engineering department, I have seen Dejene's exceptional technical skills and innovative approach firsthand. His dedication and problem-solving abilities were instrumental in the project's success, significantly improving water usage efficiency. Dejene is a talented engineer with a bright future ahead.👍! 🌟",
    linkednURL: "",
    contact: "Contact: +251 91 123 4567"
  },
  {
    id: 1,
    name: 'Zemzem husen',
    image: "images/siandar.jpeg",
    designation: 'Teacher at Samara University',
    view: "I am delighted to recommend Dejene Tesfaye, who has demonstrated exceptional skills and dedication in both his semester project titled 'SU Property Registration System' and his final project 'Advanced Plant Irrigation System' under my advisorship. Dejene's innovative approach and technical expertise were evident in both projects. His ability to tackle complex challenges and deliver high-quality results is truly commendable. I am confident that he will excel in his future endeavors.",
    linkednURL: "",
    contact: "Contact: +251 92 010 0142"
  },
  {
    id: 2,
    name: 'Rihana',
    image: "images/nair.jpg",
    designation: 'IT Support Specialist at Oromia Broadcasting Network',
    view: "I am pleased to recommend Dejene Tesfaye, who demonstrated exceptional skills and dedication while developing the 'Outdoor Gate System' project for Oromia Broadcasting Network (OBN). As an IT Support Specialist at OBN, I had the privilege of advising Dejene throughout this project. His innovative approach and technical expertise were evident as he tackled complex challenges and delivered high-quality results. Dejene's commitment and problem-solving abilities make him a valuable asset, and I am confident he will excel in his future endeavors.",
    linkednURL: "",
    contact: "Contact: +251 91 025 6470"
  },
  {
    id: 3,
    name: 'Estifanos',
    image: "images/muhmmad.jpeg",
    designation: 'senior IT support specialist at Commercial Bank of Ethiopia',
    view: "I am pleased to recommend Dejene Tesfaye, who has shown remarkable dedication and skill in understanding IT support and networking. As a Senior IT Support specialist at the Commercial Bank of Ethiopia (CBE), I had the opportunity to help Dejene gain practical knowledge in these areas. His eagerness to learn and ability to grasp complex concepts quickly were truly impressive. Dejene is a talented individual with a bright future in the field of IT.",
    linkednURL: "",
    contact: "Contact: +251 91 352 6783"
  },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
