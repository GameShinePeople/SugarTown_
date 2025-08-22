import { RouterProvider } from "react-router-dom"; // RouterProvider를 가져옵니다.
import router from "./config/routes"; // routes.tsx에서 정의한 router 객체를 가져옵니다.

export default function App() {
  return (
    // RouterProvider를 사용하여 애플리케이션에 router 객체를 제공합니다.
    <RouterProvider router={router} />
  );
}
