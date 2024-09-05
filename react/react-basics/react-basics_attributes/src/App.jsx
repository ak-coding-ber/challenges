import "./App.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h1 className="article__title">Very Creative Article Heading</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quis,
        quidem repudiandae nam modi quas ipsa harum molestias consequuntur non
        sed provident ab neque blanditiis ducimus natus accusantium eius
        placeat?
      </p>
      <label htmlFor="text-input"></label>
      <input id="text-input" type="text" />
      <a href="https://de.wikipedia.org/wiki/Atacama-W%C3%BCste">
        Click this link!
      </a>
    </article>
  );
}
