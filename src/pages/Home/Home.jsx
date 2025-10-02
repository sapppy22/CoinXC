import React, { useContext, useState, useEffect } from "react";
import "./Home.css";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [search, setSearch] = useState("");

  // Update coins when context changes
  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() === "") {
      setDisplayCoin(allCoin);
    } else {
      const filtered = allCoin.filter((coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
      );
      setDisplayCoin(filtered);
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <h1>Get all Crypto Updates</h1>
        <p>
          Welcome to <strong>CoinXC</strong>, where you can track crypto at your
          fingertips. Sign up to explore more!
        </p>
        <form onSubmit={handleSearch} >
          <input
            type="text"
            placeholder="Search Crypto"
            value={search}
            list="coinlist"
            onChange={(e) => setSearch(e.target.value)}
          />

         <datalist id='coinlist'>
            {allCoin.map((item,index)=>(<option key={index} value={item.name}/>))}
         </datalist>




          <button type="submit">Search</button>
        </form>
      </div>

      {/* Crypto Table */}
      <div className="crypto-table">
        {/* Table Header */}
        <div className="table-layout table-header">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p className="market-cap">Market Cap</p>
        </div>

        {/* Table Data */}
        {displayCoin.length > 0 ? (
          displayCoin.slice(0, 20).map((item, index) => (
            < Link to={`/coin/${item.id}`} className="table-layout" key={index}>
              <p>{item.market_cap_rank}</p>
              <div className="coin-info">
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "20px", height: "20px" }}
                />
                <p>
                  {item.name} ({item.symbol.toUpperCase()})
                </p>
              </div>
              <p>
                {currency.symbol}
                {item.current_price.toLocaleString()}
              </p>
              <p
                style={{
                  color:
                    item.price_change_percentage_24h >= 0 ? "green" : "red",
                  textAlign: "center",
                }}
              >
                {(Math.floor(item.price_change_percentage_24h*100)/100).toFixed(2)}%
              </p>
              <p className="market-cap">
                {currency.symbol}
                {item.market_cap.toLocaleString()}
              </p>
            </Link>
          ))
        ) : (
          <p style={{ textAlign: "center", marginTop: "20px" }}>
            No coins found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
