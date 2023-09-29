import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout'
import Stations from './page/Stations'
import Home from './page/Home'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="guide" element={<Stations />}></Route>
          <Route path="rate" element={<Stations />}></Route>
          <Route path="stations" element={<Stations />}></Route>
          <Route path="news" element={<Stations />}></Route>
          <Route path="events" element={<Stations />}></Route>
          <Route path="login"></Route>
        </Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
