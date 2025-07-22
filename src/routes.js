import PrivateRoute from "./Components/PrivateRoute";
import About from "./Pages/about/About";
import Artical from "./Pages/Artical/Artical";
import Course from "./Pages/Course/Course";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Panel from "./Pages/Panel/Panel";
import Settings from "./Pages/Settings";

    const routes=[
    {path:'/' , element:<Home/>},
    {path:'/artical/*', element:<Artical />, children:[
      {path:'php' , element:<h2>php artical</h2>},
      {path:'Js' ,element:<h2>JavaScript artcial</h2>},
      {path:'react' , element:<h2>react artical</h2>},
      {path:'Java' , element:<h2>java artical</h2>}
    ],},
    {path:'/about' , element:<About />},
    {path:'/panel' , element:<PrivateRoute><Panel /></PrivateRoute>},
    {path:'/Settings' , element:<PrivateRoute><Settings /></PrivateRoute>},
    {path:'/course/:courseId' , element:<Course />},
    {path:'/login' , element:<Login />}  
    ];
    
    export default routes;