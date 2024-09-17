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
    <article className="tech-info">
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className="tech-date">{createdAt}</p>
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
