import { Routes, Route } from "react-router-dom";
import ClerkProviderWithRoutes from "./auth/ClerkProviderWithRoutes";
import "./App.css";
import { AuthenticationPage } from "./auth/AuthenticationPage";
import { ChallengeGenerator } from "./challenge/ChallengeGenerator";
import { HistoryPanel } from "./history/HistoryPanel";
import { Layout } from "./layout/Layout";

function App() {
  return (
    <ClerkProviderWithRoutes>
      <Routes>
        <Route path="/sign-in/*" element={<AuthenticationPage />} />
        <Route path="/sign-up" element={<AuthenticationPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<ChallengeGenerator />} />
cd           <Route path="/history" element={<HistoryPanel />} />
        </Route>
      </Routes>
    </ClerkProviderWithRoutes>
  );
}

export default App;
