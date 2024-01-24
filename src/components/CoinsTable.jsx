import IndicatorSymbol from "../IndicatorSymbol";
import useFetch from "../useFetch";
import { useEffect } from "react";
import "/src/styles/components/CoinsTable.css";
import LoadingScreen from "./LoadingScreen";

function CoinsTable() {
  const { data, loading, isDataInCache } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10"
  );

  useEffect(() => {
    if (isDataInCache()) {
      console.log("Data is available in cache");
    }
  }, [data, isDataInCache]);

  return (
    <>
      <div className="">
        <h1 className="table-title">Top 10 Cryptos</h1>
      </div>
      <div className="table-container">
        {loading && <LoadingScreen/>}
        {data && (
          <table className="coins-table">
            <thead className="table-header">
              <tr>
                <th className="column-title">Rank</th>
                <th className="column-title">Logo</th>
                <th className="column-title">Name</th>
                <th className="column-title">Symbol</th>
                <th className="column-title">Current Price</th>
                <th className="column-title">Last 24h</th>
                <th className="column-title">Market Cap %</th>
              </tr>
            </thead>
            <tbody>
              {data.map((coin) => (
                <tr className="coin-row" key={coin.id}>
                  <td className="coin-content_data">{coin.market_cap_rank}</td>
                  <td className="coin-content_data">
                    <img
                      className="coin-logo"
                      src={coin.image}
                      alt={coin.name}
                    />
                  </td>
                  <td className="coin-content_data coin-name">{coin.name}</td>

                  <td className="coin-content_data">{coin.symbol}</td>
                  <td className="coin-content_data">${coin.current_price}</td>

                  <td className="coin-content_data">
                    <IndicatorSymbol value={coin.price_change_24h.toFixed(2)} />
                  </td>

                  <td className="coin-content_data">
                    <IndicatorSymbol
                      value={coin.market_cap_change_percentage_24h.toFixed(2)}
                    />
                    %
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default CoinsTable;