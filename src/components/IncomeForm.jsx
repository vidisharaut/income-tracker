function IncomeForm() {
  return (
    <form className="income-form">
      <div className="form-inner">
        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="Income Description..."
        />
        <input type="number" name="price" id="price" placeholder="Price..." />
        <input type="date" name="date" id="date" placeholder="Income date..." />
        <input type="submit" value="Add Income" />
      </div>
    </form>
  );
}

export default IncomeForm;
