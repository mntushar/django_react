import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import 'milligram/dist/milligram.css'
import LeadList from "./Lead/LeadList";
import CreateLead from "./Lead/CreateLead";
import NotFound from "../Shared/NotFound";

const App = () => {
  const navigate = useNavigate();
  const hasNavigatedRef = useRef(false);
  const [isCheckingUrl, setIsCheckingUrl] = useState(true);

  useEffect(() => {
    const reloadUrl = document.getElementById("reloadUrl")?.value;

    if (reloadUrl && reloadUrl.length > 0 && !hasNavigatedRef.current) {
      hasNavigatedRef.current = true;
      navigate(reloadUrl, { replace: true });
    }

    // Mark URL checking as complete
    setIsCheckingUrl(false);
  }, [navigate]);

  // Render null while checking the URL
  if (isCheckingUrl) {
    return null;
  }

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
