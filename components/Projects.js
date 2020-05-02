import Project from "./Project.js";
import tech from "../data.js";

export default function Projects(props) {
  return (
    <div className="section" ref={props.reference}>
      <h1>Projects</h1>
      <Project
        name="Kotoba"
        img="./kotoba.png"
        description="Simple aplication for learning japanese words"
        stacks={[tech.react, tech.js, tech.css, tech.html]}
      ></Project>
      <Project
        name="warsaw.ex"
        img="./warsaw-ex.png"
        description="Warsaw elixir meet-up webpage"
        stacks={[tech.react, tech.js, tech.css, tech.html]}
      ></Project>
      <Project
        name="Noughts and Crosses"
        img="./ox.png"
        description="That's a neon style simple noughts and crosses game. Created to check out CSS and JS skills without using any tutorials, just following ideas and intuition."
        stacks={[tech.js, tech.css, tech.html]}
      ></Project>
      <Project
        name="Memory"
        img="./memory.png"
        description="Just a simple memory game. Created to excercise CSS and JS skills."
        stacks={[tech.js, tech.css, tech.html]}
      ></Project>
      <Project
        name="Calculator"
        img="./calculator.png"
        description="Basic operations calculator."
        stacks={[tech.js, tech.css, tech.html]}
      ></Project>
    </div>
  );
}
