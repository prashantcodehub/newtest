//let data;
export async function FetchAPIdata() {
  let address = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en`;
  // ( `https://www.googleapis.com/books/v1/volumes?q=harry+potter`)  :-> api for testing;
  // 'https://jsonplaceholder.typicode.com/todos/1'   :-> api for testing;

  const response = await fetch(address);
  const coin_data = await response.json();

  return coin_data;
}
