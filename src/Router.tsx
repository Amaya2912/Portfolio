import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./views/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
