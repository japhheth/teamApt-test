import { FaThLarge } from "react-icons/fa";

import {
  BsFillBarChartFill,
  BsFolder,
  BsClockHistory,
  BsStopwatch,
  BsGearWideConnected,
} from "react-icons/bs";

export const navigationLinks = [
  {
    name: "Dashboard",
    icon: FaThLarge,
  },
  {
    name: "Analytics",
    icon: BsFillBarChartFill,
  },
  {
    name: "Projects",
    icon: BsFolder,
  },
  {
    name: "Tracking",
    icon: BsStopwatch,
  },
  {
    name: "History",
    icon: BsClockHistory,
  },
  {
    name: "Setting",
    icon: BsGearWideConnected,
  },
];

export const days = ["S", "M", "T", "W", "T", "F", "S"];
export const colors = [
  "rgba(29, 92, 252,1)",
  "rgba(253, 126, 46,1)",
  "rgba(249, 208, 24,1)",
  "rgba(27, 211, 252,1)",
  "rgba(19, 30, 58,1)",
];

export const lightColors = [
  "rgba(29, 92, 252,0.3)",
  "rgba(253, 126, 46,0.3)",
  "rgba(249, 208, 24,0.3)",
  "rgba(27, 211, 252,0.3)",
  "rgba(19, 30, 58,0.3)",
];

export function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomStaffDetails = [
  { name: "Japheth O.", role: "Frontend Engineer", task: "Login page imp" },
  { name: "Johnson E.", role: "UI Designer", task: "Dashboard design" },
  { name: "Mercy A.", role: "Product Manager", task: "Review Payment flow" },
  { name: "Kelvin J.", role: "Frontend Engineer", task: "App test case" },
  { name: "Emmanuel E.", role: "UI Designer", task: "How it works page" },
  { name: "Taiwo A.", role: "Product Manager", task: "Review reversal flow" },
  {
    name: "Paul O.",
    role: "Backend Engineer",
    task: "Transactions table setup",
  },
  { name: "Blessing E.", role: "UI Designer", task: "Not found page" },
  {
    name: "Kingsley A.",
    role: "Product Manager",
    task: "Review bank transfer flow",
  },
  { name: "Mark E.", role: "Backend Engineer", task: "Charges implementation" },
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
