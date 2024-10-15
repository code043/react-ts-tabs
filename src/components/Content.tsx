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
      <h3 className="text-white">{title}</h3>
      <h4 className="">{company}</h4>
      <p className="bg-slate-600">{createdAt}</p>
      {usedBy.map((duty, index) => {
        return (
          <div key={index} className="border border-red-300 p-3">
            <div className="tech-icon">
              <FontAwesomeIcon className="text-blue-200" icon={faLightbulb} />
            </div>
            <p>{duty}</p>
          </div>
        );
      })}
    </article>
  );
};

export default Content;
