import Memoji from "../images/Me.gif";
import Circle from "../images/Circle.svg";
import MyPhoto from "../images/PhotoMe.png";

import earth from "../images/emojis/earth.png";
import english from "../images/emojis/english.png";
import film from "../images/emojis/film-frames.png";
import portugues from "../images/emojis/portugues.png";
import spain from "../images/emojis/spain.png";

import ribeiro from "../images/ribeiro.png";
import churro from "../images/churro.png";

export const NavInfo = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About me",
    path: "about-me",
  },
  {
    name: "Contact me",
    path: "mailto:angela.laspriella@gmail.com?subject=Hello!",
  },
];

// -------------- Intro ---------------

export const IntroText = [
  {
    text: "I've recently graduated from college with a bachelor degree in Design & Multimedia. I've been designing digital products inside and outside the academic world, being the most recent experience my current internship at Fjord - Accenture Interactive's hub specialized in service and experience design.",
    margin: "false",
  },
  {
    text: "Take a look at my projects :)",
    margin: "true",
  },
];

// -------------- About Me ---------------

export const AboutMeIntro = {
  text: [
    "Hello there!!",
    <br />,
    "I'm Angela Laspriella, huge dog lover 🐶. I am currently an Intern at Fjord - Accenture Interactive, where I'm  focusing on developing and mastering my skills and increase my knowledge on Product Design.",
    <br />,
    "In college I joined jeKnowledge - a Junior Enterprise company - as a designer. This experience gave me opportunities who work on multiple projects where I got feedback from clients on first hand. JeKnowledge was also the place where I discovered my love for Product Design.",
    <br />,
    "Funny plotwist: I'm also a front-end enthusiast. I've successfully developed projects using HTML, CSS, and most recently React.js. Keeping track with new technologies and frameworks makes a difference when it comes to creating realistic and well-designed products.",
  ],
  img: Memoji,
  first: true,
};

// -------------- CV

export const ExperienceCV = [
  {
    maintitle: "Experience",
  },
  {
    title: "Intern  — ",
    subtitle: "Fjord, Part of Accenture Interactive",
    text: "Currently building web projects focused on UX/UI design discipline alongside Product Designers, Brand Designers, Engineers and stakeholders.",
    extras: "Remote • Sep 2021 - Present ",
    linkName: "FJORD LISBON",
    path: "https://www.fjordnet.com/offices/lisbon/",
  },
  {
    title: "Senior Designer  — ",
    subtitle: "jeKnowledge FCTUC's Junior Enterprise ",
    text: "Developed several internal and external projects in different design diciplines, such as Graphic Design, Product Design and Front-end Development. \n Helped create the Design and Protocol documentation, which provides guidance for designers, and also describes how to conduct organized and efficient design processes within the company.",
    extras: "Coimbra, Portugal • Apr 2020 - Jan 2022",
    linkName: "jeKnowledge",
    path: "https://jeknowledge.pt",
  },
  {
    title: "Image Department's Coordinator  — ",
    subtitle: "Shift APPens",
    text: "Shift APPens is a hackathon created by students. We've successfully accomplished the transition from a on-site to a remote hackathon for the 7th edition. \n Image Department revamped the brand as well as additional assets. Had the opportunity to coordinated the design team on multipe design disciplines that the department was responsible for, such as graphics, video, motion, branding and web. ",
    extras: "Coimbra, Portugal • Sep 2020 - Apr 2021",
    linkName: "Shift APPens 2021",
    path: "https://2021.shiftappens.com",
  },
  {
    title: "Image Department's Collaborator  — ",
    subtitle:
      "Núcleo de Estudantes de Informática da Associação Académica de Coimbra",
    text: "Helped the design team create social media publications        and posters for the multiple events.",
    extras: "Coimbra, Portugal • Apr 2020 - Jun 2021",
    linkName: "DEI/AAC",
    path: "https://www.instagram.com/neiaac/",
  },
];

export const ExtrasCV = [
  {
    maintitle: "Education",
  },
  {
    title: "Bachelor's Degree in Design and Multimedia  — ",
    subtitle: "University of Coimbra",
    extras: "2018 - 2021",
  },
  {
    maintitle: "Certificates",
  },
  {
    title: "advanced photoshop  — ",
    subtitle: "FLAG",
    extras: "Issued Nov 2017",
  },
  {
    title: "Digital Graphic Techniques  — ",
    subtitle: "CENTRO DE DISEÑO DIGITAL A.C.",
    extras: "Issued Oct 2014",
  },
];

// -------------- Extras

export const Extras = [
  {
    emoji: earth,
    text: "Based in Portugal",
  },
  {
    emoji: english,
    emojiTwo: spain,
    emojiThree: portugues,
    text: "3 Languages",
  },
  {
    emoji: film,
    text: "Analog noob",
  },
];

export const WhyInfo = {
  title: "Why Product Design?",
  text: [
    "I love all the product solving situation and the feeling of achievement where you improve the user experience and condition. Plus, I'm a huge visual nerd and love creating interfaces where I can drain my creativity and perfect the functionality of a product.",
    <br />,
    "I also believe Product Design is a huge tool that will keep improving people's lives, standing side by side with current and new technologies and making these not only functional and clean but also very pretty, because who doesn't love pretty functional things?",
  ],
  img: Circle,
  first: false,
};

export const WhyMe = {
  title: "Why me?",
  text: [
    "My biggest strength is my passion, this is the energy that keeps me going. I'm really passionate about the projects I'm involved and this gives me the motivation I need to keep improving them at its finest and making them the best version they can possible be.",
    <br />,
    "I really enjoy working on a team with people from different backgrounds and areas as long as we are organized and theres good communication. I focus on the user interests and goals, and I'm always pushing myself to keep track of the latest trends and techniques.",
  ],
  img: MyPhoto,
  first: true,
};

export const OtherPeople = [
  {
    text: "“Angela is definitely the type of person you would want on your team. She is proactive, self driven, always gets the job done and often goes the extra mile to achieve an amazing work. The pleasure and dedication with which she faces each challenge results in a work of excellence.”",
    position: "jeKnowledge Design Coordinator",
    name: "Diogo Ribeiro",
    pathOne: "",
    pathTwo: "",
    img: ribeiro,
  },
  /* {
    text: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus condimentum hendrerit fermentum sit nec. Non mauris lectus egestas nisi. Adipiscing sit quam vel malesuada praesent convallis mi. Iaculis lorem enim faucibus aliquet accumsan tempor ac aliquet.”",
    position: "Fjord",
    name: "João Valente",
    pathOne: "",
    pathTwo: "",
    img: not,
  }, */
  {
    text: "“Angela, while part of the NEI/AAC Imaging Portfolio, was crucial in maintaining the high graphic quality by which the NEI/AAC is governed, and, consequently, was essential to the success of the two terms in which she was present. All the images she created presented an important sense of visual aesthetics, and she always was capable of redefining and reinventing nei/AAC's graphic identity so it could hit levels that drew a lot of attention. As Coordinator of the Image Department, that is a part of the 2021 Edition Organizing Committee of Shift APPens, also presented a great ability to work under pressure and lead a team in an edition of the event that, by its transition to an online format, it required enormous innovation and workload at the level of her Department.”",
    position: "NEI/AAC Image Department's Coordinator",
    name: "Pedro Churro",
    pathOne: "",
    pathTwo: "",
    img: churro,
  },
];
