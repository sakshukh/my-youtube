import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body/Body";
import Header from "./components/Header";
import store from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoContainer from "./components/Body/videoContainer/VideoContainer";
import WatchVideo from "./components/Body/videoContainer/WatchVideo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/", element: <VideoContainer /> },
      { path: "watch", element: <WatchVideo /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Header />
        <RouterProvider router={router}></RouterProvider>
      </div>
    </Provider>
  );
}

export default App;
