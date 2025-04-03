"use client";

import { usePathname } from "next/navigation";
import { useColor } from "../../context/ColorContext";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import DarModeIcon from "./DarkModeIcon";
import {
  floatBarItemCss,
  floatBarItemTitleCss,
  iconContentCss,
  themes,
} from "@/utils/consts";
import Link from "next/link";
import AnimatedHamburgerButton from "../MenuHamburguer";
import Drawer from "../Drawer";
import { DrawerProvider } from "@/context/DrawerContext";

const FloatBar = () => {
  const { setColor, mode, toggleMode } = useColor();
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const title = [
    { link: "/", text: "HOME", highlight: "" },
    { link: "/sobre", text: "SOBRE", highlight: "MIM" },
    { link: "/trabalhos", text: "MEU", highlight: "PORTFÓLIO" },
    { link: "/contato", text: "FALE", highlight: "COMIGO" },
  ];
  const currentTitle = title.find((item) => item.link === pathname);
  const headerMobileBG = `${
    mode === "dark" ? "bg-black-secondary" : "bg-white"
  }`;
  const headerMobileCss = `${headerMobileBG} w-full flex items-center justify-between lg:hidden fixed top-0 z-[11] animate-opacity-page py-2 px-4 border-b border-dark-or-light-secondary`;
  return (
    <>
      <header className="hidden lg:block fixed top-1/2 right-4 -translate-y-1/2 z-10 animate-opacity-page">
        <ul className="flex flex-col gap-4 items-center">
          <li>
            <Link href="/" className={`group ${floatBarItemCss}`}>
              <h2 className={floatBarItemTitleCss}>HOME</h2>
              <div
                className={`${iconContentCss} ${
                  isActive("/") ? "bg-primary" : "bg-black-secondary"
                }`}
              >
                <HomeIcon sx={{ fontSize: "26px" }} />
              </div>
            </Link>
          </li>
          <li>
            <Link href="/sobre" className={`group ${floatBarItemCss}`}>
              <h2 className={floatBarItemTitleCss}>SOBRE</h2>
              <div
                className={`${iconContentCss} ${
                  isActive("/sobre") ? "bg-primary" : "bg-black-secondary"
                }`}
              >
                <PersonIcon sx={{ fontSize: "28px" }} />
              </div>
            </Link>
          </li>
          <li>
            <Link href="/trabalhos" className={`group ${floatBarItemCss}`}>
              <h2 className={floatBarItemTitleCss}>TRABALHOS</h2>
              <div
                className={`${iconContentCss} ${
                  isActive("/trabalhos") ? "bg-primary" : "bg-black-secondary"
                }`}
              >
                <BusinessCenterIcon sx={{ fontSize: "26px" }} />
              </div>
            </Link>
          </li>
          <li>
            <Link href="/contato" className={`group ${floatBarItemCss}`}>
              <h2 className={floatBarItemTitleCss}>CONTATO</h2>
              <div
                className={`${iconContentCss} ${
                  isActive("/contato") ? "bg-primary" : "bg-black-secondary"
                }`}
              >
                <EmailIcon sx={{ fontSize: "26px" }} />
              </div>
            </Link>
          </li>

          <li className={`group ${floatBarItemCss} flex`}>
            <ul className={floatBarItemTitleCss}>
              {themes.map((theme, index) => (
                <li
                  key={index}
                  className="w-6 h-6 border cursor-pointer"
                  style={{ background: theme.color }}
                  onClick={() => setColor(theme.value)}
                />
              ))}
            </ul>
            <div className="flex items-center justify-center w-full h-full z-[2] bg-black-secondary rounded-full group-hover:bg-primary duration-400">
              <SettingsIcon
                className="animate-spin"
                sx={{ fontSize: "26px" }}
              />
            </div>
          </li>

          <li className={`group ${floatBarItemCss}`} onClick={toggleMode}>
            <div className="flex items-center justify-center w-full h-full z-[2] bg-black-secondary rounded-full group-hover:bg-primary duration-400">
              <DarModeIcon darkMode={mode === "dark"} />
            </div>
          </li>
        </ul>
      </header>
      <header className={headerMobileCss}>
        <h1 className="text-dark-or-light-secondary text-2xl font-extrabold">
          {currentTitle ? currentTitle.text : "HOME"}
          <span className="text-primary ml-2">
            {currentTitle ? currentTitle.highlight : ""}
          </span>
        </h1>
        <DrawerProvider>
          <AnimatedHamburgerButton />
          <Drawer bg={headerMobileBG} />
        </DrawerProvider>
      </header>
    </>
  );
};

export default FloatBar;
