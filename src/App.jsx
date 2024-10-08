import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRouter } from './routes/routes';
import DefaultLayout from './Layout/DefaultLayout';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRouter.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
