import "./App.css";
import Registration from "./Forms/Registration";
import Home from "./Home";
import Login from "./Forms/Login";
import AccountDetails from "./Forms/AccountDetails";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import DepositForm from "./Forms/DepositForm";
import WithdrawalForm from "./Forms/WithdrawalForm";
function App() {
  const [customer, setCustomer] = useState();
  const [updatedBalance,setUpdatedBalance]=useState(0)
  const updateBalance=(newBalance)=>{
    setUpdatedBalance(newBalance)
  }
  console.log(updatedBalance)
  const updateCustomer = (userData) => {
    setCustomer(userData);
    console.log(userData);
  };
  return (
    <Router>
      <div className="App">
        <nav>
        <ul>
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            {!customer ? (
              <>
                <li>
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className="nav-link" to="/account-details">
                    Account Details
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/deposit">
                    Deposit
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/withdraw">Withdraw</Link>
                </li>
                <li>
                  <button >Logout</button>
                </li>
              </>
            )}
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login updateCustomer={updateCustomer} />}
          />
          <Route path="/register" element={<Registration />} />
          <Route
            path="/account-details"
            element={<AccountDetails customer={customer} updatedBalance={updatedBalance}/>}
          />
          <Route
            path="/deposit"
            element={<DepositForm  customer={customer} updateBalance={updateBalance}/>}
          />
          <Route path ='/withdraw' element={<WithdrawalForm customer={customer}/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
