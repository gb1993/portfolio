import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

interface DarModeIconProps {
  darkMode: boolean;
}

const DarModeIcon: React.FC<DarModeIconProps> = ({ darkMode }) => {
  return (
    <div className="relative w-6.5 h-6.5" title="dark/light mode">
      <LightModeIcon
        sx={{
          fontSize: "26px",
          zIndex: 2,
          position: "absolute",
          opacity: darkMode ? 1 : 0,
          transition: "transform 0.4s ease-in-out",
          transform: darkMode ? "scale(1)" : "scale(0)",
        }}
      />
      <DarkModeIcon
        sx={{
          fontSize: "26px",
          zIndex: 2,
          position: "absolute",
          opacity: darkMode ? 0 : 1,
          transition: "transform 0.4s ease-in-out",
          transform: darkMode ? "scale(0)" : "scale(1)",
        }}
      />
    </div>
  );
};

export default DarModeIcon;
