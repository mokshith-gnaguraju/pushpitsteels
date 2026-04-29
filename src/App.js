import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react"; // ✅ FIXED
import "./App.css";
import Zoom from "./navbar/Zoom";
import Bar from "./navbar/bar";
import Home from "./Home";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

function Mobile() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); // ✅ lowercase

  const [error1, setError1] = useState("");
  const [error2, setError2] = useState("");

  const redirectbar = () => {
    if (!username || !password) {
      setError1(!username ? "Please Enter Your UserName" : "");
      setError2(!password ? "Please Enter Your Password" : "");
    } else {
      setError1("");
      setError2("");
      navigate("/bar");
    }
  };

  const redirectzoom = () => {
    navigate("/zoom");
  };

  const redirectHome = () => {
    navigate("/home"); // ✅ FIXED
  };

  return (
    <div className="aa" style={{ height: "900px" }}>
      <div className="main container-fluid">
        
        {/* Header */}
        <div className="first row">
          <div className="col-sm-6">
            <h2 style={{ borderRadius: "20px" }}>Fandago</h2>
            <p>Media Group</p>
          </div>

          <div className="col-sm-6">
            <ul className="ol ul">
              <li><a onClick={redirectHome} href="#">Home</a></li> {/* ✅ FIXED */}
              <li><a href="#">About</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Content */}
        <div className="row">
          <div className="pp col-sm-6">
            <h1 style={{ fontSize: "80px" }}>Graphic Design</h1>
            <h1 style={{ fontSize: "80px", color: "red" }}>Services</h1>
            <h1>Boost Your Business with Awesome</h1>
            <h1>Branding and Marketing Materials</h1>

            <button onClick={redirectzoom} className="btn">
              Hire us
            </button>
          </div>

          <div className="lgn col-sm-6">
            <img
              style={{ borderRadius: "550px", marginLeft: "180px" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAoQQX2CWLJKWc_dIDs8KQ8KLae-XfEAsgFg&s"
              alt="profile"
            />

            <div style={{ marginLeft: "15px",marginTop:"40px" }}>
              
              {/* Username */}
              <div style={{ position: "relative", marginBottom: "10px" }}>
                <FaUserAlt style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }} />
                <input
                  className="form-control"
                  type="text"
                  placeholder="UserName"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setError1("");
                  }}
                  style={{ paddingLeft: "30px" }}
                />
              </div>
              <span style={{ color: "red" }}>{error1}</span>

              {/* Password */}
              <div style={{ position: "relative", marginBottom: "10px" }}>
                <RiLockPasswordFill style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }} />
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError2("");
                  }}
                  style={{ paddingLeft: "30px" }}
                />
              </div>
              <span style={{ color: "red" }}>{error2}</span>

              <button style={{marginLeft:'20rem'}} onClick={redirectbar} className="btnn">
                Submit
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mobile />} />
        <Route path="/zoom" element={<Zoom />} />
        <Route path="/bar" element={<Bar />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;