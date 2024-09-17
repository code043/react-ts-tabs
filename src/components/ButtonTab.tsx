import { TechData } from "../types/types";

interface Props {
  jobs: TechData[];
  value: number;
  setValue: (index: number) => void;
}
const ButtonTab = ({ jobs, value, setValue }: Props) => {
  return (
    <div className="btn-container">
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            className={`tech-btn ${index === value && "active-btn"}`}
            onClick={() => setValue(index)}
          >
            {item.title}
          </button>
        );
      })}
    </div>
  );
};
export default ButtonTab;
