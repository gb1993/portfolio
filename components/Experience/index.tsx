import { academic, xp, xpIconContainerCss, xpTagCss } from "@/utils/consts";
import BadgeIcon from "@mui/icons-material/Badge";
import SchoolIcon from "@mui/icons-material/School";

const Experience = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-7">
      <div className="flex flex-col justify-between w-full max-w-full lg:max-w-[540px]">
        {xp.map((item, i) => (
          <div key={i} className="flex gap-4 mb-12">
            <div className={xpIconContainerCss}>
              <BadgeIcon className="text-primary z-[2] bg-dark-or-light-primary !transition-colors !duration-500" />
            </div>
            <div>
              <h4 className={xpTagCss}>{item.timeOn}</h4>
              <h3 className="text-dark-or-light-secondary font-medium text-lg mb-2.5">
                {item.title} -{" "}
                <span className="text-dark-or-light-secondary/60">
                  {item.place}
                </span>
              </h3>
              <p className="text-dark-or-light-secondary text-xs leading-5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-between w-full max-w-full lg:max-w-[540px]">
        {academic.map((item, i) => (
          <div key={i} className="flex gap-4 mb-12">
            <div className={xpIconContainerCss}>
              <SchoolIcon className="text-primary z-[2] bg-dark-or-light-primary !transition-colors !duration-500" />
            </div>
            <div>
              <h4 className={xpTagCss}>{item.timeOn}</h4>
              <h3 className="text-dark-or-light-secondary font-medium text-lg mb-2.5">
                {item.title} -{" "}
                <span className="text-dark-or-light-secondary/60">
                  {item.place}
                </span>
              </h3>
              <p className="text-dark-or-light-secondary text-xs leading-5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
