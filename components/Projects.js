import Project from "./Project.js";
import tech from "../data.js";

export default function Projects(props) {
  return (
    <div className="section" ref={props.reference}>
      <h1>Projects</h1>
      <Project
        name="Kotoba"
        href="https://app.kotoba.dev"
        img="./kotoba.png"
        description="Simple aplication for learning japanese words"
        git="https://github.com/anitakniaziew/Kotoba"
        stacks={[tech.react, tech.js, tech.css, tech.html]}
      ></Project>
      <Project
        name="warsaw.ex"
        href="https://www.warsawex.org/"
        img="./warsaw-ex.png"
        description="Warsaw elixir meet-up webpage"
        git="https://github.com/anitakniaziew/Kotoba"
        stacks={[tech.react, tech.js, tech.css, tech.html]}
      ></Project>
      <Project
        name="Noughts and Crosses"
        href="https://anitakniaziew.github.io/Noughts-and-Crosses/noughtsCrosses.html"
        img="./ox.png"
        description="That's a neon style simple noughts and crosses game. Created to check out CSS and JS skills without using any tutorials, just following ideas and intuition."
        git="https://github.com/anitakniaziew/Noughts-and-Crosses"
        stacks={[tech.js, tech.css, tech.html]}
      ></Project>
      <Project
        name="Memory"
        href="https://anitakniaziew.github.io/memory/index.html"
        img="./memory.png"
        description="Just a simple memory game. Created to excercise CSS and JS skills."
        git="https://github.com/anitakniaziew/memory"
        stacks={[tech.js, tech.css, tech.html]}
      ></Project>
      <Project
        name="Calculator"
        href="https://anitakniaziew.github.io/calculator/calculator.html"
        img="./calculator.png"
        description="Basic operations calculator."
        git="https://github.com/anitakniaziew/calculator"
        stacks={[tech.js, tech.css, tech.html]}
      ></Project>
    </div>
  );
}
