import { useState, useEffect } from "react";
import Header from "./components/Header";
import IncomeForm from "./components/IncomeForm";

function App() {
  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  return (
    <div className="App">
      <Header />
      <IncomeForm />
    </div>
  );
}

export default App;
