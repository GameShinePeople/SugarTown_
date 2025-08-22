import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import GameDetailPage from "../pages/GameDetailPage";
import GameListPage from "../pages/GameListPage";
import GameUploadPage from "../pages/GameUploadPage";

import CreatorHomePage from "../pages/MyPage/CreatorHomePage";
import GuestbookPage from "../pages/MyPage/GuestbookPage";
import Index from "../pages/MyPage/index";
import MyRoomPage from "../pages/MyPage/MyRoomPage";
import PostPage from "../pages/MyPage/PostPage";
import MyPageEdit from "../pages/MyPage/MyPageEdit";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/404error",
    element: <NotFoundPage />,
  },
  {
    path: "/gamedetail",
    element: <GameDetailPage />,
  },
  {
    path: "/gamelist",
    element: <GameListPage />,
  },
  {
    path: "/gameuploadpage",
    element: <GameUploadPage />,
  },
  {
    path: "/creatorhomepage",
    element: <CreatorHomePage />,
  },
  {
    path: "/guestbookpage",
    element: <GuestbookPage />,
  },
  {
    path: "/index",
    element: <Index />,
  },
  {
    path: "/myroompage",
    element: <MyRoomPage />,
  },

  {
    path: "/postpage",
    element: <PostPage />,
  },
  {
    path: "/mypageedit",
    element: <MyPageEdit />,
  },
]);

export default router;
