import "./App.css";


    function App() {
  return (
    <>
      <nav className="navbar">
        <h2>My React Store</h2>

        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <div className="header">
        <h1>Welcome to My React Store</h1>
        <p>Bootstrap Grid System & Components Example</p>
      </div>
      <div className="header">
        <h1>Welcome to My React Store</h1>
        <p>Bootstrap Grid System & Components Example</p>
      </div>

      <h2 className="title">Our Services</h2>

      <div className="cards">

        <div className="card">
          <h3>💻</h3>
          <h2>Web Development</h2>
          <p>React aur Bootstrap ke sath modern websites banai jati hain.</p>
          <button>Read More</button>
        </div>

        <div className="card">
          <h3>📱</h3>
          <h2>Responsive Design</h2>
          <p>Website mobile, tablet aur desktop par perfectly chalti hai.</p>
          <button>Read More</button>
        </div>

        <div className="card">
          <h3>⚡</h3>
          <h2>Fast Performance</h2>
          <p>Vite aur React ki wajah se website fast load hoti hai.</p>
          <button>Read More</button>
        </div>

        <div className="card">
          <h3>🎨</h3>
          <h2>Graphic Design</h2>
          <p>Creative logos, posters aur social media designs.</p>
          <button>Read More</button>
        </div>

        <div className="card">
          <h3>🐍</h3>
          <h2>Python</h2>
          <p>Python programming aur automation solutions.</p>
          <button>Read More</button>
        </div>

        <div className="card">
          <h3>☁️</h3>
          <h2>Cloud Services</h2>
          <p>Secure cloud hosting aur deployment services.</p>
          <button>Read More</button>
        </div>

      </div>
    </>
  );
}

export default App;