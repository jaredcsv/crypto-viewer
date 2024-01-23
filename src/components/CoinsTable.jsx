import IndicatorSymbol from "../IndicatorSymbol";
import useFetch from "../useFetch";
import "/src/styles/components/CoinsTable.css";

function CoinsTable() {
  const { data, loading } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10"
  );

  return (
    <>
      <div className="">
        <h1 className="table-title">Top 10 Cryptos</h1>
      </div>
      <div className="table-container">
        {loading && <span>Loading...</span>}
        {data && (
          <table className="coins-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Coin Name</th>
                <th>Symbol</th>
                <th>Current</th>
                <th>Last 24h</th>
                <th>Market Cap %</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.map((coin) => (
                <tr key={coin.id}>
                  <td>{coin.market_cap_rank}</td>
                  <td className="coin-name">
                    <img className="coin-logo" src={coin.image} alt="" />{" "}
                    {coin.name}
                  </td>

                  <td>{coin.symbol}</td>
                  <td>{coin.current_price}</td>

                  <td>
                    <IndicatorSymbol value={coin.price_change_24h} />
                  </td>

                  <td><IndicatorSymbol value={coin.market_cap_change_percentage_24h}/></td>
                  <td>{coin.last_updated}</td>
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
