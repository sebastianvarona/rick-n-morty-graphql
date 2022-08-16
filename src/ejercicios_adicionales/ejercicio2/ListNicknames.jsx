function ListNicknames({ names, order }) {
  console.log(order.toLowerCase());
  if (order.toLowerCase() === 'asc') {
    return (
      <ul>
        {names.sort().map((n) => {
          return <li>{n}</li>;
        })}
      </ul>
    );
  }
  if (order.toLowerCase() === 'desc') {
    return (
      <ul>
        {names
          .sort()
          .reverse()
          .map((n) => {
            return <li>{n}</li>;
          })}
      </ul>
    );
  }
  return (
    <>
      <p>Incorrect order string...</p>
      <p>ASC - DESC</p>
    </>
  );
}

export default ListNicknames;
