import Address from './components/address/Address';
import Body from './components/Body/body';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import About from './components/aboutUs/About';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
// import './App.css';
function App() {
  return (
    <div className="App">
      <Address />
      <Header />
      <Body />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
