/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Qianli Wu",
  title: "Hi all, I'm Qianli",
  subTitle0: " ",
  subTitle1: 
    "I am a problem-solver with a passion for computer science! 🍻\
    I enjoy staying current on industry trends and improving my skills through hands-on projects and, \
  last but not least, I also enjoy playing strategy games! 🤩",
  subTitle2: "My technical expertise includes proficiency in Python and C/C++. \
  I have experience working with deep learning and development tools,\
   e.g. Pytorch, React.js, Firebase, etc.🔥🔥🔥 \
   ",
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Qianli-Wu",
  linkedin: "https://www.linkedin.com/in/qianli-wu/",
  gmail: "qianliwu@g.ucla.edu",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fa-solid fa-code"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "pytorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "padddlepaddle",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "google-cloud", 
      fontAwesomeClassname: "fab fa-google"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "UCLA",
      logo: require("./assets/images/uclaLogo.png"),
      subHeader: "B.S. in Mathematics of Computation",
      minor: "Minor in Statistics and Data Science",
      duration: "September 2021 - Dec 2023",
      desc: "Honors Program, GPA 3.94",
      descBullets: [
        "Dean's Honor List from Fall 2021 to Spring 2023",
        "Web Chair at UPE (honor society for the Computing and Information Disciplines)",
        "PIC 10C (Advanced Programming (C++)) course reader",
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "80%"
    },
    {
      Stack: "Deep Learning",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Learning Assistant",
      company: "UCLA",
      companylogo: require("./assets/images/ucla-logo-circle.png"),
      date: "Sep 2022 – Present",
      desc: "",
      descBullets: [
        "Facilitate collaborative and inclusive learning in Software Construction (CS 35L)",
        "Discuss with course instructor and TAs in weekly meetings",
        "Conduct workshops; introduce Javascript, React and other web-development technologies."
      ]
    },
    {
      role: "Research Intern",
      company: "Baidu",
      companylogo: require("./assets/images/baiduLogo.jpg"),
      date: "Jun 2022 – Sep 2022",
      desc: "",
      descBullets: [
        "Optimized Simple Spectural Graph Attention Network",
        "Implemented baselines of a newly proposed Federated Learning model",
        "Convert a Federated Learning model from Pytorch code to Paddlepaddle code"
      ]
    },
    {
      role: "Frontend Engineer Intern",
      company: "Computer Network Information Center, Chinese Academy of Science",
      companylogo: require("./assets/images/casLogo.jfif"),
      date: "Jun 2021 – Sep 2021",
      desc: "",
      descBullets: [
        "Collaborated with 2 engineers to make the front-end of a data collection system; Eenabled auto generation of interactive charts",
        "Extracted and analyzed large datasets with 200,000 observations and 100 variables to evaluate 104 institutions and visualized data by Apache ECharts"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/dino.png"),
      projectName: "Web server",
      projectDesc: "A dinosour game on web server built with C++",
      footerLink: [
        {
          name: "Start Game!",
          url: "http://dino.sudo-rm-rf.cs130.org/dino/"
        },
        {
          name: "Leaderboard",
          url: "http://dino.sudo-rm-rf.cs130.org/leaderboard/",
        }
      ]
    },
    {
      image: require("./assets/images/bruintradeLogo.png"),
      projectName: "BruinTrade",
      projectDesc: "A trading platform for UCLA community",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.bruintrade.com"
        }
      ]
    },
    {
      image: require("./assets/images/white_cryptoswapLogo.png"),
      projectName: "CryptoSwap",
      projectDesc: "A scalable decentralized exchange",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://cryptoswap.org/"
        }
        //  you can add extra buttons here.
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Publications 🏆 "),
  subtitle:
    "",

  achievementsCards: [
    // {
    //   title: "Google Code-In Finalist",
    //   subtitle:
    //     "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
    //   image: require("./assets/images/codeInLogo.webp"),
    //   imageAlt: "Google Code-In Logo",
    //   footerLink: [
    //     {
    //       name: "Certification",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
    //     },
    //     {
    //       name: "Award Letter",
    //       url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
    //     },
    //     {
    //       name: "Google Code-in Blog",
    //       url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
    //     }
    //   ]
    // },
    {
      title: "Explainable Molecular Concept Learning with Large Language Models (XAI4Sci@AAAI 2024)",
      subtitle:
        "Qianli Wu*, Shichang Zhang*, Botao Xia, Zimin Zhang, Fang Sun, Ziniu Hu, Yizhou Sun (*equal contribution)",
      image: require("./assets/images/approach1.png"),
      imageAlt: "Workflow",
      footerLink: [
        {
          name: "PDF (to be released)",
          url: ""
        }
      ]
    },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
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
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
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
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1-0000000000",
  email_address: "qianliwu@ucla.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable
};
