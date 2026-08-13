import { techGroups } from "@/utils/consts";

const TecsChart = () => {
  return (
    <div className="grid grid-cols-1 gap-5 mt-8 md:grid-cols-2">
      {techGroups.map((group) => (
        <article
          key={group.title}
          className="border border-black-secondary rounded-sm p-6"
        >
          <h3 className="text-primary font-semibold text-lg mb-4">
            {group.title}
          </h3>
          <ul className="flex flex-wrap gap-2" aria-label={group.title}>
            {group.technologies.map((technology) => (
              <li
                key={technology}
                className="text-sm text-dark-or-light-secondary bg-dark-or-light-secondary/10 rounded-full px-3 py-1.5"
              >
                {technology}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
};

export default TecsChart;
