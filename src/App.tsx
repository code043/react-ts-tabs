import { useState } from "react";
import Techs from "./components/Techs";
import { TechData } from "./types/types";
import { technologies } from "./data/techs";

function App() {
  const [techs] = useState<TechData[]>(technologies);

  return (
    <main className="container mx-auto">
      <Techs jobs={techs} />
    </main>
  );
}

export default App;
