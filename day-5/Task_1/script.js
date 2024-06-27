
console.log("Gowtham Siddharthan's curriculum vitae in JSON Format");
const resume = {
  personalInformation: {
    firstName: "Gowtham Siddharthan",
    lastName: "Rasu",
    email: "gowthamsiddharthan88@gmail.com",
    address: "01, main road, Kariyamanickam,pondicherry",
  },
  objective:
    "To associate with an organization which progresses dynamically and gives me a chance to update my knowledge and enhance my skills, to serve the firm to the best of my efforts and to have self- satisfaction on my work.",
  education: [
    {
      degree: "Bachelor of Technology",
      institution: "Manakula Vinayagar Institute of Technology, Puducherry",
      graduation: "2018",
    },
    {
      school: "HSC",
      institution: "Holy Flowers Higher Secondary School",
      graduation: "2014",
    }
    
  ],
  workExperience: [
    {
      position: "Developer",
      company: "TCS",
    },
    {
      position: "IT Administrator",
      company: "simsona technologies",
    },
  ],
  certificationAndCredentials: [
    {
      title: " core java",
      authorizedby: "Chakrika Info Solutions, Puducherry",

    },
    {
      title: "Block Worrier robotics",
      authorizedby: "IIT Bombay in Mumbai",
    },

  ],
};

console.log(resume);
