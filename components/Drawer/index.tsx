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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { themes } from "@/utils/consts";

interface DrawerProps {
  bg: string;
}

const Drawer = ({ bg }: DrawerProps) => {
  const { active } = useDrawerContext();
  const { setColor, mode, toggleMode } = useColor();
  const drawerItem = `text-dark-or-light-secondary flex items-center gap-2 py-4 cursor-pointer`;
  const drawerItemLink = `text-dark-or-light-secondary flex items-center gap-2`;

  return (
    <aside
      style={{ transition: "all 0.4s ease-in-out" }}
      className={`${bg} absolute z-[2] p-4 top-[67px] ${
        active ? "left-0" : "left-full"
      } w-full h-dvh`}
    >
      <ul className="divide-dark-or-light-secondary divide-y">
        <li className={drawerItem}>
          <Link href={"/"} className={drawerItemLink}>
            <HomeIcon
              className="text-dark-or-light-secondary"
              sx={{ fontSize: "26px" }}
            />
            HOME
          </Link>
        </li>
        <li className={drawerItem}>
          <Link href={"/sobre"} className={drawerItemLink}>
            <PersonIcon
              className="text-dark-or-light-secondary"
              sx={{ fontSize: "26px" }}
            />
            SOBRE
          </Link>
        </li>
        <li className={drawerItem}>
          <Link href={"/trabalhos"} className={drawerItemLink}>
            <BusinessCenterIcon
              className="text-dark-or-light-secondary"
              sx={{ fontSize: "26px" }}
            />
            TRABALHOS
          </Link>
        </li>
        <li className={drawerItem}>
          <Link href={"/contato"} className={drawerItemLink}>
            <EmailIcon
              className="text-dark-or-light-secondary"
              sx={{ fontSize: "26px" }}
            />
            CONTATO
          </Link>
        </li>
        <li className={drawerItem}>
          <details open={true} className="w-full">
            <summary className="flex items-center gap-2 cursor-pointer text-dark-or-light-secondary">
              <SettingsIcon
                className="animate-spin text-dark-or-light-secondary"
                sx={{ fontSize: "26px" }}
              />
              CORES
              <ExpandMoreIcon className="ml-auto text-dark-or-light-secondary" />
            </summary>
            <ul className="flex items-center gap-4 my-4 pl-9">
              {themes.map((theme, index) => (
                <li
                  key={index}
                  className="w-6 h-6 border cursor-pointer text-dark-or-light-secondary"
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
