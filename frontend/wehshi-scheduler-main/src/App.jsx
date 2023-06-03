import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Signin,
  Signup,
  EventsFeed,
  CreateEvent,
  EventDetail,
  EventList,
} from "./pages";
import { PageNotFound } from "./components";
import { Header } from "./commen";

const App = () => (
  <BrowserRouter>
    <div className="wrapper">
      <Header />
      <main>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/auth/signin" exact element={<Signin />} />
          <Route path="/auth/signup" exact element={<Signup />} />
          <Route path="/eventsfeed" exact element={<EventsFeed />} />
          <Route path="/createevent" exact element={<CreateEvent />} />
          <Route path="/eventdetail/:id" element={<EventDetail />} />
          <Route path="/eventlist" exact element={<EventList />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);

export default App;
