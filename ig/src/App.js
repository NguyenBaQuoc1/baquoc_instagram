import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import publicRouter from "./Router/index";
import DefaultLayout from "../src/Components/Layout/DefaultLayout/index";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRouter.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout

            return (
              <Route key={index} path={route.path} 
              element={
                <Layout>
                  <Page/>
                </Layout>
            }></Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
