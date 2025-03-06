import { useColor } from "../../context/ColorContext";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import DarModeIcon from "./DarkModeIcon";
import { floatBarItemCss, floatBarItemTitleCss, themes } from "../../consts";

const FloatBar = () => {
  const { setColor, mode, toggleMode } = useColor();

  return (
    <header className="fixed top-1/2 right-4 -translate-y-1/2 z-10">
      <ul className="flex flex-col gap-4 items-center">
        <li>
          <a href="/" className={`group ${floatBarItemCss}`}>
            <h2 className={floatBarItemTitleCss}>HOME</h2>
            <div
              className={
                "flex items-center justify-center w-full h-full z-[2] bg-black-secondary rounded-full group-hover:bg-primary duration-400"
              }
            >
              <HomeIcon sx={{ fontSize: "26px" }} />
            </div>
          </a>
        </li>
        <li>
          <a href="/" className={`group ${floatBarItemCss}`}>
            <h2 className={floatBarItemTitleCss}>SOBRE</h2>
            <div
              className={
                "flex items-center justify-center w-full h-full z-[2] bg-black-secondary rounded-full group-hover:bg-primary duration-400"
              }
            >
              <PersonIcon sx={{ fontSize: "28px" }} />
            </div>
          </a>
        </li>
        <li>
          <a href="/" className={`group ${floatBarItemCss}`}>
            <h2 className={floatBarItemTitleCss}>TRABALHOS</h2>
            <div
              className={
                "flex items-center justify-center w-full h-full z-[2] bg-black-secondary rounded-full group-hover:bg-primary duration-400"
              }
            >
              <BusinessCenterIcon sx={{ fontSize: "26px" }} />
            </div>
          </a>
        </li>
        <li>
          <a href="/" className={`group ${floatBarItemCss}`}>
            <h2 className={floatBarItemTitleCss}>CONTATO</h2>
            <div
              className={
                "flex items-center justify-center w-full h-full z-[2] bg-black-secondary rounded-full group-hover:bg-primary duration-400"
              }
            >
              <EmailIcon sx={{ fontSize: "26px" }} />
            </div>
          </a>
        </li>
        <li className={`group ${floatBarItemCss}`}>
          <ul className={floatBarItemTitleCss}>
            {themes.map((theme, index) => (
              <li
                key={index}
                className={`w-6 h-6 border`}
                style={{ background: theme.color }}
                onClick={() => setColor(theme.value)}
              />
            ))}
          </ul>
          <div
            className={
              "flex items-center justify-center w-full h-full z-[2] bg-black-secondary rounded-full group-hover:bg-primary  duration-400"
            }
          >
            <SettingsIcon className="animate-spin" sx={{ fontSize: "26px" }} />
          </div>
        </li>
        <li className={`group ${floatBarItemCss}`} onClick={toggleMode}>
          <div
            className={
              "flex items-center justify-center w-full h-full z-[2] bg-black-secondary rounded-full group-hover:bg-primary  duration-400"
            }
          >
            <DarModeIcon darkMode={mode === "dark"} />
          </div>
        </li>
      </ul>
    </header>
  );
};

export default FloatBar;
