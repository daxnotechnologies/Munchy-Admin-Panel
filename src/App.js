import Navbar from "./Componetns/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Componetns/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import UserReviews from "./Componetns/UserReviews";
import ManageBookings from "./Componetns/ManageBookings";
import BookingHistory from "./Componetns/BookingHistory";
import Login from "./Componetns/LogIn";
import Admins from "./Componetns/Admin";
import AllHotels from "./Componetns/AllHotels";
import AllEventSpace from "./Componetns/AllEventSpace";
import AllShortLet from "./Componetns/AllShortLet";
import PendingUsers from "./Componetns/PendingUsers";
import AllProperties from "./Componetns/AllProperties";
import GuestDetails from "./Componetns/GuestDetails";
import PaymentsFromAdmin from "./Componetns/PaymentsFromAdmin";
import ManageBookingsVendor from "./Componetns/ManageBookingsVendor";
import AllPropertiesVendor from "./Componetns/AllPropertiesVendor";
import BusinessOwners from "./Componetns/BusinessOwners";
import NonBusinessOwners from "./Componetns/NonBusinessOwners";
import ViewBusinessOwners from "./Componetns/ViewBusinessOwners";
import ViewNonBusinessOwners from "./Componetns/ViewNonBusinessOwners";
import Support from "./Componetns/MunchySupportContact";

function App() {
  return (
    <>
      <div className="flex">
        <Navbar />

        <div className="w-full">
          <Router>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/Dashboard" element={<Dashboard />} />
              <Route
                exact
                path="/BusinessOwners"
                element={<BusinessOwners />}
              />
              <Route
                exact
                path="/NonBusinessOwners"
                element={<NonBusinessOwners />}
              />
              <Route
                exact
                path="/ViewBusinessOwners"
                element={<ViewBusinessOwners />}
              />
              <Route
                exact
                path="/ViewNonBusinessOwners"
                element={<ViewNonBusinessOwners />}
              />
              <Route exact path="/Support" element={<Support />} />
              <Route exact path="/UserReviews" element={<UserReviews />} />
              <Route exact path="/Admins" element={<Admins />} />
              <Route exact path="/AllHotels" element={<AllHotels />} />
              <Route exact path="/AllEventSpace" element={<AllEventSpace />} />
              <Route exact path="/AllProperties" element={<AllProperties />} />

              <Route exact path="/AllShortLet" element={<AllShortLet />} />
              <Route exact path="/PendingUsers" element={<PendingUsers />} />

              <Route
                exact
                path="/CompletedBookings"
                element={<BookingHistory />}
              />

              <Route
                exact
                path="/ManageBookings"
                element={<ManageBookings />}
              />
              <Route exact path="/GuestDetails" element={<GuestDetails />} />

              <Route
                exact
                path="/PaymentsFromAdmin"
                element={<PaymentsFromAdmin />}
              />
              <Route
                exact
                path="ManageBookingsVendor"
                element={<ManageBookingsVendor />}
              />
              <Route
                exact
                path="/AllPropertiesVendor"
                element={<AllPropertiesVendor />}
              />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  );
}

export default App;
