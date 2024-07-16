import {useEffect} from 'react'
import {BrowserRouter ,Routes ,Route } from 'react-router-dom';
import Loader from './components/Loader.js';
import axios from 'axios'
import './App.css';
import Home from './pages/Home/index.js'
import { useDispatch, useSelector } from 'react-redux';
import { HideLoading, ReloadData, SetPortfolioData, ShowLoading }  from './redux/rootSlice.js';
import Admin from './pages/Admin/index.js';
import Login from './pages/Admin/Login.js';

function App() {
  
 const {loading , portfolioData,ReloadData} = useSelector((state)=>state.root);
  const dispatch = useDispatch();
   const getPortfolioData = async () =>{
    try {
      dispatch(ShowLoading())
      const response = await axios.get("https://mern-portfolio-backend-unnf.onrender.com/api/portfolio/get-portfolio-data");
      dispatch(SetPortfolioData(response.data))
      dispatch(ReloadData(false))
      dispatch(HideLoading())
    } catch (error) {
      dispatch(HideLoading())
      console.log(error)
    }
   }

   useEffect(()=>{
    if(!portfolioData){
      getPortfolioData();
    }
   },[SetPortfolioData])


   useEffect(()=>{
    if(ReloadData){
      getPortfolioData();
    }
   },[ReloadData])
   



  return (
    <BrowserRouter>
    {loading ? <Loader/>  : null}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/admin-login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
