type MessageBoxDataType = {
  [id: string]: {
    title: string;
    description: string;
  };
};
export const MESSAGE_BOX_DATA: MessageBoxDataType = {
  home: {
    title: "Career Path",
    description: "Take a look at me journey",
  },
  about: {
    title: "About",
    description: "Hi I'm Davit! a Software Engineer",
  },
  projects: {
    title: "Projects",
    description: "\n   Join the digital journey\nand check out my projects",
  },
  contact: {
    title: "Contact",
    description:
      "\n     Feel free to contact me at any time.\n I'll respond as soon as I fix all the bugs :D",
  },
  studies: {
    title: "Education",
    description:
      "\n      'Computer Science and Intelligent Systems'\nDon't forget to, take a look ay my course of Studies",
  },
};
