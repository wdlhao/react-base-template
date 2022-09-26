import { Suspense, lazy } from "react";
import { Routes, Route,useNavigate } from "react-router-dom";
import { useEffect } from "react";

const TestPage = lazy(() =>
  import("../Test")
);


function App() {
  let navigate = useNavigate();
  useEffect(() => {
    navigate("/test");
  }, []);

  return (
    <Suspense>
      <Routes>
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
