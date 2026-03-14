import "./style.css";

function Card(props){
  return (
    <div className="categoryCard">
      <img src="https://yufta.com/cdn/shop/articles/blue_dupatta_set.jpg?v=1647416059" height="200px" width="200px" />
      <div style={{textAlign:"center"}}>
        <h2>{props.category}</h2>
        <h1>{props.offer} OFF</h1>
        <h2>Shop Now</h2>
      </div>
    </div>
  );
}

function Header(){
  return (
    <div className="heading">
    <img src="https://images.indianexpress.com/2021/01/myntra.png" height="60px" width="120px" />
    <div className="option">
      <button className="btn">MEN</button>
      <button className="btn">WOMEN</button>
      <button className="btn">KIDS</button>
      <button className="btn">HOME</button>
      <button className="btn">BEAUTY</button>
      <button className="btn">GENZ</button>
      <button className="btn">STUDIO</button>
    </div>

    <input className="searchBar" placeholder="Search for products, brands and more"></input>

    <div className="profile">
      <button className="profileBtn">Profile</button>
      <button className="profileBtn">Wishlist</button>
      <button className="profileBtn">Bag</button>
    </div>

  </div>
  );
}

const arr = [
  {category:"Ethnic Wear", offer:"50-80%"},
  {category:"Casual Wear", offer:"40-80%"},
  {category:"Men's Activewear", offer:"30-70%"},
  {category:"Women's Activewear", offer:"30-70%"},
  {category:"Western Wear", offer:"40-80%"},
  {category:"Sportswear", offer:"30-80%"}
]

function App() {
  return (
    <>
    <Header />
    <div className="categoryCardsContainer">
      {arr.map((value, index) => <Card key={index} category={value.category} offer={value.offer} />)}
    </div>
    </>
  );
}

export default App;