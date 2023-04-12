import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import "./single.scss";

const single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/5257827/pexels-photo-5257827.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Jhon Doe</h1>
                <div className="detailItem">
                  <span className="itemKEey">Email:</span>
                  <span className="itemValue">jhondoe@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKEey">Phone:</span>
                  <span className="itemValue">+91 9023271029</span>
                </div>
                <div className="detailItem">
                  <span className="itemKEey">Address:</span>
                  <span className="itemValue">Vadodra, Gujarat</span>
                </div>
                <div className="detailItem">
                  <span className="itemKEey">Country:</span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending (last 6 Monts)"/>
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transaction</h1>
          <List/>
        </div>
      </div>
    </div>
  )
};

export default single;
