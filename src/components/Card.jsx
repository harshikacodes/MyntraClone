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

export default Card;