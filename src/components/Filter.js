const Filter = ({ searchValue, changeValue }) => {
  return (
    <div className="mb-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        Фильтр
      </label>
      <input
        type="text"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="Введите название"
        value={searchValue}
        onChange={changeValue}
      />
    </div>
  );
};

export default Filter;
