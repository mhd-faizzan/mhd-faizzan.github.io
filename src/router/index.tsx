import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

const Home = lazy(() => import("@/pages/home"));

export default function AppRouter() {
  return (
    <BrowserRouter basename="/">
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen">
            <div className="loader"></div>
          </div>
        }
      >
        <Routes>
          <Route index element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
