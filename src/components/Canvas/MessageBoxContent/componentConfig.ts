type MessageBoxDataType = {
  [id: string]: {
    title: string;
    description: string;
    button: string;
  };
};
export const MESSAGE_BOX_DATA: MessageBoxDataType = {
  "career-path": {
    title: "Career Path",
    description: "Take a look at me journey",
    button: "Read more",
  },
  about: {
    title: "About",
    description: "Hi I'm Davit! a Software Engineer",
    button: "Read more",
  },
  projects: {
    title: "Projects",
    description:
      "\nReady to join the digital journey with me?!\n           Then check out my projects ",
    button: "Read more",
  },
  contact: {
    title: "Contact",
    description:
      "\n     Feel free to contact me at any time.\n I'll respond as soon as I fix all the bugs :D",
    button: "Read more",
  },
  education: {
    title: "Education",
    description:
      "\n'Computer Science and Intelligent Systems'\n          Take a look ay my course of Studies",
    button: "Read more",
  },
};
