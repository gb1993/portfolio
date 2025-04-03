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
import MenuIcon from "@mui/icons-material/Menu";
import AnimatedHamburgerButton from "../MenuHamburguer";

const FloatBar = () => {
  const { setColor, mode, toggleMode } = useColor();
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;

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
      <header className="lg:hidden fixed top-3 z-[11] right-4 animate-opacity-page">
        <AnimatedHamburgerButton />
      </header>
    </>
  );
};

export default FloatBar;
