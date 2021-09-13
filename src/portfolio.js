/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Madelin Capellan",
  title: "Hi all, I'm Maddie",
  subTitle: emoji(
    "Some Awesome Presentation Here 😎"
  ),
  resumeLink: "https://drive.google.com/file/d/1s_ikTQjhIf0flwMjlWKgblZxcuvdBzb_/view",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "",
  linkedin: "",
  gmail: "",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram and Twitter are also supported in the links!
  display: false // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Some Awesome Skills Here 😎",
  skills: [
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Windows",
      fontAwesomeClassname: "fab fa-windows"
    },
    {
      skillName: "Word",
      fontAwesomeClassname: "fas fa-file-word"
    },
    {
      skillName: "Excel",
      fontAwesomeClassname: "fas fa-file-excel"
    },
    {
      skillName: "PowerPoint",
      fontAwesomeClassname: "fas fa-file-powerpoint"
    },
    {
      skillName: "Oracle",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PowerBI",
      fontAwesomeClassname: "fas fa-chart-pie"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad Dominicana O&M",
      logo: require("./assets/images/O&M-Logo.jpg"),
      subHeader: "Bachelor in Systems Engineering",
      duration: "2016 - 2021",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "Instituto Politécnico El Ave Maria",
      logo: require("./assets/images/School-Logo.jpg"),
      subHeader: "Bachelor in Computer Science",
      duration: "2012 - 2015",
      desc: "",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "", //Insert stack or technology you have experience in
      progressPercentage: "0%" //Insert relative proficiency in percentage
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Cashier",
      company: "Banco Popular Dominicano",
      companylogo: require("./assets/images/BPD-Logo.jpg"),
      date: "June 2018 – Present",
      desc: "",
      descBullets: []
    },
    {
      role: "Customer Service",
      company: "Papeleria Analisiana",
      companylogo: require("./assets/images/Dominican-Republic-Flag.png"),
      date: "June 2018 – Present",
      desc: "",
      descBullets: []
    },
    {
      role: "Customer Service",
      company: "Boligrafos Dominicanos",
      companylogo: require("./assets/images/Dominican-Republic-Flag.png"),
      date: "June 2018 – Present",
      desc: "",
      descBullets: []
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:"",
  achievementsCards: [
    // {
    //   title: "Remote Work and Virtual Collaboration Certificate (RWVCPC)",
    //   subtitle: "CertiProf",
    //   image: require("./assets/images/RWVCPC_CertiProf-Badge.webp"),
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://certiprof.com/pages/remote-work-and-virtual-collaboration-certificate-rwvcpc"
    //     }
    //   ]
    // },
    // {
    //   title: "Scrum Foundation (SFPC)",
    //   subtitle: "CertiProf",
    //   image: require("./assets/images/SFPC-CertiProf-Badge.webp"),
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://certiprof.com/pages/scrum-foundations-professional-certificate-sfpc-english"
    //     }
    //   ]
    // },
    {
      title: "Cyber Security Foundation (CFSP)",
      subtitle: "CertiProf",
      image: require("./assets/images/CSFPC-CertiProf-Badge.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://certiprof.com/pages/cyber-security-foundation-csfpc"
        }
      ]
    },
    {
      title: "PowerBI For Starters",
      subtitle: "LinkedIn Learning",
      image: require("./assets/images/LinkedIn-Learning-Logo.png"),
      footerLink: [
        {
          name: "Course",
          url: "https://www.linkedin.com/learning/"
        }
      ]
    },
    {
      title: "Cybersecurity, Networking & Web",
      subtitle: "LinkedIn Learning",
      image: require("./assets/images/LinkedIn-Learning-Logo.png"),
      footerLink: [
        {
          name: "Course",
          url: "https://www.linkedin.com/learning/"
        }
      ]
    },
    {
      title: "Introduction To Networks",
      subtitle: "CTC",
      image: require("./assets/images/CTC-Logo.png"),
      footerLink: [
        {
          name: "Program",
          url: "https://ctc.edu.do/"
        }
      ]
    },
    {
      title: "Database Oracle & PL/SQL",
      subtitle: "República Digital",
      image: require("./assets/images/Republica-Digital-Logo.jpg"),
      footerLink: [
        {
          name: "Program",
          url: "https://republicadigital.gob.do"
        }
      ]
    },
    {
      title: "Immersion English",
      subtitle: "MESCyT",
      image: require("./assets/images/MESCYT-Logo.png"),
      footerLink: [
        {
          name: "Program",
          url: "https://mescyt.gob.do/ingles-de-inmersion/"
        }
      ]
    },
    {
      title: "IT Technical Analyst",
      subtitle: "Fundación Carlos Slim",
      image: require("./assets/images/Fundacion-Carlos-Slim-Logo.jpg"),
      footerLink: [
        {
          name: "Course",
          url: "https://fundacioncarlosslim.org/"
        }
      ]
    },
    {
      title: "Computer Security Technician",
      subtitle: "Fundación Carlos Slim",
      image: require("./assets/images/Fundacion-Carlos-Slim-Logo.jpg"),
      footerLink: [
        {
          name: "Course",
          url: "https://fundacioncarlosslim.org/"
        }
      ]
    },
    {
      title: "Office and Customer Service",
      subtitle: "Kuepa",
      image: require("./assets/images/Kuepa-Logo.webp"),
      footerLink: [
        {
          name: "Course",
          url: "https://www.kuepa.com/do"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "",
      title: "",
      description: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 💌"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  //number: "",
  email_address: "madelincapellan23@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
