import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";

interface Props {
  title: string;
  company: string;
  createdAt: string;
  usedBy: string[];
}
const Content = ({ title, company, createdAt, usedBy }: Props) => {
  return (
    <article className="bg-orange-300">
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className="bg-slate-600">{createdAt}</p>
      {usedBy.map((duty, index) => {
        return (
          <div key={index} className="tech-desc">
            <div className="tech-icon">
              <FontAwesomeIcon icon={faLightbulb} />
            </div>
            <p>{duty}</p>
          </div>
        );
      })}
    </article>
  );
};

export default Content;
