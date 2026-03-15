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

export default Header;