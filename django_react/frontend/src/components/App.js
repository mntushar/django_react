import React, { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import 'milligram/dist/milligram.css'
import LeadList from "./leadList";
import CreateLead from "./createLead";
import NotFound from "./NotFound";

const App = () => {
  const navigate = useNavigate();
  const hasNavigatedRef = useRef(false);

  useEffect(() => {
    const reloadUrl = document.getElementById("reloadUrl")?.value;

    if (reloadUrl && reloadUrl.length > 0 && !hasNavigatedRef.current) {
      hasNavigatedRef.current = true;
      navigate(reloadUrl, { replace: true });
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<LeadList />} />
      <Route path="/create" element={<CreateLead />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const container = document.getElementById("app");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
