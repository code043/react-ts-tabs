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
      <div className="title">
        <h2>Technologies</h2>
      </div>
      <div className="tech-center">
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
