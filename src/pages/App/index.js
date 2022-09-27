import { Suspense, lazy,useEffect } from "react";
import { Routes, Route,useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const IndexPage = lazy(() =>
  import("../Index")
);

const TestPage = lazy(() =>
  import("../Test")
);

const queryClient = new QueryClient();

function App() {
  let navigate = useNavigate();
  useEffect(() => {
    navigate("/test");
  }, []);

  return (
    <Suspense>
      <QueryClientProvider client={queryClient}>
      <Routes>
        {/* <Route path="/"> */}
          <Route path="/" element={<IndexPage />} />
          <Route path="/test" element={<TestPage />} />
        {/* </Route> */}
      </Routes>
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
