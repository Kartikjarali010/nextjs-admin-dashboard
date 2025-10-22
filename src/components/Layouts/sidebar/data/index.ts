import * as Icons from "../icons";

interface NavItem {
  title: string;
  url: string;
  icon: any;
  items?: any[];
}

interface NavSection {
  label: string;
  items: NavItem[];
}

export const NAV_DATA: NavSection[] = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Dashboard",
        url: "/",
        icon: Icons.HomeIcon,
        items: undefined,
      },
      {
        title: "Camera",
        url: "/camera",
        icon: Icons.CameraIcon,
        items: undefined,
      },
      {
        title: "StoreOps",
        url: "/storeops",
        icon: Icons.CameraIcon,
        items: undefined,
      },
      {
        title: "RevenueOps",
        url: "/revenueops",
        icon: Icons.CameraIcon,
        items: undefined,
      },
      {
        title: "ExperienceOps",
        url: "/experienceops",
        icon: Icons.CameraIcon,
        items: undefined,
      },
      {
        title: "Reports",
        url: "/reports",
        icon: Icons.ReportsIcon,
        items: undefined,
      },
    ],
  },
];
