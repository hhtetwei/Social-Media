import "./App.css";

import {
  RouterProvider,
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register from "./pages/Register";
// import ErrorPage from "./pages/ErrorPage";

import NewsFeed from "./pages/NewsFeed";
import Friends from "./pages/Friends";
// import BlockedFriends from "./pages/BlockedFriends";
// import Profile from "./Components/Profile";
// import YourFriends from "./pages/YourFriends";
import RootLayout from "./pages/RootLayout";
// import AuthForm from "./Components/AuthForm";
import Login from "./Components/Login";
import Posts from "./Components/Posts";
import EditPost from "./pages/EditPost";
import CreatePost from "./pages/CreatePost";
import { Profiler } from "react";
import Profile from "./Components/Profile";

// import DrawerAndBar from "./Layout/DrawerAndBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <NewsFeed /> },
      // {
      //   path: "/create",
      //   element: <CreatePosts />,
      // },
      // {
      //   path: "/friends",
      //   element: <Friends />,
      // },
      {
        path: "/posts",
        element: <Posts />,
      },

      // {
      //   path: "/profile",
      //   element: <Profile />,
      // },
      // {
      //   path: "/blockedfriends",
      //   element: <BlockedFriends />,
      // },
      // { path: "/yourfriends", element: <YourFriends /> },
    ],
  },

  // { path: "login", element: <Login /> },

  // { path: "login", element: <AuthForm /> },

  // {
  //   path: "auth/register",
  //   element: <Register />,
  // },

  // {
  //   path: "/*",
  //   element: <ErrorPage />,
  // },
]);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<RootLayout />}>
          <Route path="" element={<NewsFeed />} />
          <Route path="friends" element={<Friends />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="posts" element={<Posts />} />
          <Route path="posts/create" element={<CreatePost />} />
          <Route path="posts/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
  // <RouterProvider router={router}></RouterProvider>;
}

export default App;
