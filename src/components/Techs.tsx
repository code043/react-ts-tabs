import Content from "./Content";
import ButtonTab from "./ButtonTab";
import useChange from "../hooks/useChange";
import { TechData } from "../types/types";

interface Props {
  jobs: TechData[];
}
const Techs = ({ jobs }: Props) => {
  const [value, setValue] = useChange(0);
  const { company, createdAt, usedBy, title } = jobs[value];
  return (
    <section className="section">
      <div className="text-red-300">
        <h2 className="text-blue-300 ">Technologies</h2>
      </div>
      <div className="bg-blue-600">
        <ButtonTab jobs={jobs} value={value} setValue={setValue} />
        <Content
          title={title}
          company={company}
          createdAt={createdAt}
          usedBy={usedBy}
        />
      </div>
    </section>
  );
};

export default Techs;
