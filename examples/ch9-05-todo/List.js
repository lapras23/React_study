const List = ({ items, handleDelete }) => {
  if (!items.length) {
    return <h2>To-do list empty, go out and Play!</h2>; // items 배열이 0이면 표가 안보이고 문구가 보임
  }

  return (
    <>
      <h2>{items.length} item(s) to do</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Due date</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={JSON.stringify(item)}>
              <td>{item.title}</td>
              <td>{item.category}</td>
              <td>{item.date}</td>
              <td>
                <button onClick={() => handleDelete(item)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
