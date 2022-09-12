import Project from "./Project.js";

export default function Projects({reference}) {
  return (
    <div className="section" ref={reference}>
      <h1>Projects</h1>
      <Project
        name="Memes"
        img="/memes.png"
        description="ALK final project - memes voting application written in React using a bit of Redux Toolkit."
        git="https://github.com/anitakniaziew/memes"
        stacks={["react"]}
      ></Project>
      <Project
        name="IT-SPA"
        href="https://it-spa.herokuapp.com/"
        img="/it-spa.png"
        description="ALK final project - booking platform for SPA and Wellness resort 💆🏻‍♀️. API is written in Node.js and express and uses MongoDB. Frontend is written in JavaScript, using ES6."
        git="https://github.com/anitakniaziew/it-spa"
        stacks={["js", "node", "css"]}
      ></Project>
      <Project
        name="Kotoba"
        href="https://app.kotoba.dev"
        img="/kotoba.png"
        description="A Japanese language learning app, where you can add words to a database and learn them effectively. I've implemented the front-end part that connects to a back-end hosted on Firebase."
        git="https://github.com/anitakniaziew/Kotoba"
        stacks={["react", "js", "css", "html"]}
      ></Project>
      <Project
        name="warsaw.ex"
        href="https://www.warsawex.org/"
        img="/warsaw-ex.png"
        description="Home page for warsaw.ex - a Warsaw Elixir meetup group. Uses Next.js for server-side rendering and easy hosting through Vercel. I needed to convert the design into HTML and CSS, and connect to a back-end for talk submission."
        git="https://github.com/warsawex/website"
        stacks={["react", "js", "css", "html"]}
      ></Project>
      <Project
        name="Noughts and Crosses"
        href="https://anitakniaziew.github.io/Noughts-and-Crosses/noughtsCrosses.html"
        img="/ox.png"
        description="A neon-style noughts and crosses game. Created to check out CSS, JS and HTML without using any tutorials, just following ideas and intuition."
        git="https://github.com/anitakniaziew/Noughts-and-Crosses"
        stacks={["js", "css", "html"]}
      ></Project>
      <Project
        name="Memory"
        href="https://anitakniaziew.github.io/memory/index.html"
        img="/memory.png"
        description="The goal of the game is to uncover pairs of similarly-coloured rectangles. Created using vanilla JavaScript, CSS and HTML."
        git="https://github.com/anitakniaziew/memory"
        stacks={["js", "css", "html"]}
      ></Project>
      <Project
        name="Calculator"
        href="https://anitakniaziew.github.io/calculator/calculator.html"
        img="/calculator.png"
        description="A calculator app where operations are performed depending on the state of the calculator. I drew the state diagram before implementing the calculator - you can check it out on GitHub."
        git="https://github.com/anitakniaziew/calculator"
        stacks={["js", "css", "html"]}
      ></Project>
    </div>
  );
}
