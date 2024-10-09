import { TechData } from "../types/types";

interface Props {
  jobs: TechData[];
  value: number;
  setValue: (index: number) => void;
}
const ButtonTab = ({ jobs, value, setValue }: Props) => {
  return (
    <div className="text-blue-200">
      {jobs.map((item, index) => {
        return (
          <button
            key={item.id}
            className={`tech-btn ${index === value && "text-red-500"}`}
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
