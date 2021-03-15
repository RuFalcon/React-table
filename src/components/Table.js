import useSortableData from "../hooks/useSortableData";

const Table = ({ posts, loading }) => {
  const { items, requestSort, sortConfig } = useSortableData(posts);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <table className="table  table-striped">
      <thead>
        <tr>
          <th
            onClick={() => requestSort("name")}
            className={getClassNamesFor("name")}
          >
            Name
          </th>
          <th
            onClick={() => requestSort("email")}
            className={getClassNamesFor("email")}
          >
            Email
          </th>
          <th
            onClick={() => requestSort("body")}
            className={getClassNamesFor("body")}
          >
            Body
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((tdata) => (
          <tr key={tdata.id}>
            <td>{tdata.name}</td>
            <td>{tdata.email}</td>
            <td>{tdata.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
