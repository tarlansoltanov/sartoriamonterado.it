import { Routes, Route } from "react-router-dom";

// Components
import Layout from "@/components/Layout";

// Middlewares
import { ScrollMiddleWare } from "@/routes/middlewares";

// Routes
import { publicRoutes } from "@/routes";

function App() {
  return (
    <Layout>
      <Routes>
        {publicRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<ScrollMiddleWare>{route.component}</ScrollMiddleWare>}
          />
        ))}
      </Routes>
    </Layout>
  );
}

export default App;
