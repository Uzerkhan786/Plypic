import { Outlet, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import AllProducts from "./components/AllProducts";
import MySubmission from "./components/MySubmission";
import PendingRequest from "./components/PendingRequest";
import Profile from "./components/Profile";
import PendingPageDetails from "./components/PendingPageDetails";
import PostProduct from "./components/PostProduct";
export const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [{
    path: '/register',
    element: <Register />
  }, {
    path: '/login',
    element: <Login />
  }, {
    path: '/dashboard',
    element: <AllProducts />
  },
  {
    path: '/products/:id',
    element: <Product />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/my-submissions',
    element: <MySubmission />
  },
  {
    path: '/pending-requests',
    element: <PendingRequest />
  },
  {
    path: '/pending-requests/:id',
    element: <PendingPageDetails />
  }, {
    path: '/create',
    element: <PostProduct />
  }
    //do error handling
  ]
}])
function App() {
  return (
    <div >
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
