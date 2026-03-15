import "./style.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import arr from "./utils/dummy";

function App() {
  return (
    <>
    <Header />

    <div className="categoryCardsContainer">
      {arr.map((value, index) => <Card key={index} category={value.category} offer={value.offer} />)}
    </div>

    <Footer />
    </>
  );
}

export default App;