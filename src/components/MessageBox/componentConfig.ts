type MessageBoxDataType = {
  [id: string]: {
    title: string;
    description: string;
  };
};
export const MESSAGE_BOX_DATA: MessageBoxDataType = {
  home: {
    title: "Homepage",
    description: "A Software Engineer",
  },
  about: {
    title: "About",
    description: "Hi I'm Davit! a Software Engineer",
  },
  projects: {
    title: "Projects",
    description: "Check out my projects!",
  },
  contact: {
    title: "Contact",
    description:
      "Feel free to contact me any time. I'll respond as soon as possible",
  },
  studies: {
    title: "University",
    description: "Don't forget to, check out my course of Studies",
  },
};
