import "./App.css";
import { useMemo } from "react";

function App() {
  const Gallery = () => {
    return (
      <section style={{ display: "flex" }}>
        <Image index="1003" title="Deer" />
        <Image index="1020" title="Beer" />
        <Image index="1024" title="Vulture" />
        <Image index="1084" title="Walrus" />
      </section>
    );
  };

  const Image = ({ index, title }) => {
    const id = useMemo(
      () => `image-${Math.floor(Math.random() * 1000000)}`,
      []
    );

    return (
      <figure style={{ margin: "5px" }} id={id}>
        <img src={`//picsum.photos/id/${index}/250/250`} alt={title} />
        <figcaption>
          <h3>Species: {title}</h3>
        </figcaption>
      </figure>
    );
  };
  return (
    <main>
      <h1>Animals</h1>
      <Gallery />
    </main>
  );
}

export default App;
