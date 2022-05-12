import { Route ,Routes , Link, useNavigate, useParams, useLocation, useSearchParams} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = (props) => {
  
  return (
    <div> 
      <Link to="/signup">Signup</Link>
      <h1>THis is hats page</h1>
    </div>
  );
}
const Signup = (props) => {

  let navigate = useNavigate()
  return <div>
      
  <button onClick={() =>{return navigate('/hats')}}>Hats</button>
    <h1>This is signup page</h1>
  </div>
}

const Service = (props) => {
  let params = useParams();
  console.log(params.id)
  return <div>
    <h1>This is service page id: {params.id}</h1>
  </div>
}

const Users = () => {
  const match = useLocation();
  console.log(match.search)
  return (<div>
   
    <h1>All users gose here</h1>
    </div>);
}

const UserProfilee = () => {
  const queryString = useLocation();
  const search = useSearchParams()[0];
  console.log(search.get('name'));
 
  const params = useParams();
  return <div><h1>User Profile page id: {params.id}</h1></div>
}


function App() {
  return (
    <div>
      <Routes>
          <Route path='/' element={<HomePage />} />
  
          <Route path="/hats" element={<HatsPage />}  />
          <Route path="/signup" element={<Signup />} />
          <Route path="/service/:id" element={<Service />} />
          <Route path="/users/" element={<Users />} >
              {/* <Route path=":id" element={<UserProfilee />} /> */}
          </Route>
          <Route path="/users/:id" element={<UserProfilee />}/>
      
      </Routes>
    </div>
  );
}

export default App;
