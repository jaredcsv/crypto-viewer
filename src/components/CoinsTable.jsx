import useFetch from "../useFetch";

function CoinsTable() {
  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
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
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((coin) => (
              <tr key={coin.id}>
                <td>{coin.id}</td>
                <td>{coin.name}</td>
                <td>{coin.email}</td>
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
