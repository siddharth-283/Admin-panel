import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />

        <div className="top">
          <h1>Add New User</h1>
        </div>

        <div className="bottom">
          <div className="left">
            <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput" >
              <label htmlFor="file">
                  Image:<DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" style={{display: "none"}}/>
              </div>
              <div className="formInput">
                <lable>Username</lable>
                <input type="text"  placeholder="jhon_doe"/>
              </div>
              <div className="formInput">
                <lable>Name and surname</lable>
                <input type="text"  placeholder="Jhon Doe"/>
              </div>
              <div className="formInput">
                <lable>Email</lable>
                <input type="email"  placeholder="jhondoe@gmail.com"/>
              </div>
              <div className="formInput">
                <lable>Phone</lable>
                <input type="number"  placeholder="+91 23434 33433"/>
              </div>
              <div className="formInput">
                <lable>Password</lable>
                <input type="password" />
              </div>
              <div className="formInput">
                <lable>Address</lable>
                <input type="text" placeholder="Elton St. 216 Mumbai"/>
              </div>
              <div className="formInput">
                <lable>Country</lable>
                <input type="text" placeholder="India"/>
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

export default New;