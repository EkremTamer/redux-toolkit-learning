import { useDispatch, useSelector } from "react-redux";
import UserShow from './components/user_show'
import { setFirstname, setAge, setLastname } from "./redux/userSlice";

function App() {
  //const authState = useSelector(state=> state.auth)
  const userState = useSelector(state=> state.user)
  const dispatch = useDispatch() 

  console.log('>>App AuthState', userState);

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-6">
          <div className="row" >
            <div className="col-12">
              <label className="form-label">First Name</label>
              <input 
              type="text" 
              className="form-control" 
              placeholder="Enter your first name"
              onChange={event => dispatch(setFirstname(event.target.value))}/>
            </div>
            <div className="col-12 mt-3">
              <label className="form-label">Last Name</label>
              <input 
              type="text" 
              className="form-control" 
              placeholder="Enter your last name"
              onChange={event => dispatch(setLastname(event.target.value))}/>
            </div>
            <div className="col-12 mt-3">
              <label className="form-label">Age</label>
              <input 
              type="number" 
              className="form-control" 
              placeholder="Enter your age"
              onChange={event => dispatch(setAge(event.target.value))}/>
            </div>
          </div>
        </div>
        <div className="col-6">
          <UserShow/>
        </div>
      </div>
    </div>
  );
}

export default App;
