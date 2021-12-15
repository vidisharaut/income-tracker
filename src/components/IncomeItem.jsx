function IncomeItem({ income, index, removeIncome }) {
  let date = new Date(income.date);
  let day = date.getDate();
  var months = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  let month = Number(months[date.getMonth()]);
  let year = date.getFullYear();
  console.log(month);
  console.log(months);

  const removeHandle = (i) => {
    removeIncome(i);
  };

  return (
    <div className="income-item">
      <button className="remove-item" onClick={() => removeHandle(index)}>
        x
      </button>
      <div className="desc">{income.desc}</div>
      <div className="price--date">
        <div className="price">₹ {income.price}</div>
        <div className="date">{day + "/" + month + "/" + year}</div>
      </div>
    </div>
  );
}

export default IncomeItem;
