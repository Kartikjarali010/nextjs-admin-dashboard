import * as Icons from "../icons";

export const NAV_DATA = [
  {
    label: "MAIN MENU",
    items: [
      {
        title: "Dashboard",
        url: "/",
        icon: Icons.HomeIcon,
        items: [],
      },
      {
        title: "Camera",
        url: "/camera",
        icon: Icons.CameraIcon,
        items: [
          {
            title: "StoreOps",
            url: "/storeops",
            icon: Icons.CameraIcon,
          },
          {
            title: "RevenueOps",
            url: "/revenueops",
            icon: Icons.CameraIcon,
          },
          {
            title: "ExperienceOps",
            url: "/experienceops",
            icon: Icons.CameraIcon,
          },
        ],
      },
      {
        title: "Reports",
        url: "/reports",
        icon: Icons.ReportsIcon,
        items: [],
      },
    ],
  },
];
