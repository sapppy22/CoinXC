import React, { useEffect, useState, useContext } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../context/CoinContext";
import LineChart from "../../components/LineChart/LineChart";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState(null);
  const [historicalData, setHistoricalData] = useState(null);
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCoinData(data);
    } catch (error) {
      console.error("Error fetching coin data:", error);
    }
  };


  const fetchHistoricalData = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=30&interval=daily`;

    try {
      const response = await fetch(url); 
      const data = await response.json();
      setHistoricalData(data);
    } catch (error) {
      console.error("Error fetching historical data:", error);
    }
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [coinId, currency]);

  if (coinData && historicalData) {
    return (
      <div className="coin">
        <div className="coin-name">
          <img src={coinData.image.large} alt={coinData.name} />
          <p>
            <b>
              {coinData.name} ({coinData.symbol.toUpperCase()})
            </b>
          </p>
        </div>
                <div className="coin-info">
          <p>
            Current Price: {currency.symbol}
            {coinData.market_data.current_price[currency.name]}
          </p>
          <p>
            Market Cap: {currency.symbol}
            {coinData.market_data.market_cap[currency.name].toLocaleString()}
          </p>
          <p>
            24h Change:{" "}
            {coinData.market_data.price_change_percentage_24h.toFixed(2)}%
          </p>
        </div>

        <div className="coin-chart">
          <LineChart historicalData={historicalData} />
        </div>


      </div>
    );
  } else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }
};

export default Coin;
