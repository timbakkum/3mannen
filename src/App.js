import './App.css';
import SneakPreviewImg from './sneak-preview.png';
import SambuccaImg from './sambucca.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Driemannen - the App</h1>
      </header>

      <main>
        <img src={SneakPreviewImg} alt="Schermafdruk van een heel cool dobbelspel" />
        <p>Coming soon to a Zoombucca near you..</p>
      </main>

      <aside>
        <figure>
          <img src={SambuccaImg} alt="Plakkerig spul in een fles. Stop het in je keelpijp." />
          <caption>Sponsored by Molinari <sup>*</sup>:
            <blockquote>
              <p>Doe mij maar wat lekkers
                <br />
                <br />
                <p>- Loek Z.</p>
              </p>
            </blockquote>
          </caption>
        </figure>

        <p style={{ color: 'grey', fontSize: '10px' }}><sup>*</sup> actually not sponsored by Molinari, but any Sambucca brand is free to reach out for sponsorship opportunities</p>
      </aside >
    </div >
  );
}

export default App;
