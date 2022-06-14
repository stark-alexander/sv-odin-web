import { MenuItem } from "@components/navbar/menu-item";

export const getMobileMenu = (): MenuItem[] => {
  return mobileMenu;
};

export const getMainMenu = (): MenuItem[] => {
  return mainMenu;
};

export const getBranchesMenu = () => {
  return sportMenu;
};

const vereinMenu: MenuItem[] = [
  {
    label: "Kontakt",
    href: "/kontakt",
  },
  {
    label: "Anfahrt",
    href: "/anfahrt",
  },
  {
    label: "Vorstand",
    href: "/vorstand",
  },
  {
    label: "Ansprechpartner",
    href: "/ansprechpartner",
  },
  {
    label: "Geschäftstelle",
    href: "/geschaeftsstelle",
  },
];

const sportMenu: MenuItem[] = [
  {
    label: "Rugby",
    href: "/rugby",
    children: [
      { label: "Rugby Herren", href: "/rugby-herren" },
      { label: "Rugby Damen", href: "/rugby-damen" },
      { label: "Rugby Jugend", href: "/rugby-jugend" },
    ],
  },
  {
    label: "Fußball",
    href: "/fussball",
    children: [
      {
        label: "Fußball Herren",
        href: "/fussball-herren",
      },
      {
        label: "Fußball Jugend",
        href: "/fussball-jugend",
      },
    ],
  },
  {
    label: "Handball",
    href: "/handball",
  },
  {
    label: "Volleyball",
    href: "/volleyball",
  },
  {
    label: "Korbball",
    href: "/korbball",
  },
  {
    label: "Pétanque",
    href: "/petanque",
  },
  {
    label: "Jugger",
    href: "/jugger",
  },
  {
    label: "Gymnastik & Gesundheit",
    href: null,
    children: [
      {
        label: "Nordic Walking",
        href: "/nordic-walking",
      },
      {
        label: "50 Plus",
        href: "/50-plus",
      },
      {
        label: "Senior Fit",
        href: "/senior-fit",
      },
      {
        label: "Kinderturnen",
        href: "/kinderturnen",
      },
      {
        label: "Eltern-Kind-Turnen",
        href: "/eltern-kind-turnen",
      },
    ],
  },
];

const mainMenu: MenuItem[] = [
  {
    label: "Neuigkeiten",
    href: "/news",
  },
  {
    label: "Gastronomie",
    href: "/gastronomie",
  },
  {
    label: "Downloads",
    href: null,
    children: [
      {
        label: "Odin Reports",
        href: "/reports",
      },
      {
        label: "Formulare",
        href: "/downloads",
      },
    ],
  },
  {
    label: "Kontakt",
    href: "/kontakt",
  },
];

const mobileMenu: MenuItem[] = [
  {
    label: "Neuigkeiten",
    href: "/news",
  },
  {
    label: "Sportangebot",
    href: null,
    children: sportMenu,
  },
  {
    label: "Gastronomie",
    href: "/gastronomie",
  },
  {
    label: "Downloads",
    href: null,
    children: [
      {
        label: "Odin Report",
        href: "/reports",
      },
      {
        label: "Formulare",
        href: "/downloads",
      },
    ],
  },
  {
    label: "Kontakt",
    href: "/kontakt",
  },
];
