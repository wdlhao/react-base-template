import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const TestPage = lazy(() =>
  import("../Test")
);

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <Suspense>
      <Routes>
        <Route path="/">
          <Route path="test" element={<TestPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
