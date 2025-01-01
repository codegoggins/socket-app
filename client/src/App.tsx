import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

const Auth = lazy(() => import("./views/auth"));
const Chat = lazy(() => import("./views/chat"));
const Profile = lazy(() => import("./views/profile"));

const Loading = () => (
  <div className="h-screen flex items-center justify-center">Loading...</div>
);

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
