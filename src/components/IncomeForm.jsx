import { useRef } from "react";

function IncomeForm({ income, setIncome }) {
  const desc = useRef(null);
  const date = useRef(null);
  const price = useRef(null);

  const addIncome = (e) => {
    e.preventDefault();
    let d = date.current.value.split("-");
    let newD = new Date(d[0], d[1], d[2]);

    setIncome([
      ...income,
      {
        desc: desc.current.value,
        price: price.current.value,
        date: newD.getTime(),
      },
    ]);
    desc.current.value = "";
    price.current.value = null;
    date.current.value = null;
  };

  return (
    <form className="income-form" onSubmit={addIncome}>
      <div className="form-inner">
        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="Income Description..."
          ref={desc}
        />
        <div className="price-date">
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Price..."
            ref={price}
          />
          <input
            type="date"
            name="date"
            id="date"
            placeholder="Income date..."
            ref={date}
          />
        </div>
      </div>
      <input type="submit" value="Add Income" className="add-income--btn" />
    </form>
  );
}

export default IncomeForm;
