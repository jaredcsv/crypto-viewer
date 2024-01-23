import useFetch from "../useFetch";

function CoinsTable() {
  const { data, loading } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10"
  );

  return (
    <>
    <div>
        <h1>Top 10 Cryptos</h1>
    </div>
    <div>
      {loading && <span>Loading...</span>}
      {data && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>Market Cap %</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((coin) => (
              <tr key={coin.id}>
                <td> <img className="coin-logo" src={coin.image} alt="" /> {coin.name}</td>
                <td>{coin.symbol}</td>
                <td>{coin.current_price}</td>
                <td>{coin.market_cap_change_percentage_24h}</td>
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
