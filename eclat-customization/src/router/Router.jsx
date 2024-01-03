import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Customizer from '../Customizer'
function Router() {
  return (
   <Router>
        <Routes>
            <Route path = "/:productID" element = <Customizer/> />
        </Routes>
   </Router>
  )
}

export default Router