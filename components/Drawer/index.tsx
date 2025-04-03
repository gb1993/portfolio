import { useDrawerContext } from "@/context/DrawerContext";
import Link from "next/link";
import React from "react";
import DarModeIcon from "../FloatBar/DarkModeIcon";
import { useColor } from "@/context/ColorContext";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import { themes } from "@/utils/consts";

const Drawer = () => {
  const { active } = useDrawerContext();
  const { setColor, mode, toggleMode } = useColor();

  const drawerItem = "flex items-center gap-4 py-4 text-white";
  const drawerItemLink = "text-white flex items-center gap-4";

  return (
    <aside
      style={{ transition: "right 0.5s ease-in-out" }}
      className={`absolute z-10 py-13 px-4 ${
        active ? "-right-4" : "-right-[410px]"
      } bg-black-secondary w-dvw h-dvh`}
    >
      <ul className="divide-dark-or-light-secondary divide-y">
        <li className={drawerItem}>
          <Link href={"/"} className={drawerItemLink}>
            <HomeIcon sx={{ fontSize: "26px" }} />
            HOME
          </Link>
        </li>
        <li className={drawerItem}>
          <Link href={"/sobre"} className={drawerItemLink}>
            <PersonIcon sx={{ fontSize: "26px" }} />
            SOBRE
          </Link>
        </li>
        <li className={drawerItem}>
          <Link href={"/trabalhos"} className={drawerItemLink}>
            <BusinessCenterIcon sx={{ fontSize: "26px" }} />
            TRABALHOS
          </Link>
        </li>
        <li className={drawerItem}>
          <Link href={"/contato"} className={drawerItemLink}>
            <EmailIcon sx={{ fontSize: "26px" }} />
            CONTATO
          </Link>
        </li>
        <li className={drawerItem}>
          <details className="w-full">
            <summary className="flex items-center gap-4 cursor-pointer">
              <SettingsIcon
                className="animate-spin"
                sx={{ fontSize: "26px" }}
              />
              CORES
            </summary>
            <ul className="flex items-center gap-4 my-4 pl-12">
              {themes.map((theme, index) => (
                <li
                  key={index}
                  className="w-6 h-6 border cursor-pointer"
                  style={{ background: theme.color }}
                  onClick={() => setColor(theme.value)}
                />
              ))}
            </ul>
          </details>
        </li>
        <li className={drawerItem} onClick={toggleMode}>
          <DarModeIcon darkMode={mode === "dark"} />
          {mode === "dark" ? "LIGAR LUZES" : "APAGAR LUZES"}
        </li>
      </ul>
    </aside>
  );
};

export default Drawer;
