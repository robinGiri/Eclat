import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Customizer from '../Customizer';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Customizer />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
