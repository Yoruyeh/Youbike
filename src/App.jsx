import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout'
import Stations from './page/Stations'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="guide"></Route>
          <Route path="rate"></Route>
          <Route path="stations" element={<Stations />}></Route>
          <Route path="news"></Route>
          <Route path="events"></Route>
        </Route>
        <Route path="*"></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
