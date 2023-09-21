import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/"></Route>
        <Route path="/guide"></Route>
        <Route path="/rate"></Route>
        <Route path="/stations"></Route>
        <Route path="/news"></Route>
        <Route path="/events"></Route>
        <Route path="*"></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
