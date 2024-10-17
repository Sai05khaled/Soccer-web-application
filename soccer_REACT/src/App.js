import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Singup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Result from './components/Result';
import News from './components/News';
import Standings from './components/Standings';
import Blog from './components/Blog';
import AddMatch from './components/AddMatch';
import MatchesTable from './components/MatchesTable';
import AddPlayer from './components/AddPlayer';
import AddTeam from './components/AddTeam';
import MatchInfo from './components/MatchInfo';
import TeamsTable from './components/TeamsTable'
import TeamInfo from './components/TeamInfo';
import PlayersTable from './components/PlayersTable';
import PlayerInfo from './components/playerInfo';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/subscrption" element={<Signup />} />
          <Route path="/result" element={<Result />} />
          <Route path="/news" element={<News />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/addMatch" element={<AddMatch />} />
          <Route path="/editMatch/:id" element={<AddMatch />} />
          <Route path="/matchesTable" element={<MatchesTable />} />
          <Route path="/addPlayer" element={<AddPlayer />} />
          <Route path="/addTeam" element={<AddTeam />} />
          <Route path="/matchInfo/:id" element={<MatchInfo />} />
          <Route path="/TeamsTable" element={<TeamsTable />} />
          <Route path="/TeamsInfo" element={<TeamInfo />} />
          <Route path="/PlayersTable" element={<PlayersTable />} />
          <Route path="/playersInfo" element={<PlayerInfo />} />



        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
