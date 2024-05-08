import { createBrowserRouter } from "react-router-dom";

import App from "@/pages/app";
import SignUp from "@/pages/user/sign-up";
import SignIn from "@/pages/user/sign-in";
import Dashboard from "@/pages/dashboard";

import AuthRootLayout from "@/components/user/auth-layout";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/user",
        element: <AuthRootLayout />,
        children: [
          { path: "sign-in", element: <SignIn /> },
          { path: "sign-up", element: <SignUp /> },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
