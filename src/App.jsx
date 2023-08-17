import { BrowserRouter } from "./Router/BrowserRouter";

import Route from "./Router/Route";
import HomePage from "./pages/HomePage";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={<HomePage />} />
      <Route path="settings" component={<Settings />} />
    </BrowserRouter>
  );
}
