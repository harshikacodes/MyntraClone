import "./style.css";

function Card(props){
  return (
    <div style={{border:"2px solid black", padding:"2px"}}>
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
    <img src="" />
    <div className="option">
      <button>MEN</button>
      <button>WOMEN</button>
      <button>KIDS</button>
      <button>HOME</button>
      <button>BEAUTY</button>
      <button>GENZ</button>
      <button>STUDIO</button>
    </div>

    <input></input>

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
    <div style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
      {arr.map((value, index) => <Card key={index} category={value.category} offer={value.offer} />)}
    </div>
    </>
  );
}

export default App;