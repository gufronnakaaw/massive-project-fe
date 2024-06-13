import AuthProvider from 'react-auth-kit';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { store } from '../utils/store';
import DashAdmin from './Admin/DashAdmin';
import Schedule from './Agenda/Schedule';
import Beranda from './Beranda/Beranda';
import News from './Berita/News';
import SignUp from './Daftar/SignUp';
import DetailCollection from './Detail/DetailCollection';
import DetailNews from './DetailBerita/DetailNews';
import Colection from './Koleksi/Colection';
import Landingpage from './Landing/Landingpage';
import SignIn from './Masuk/SignIn';
import Learn from './Pelajari/Learn';
import Review from './Ulasan/Review';
import Upload from './Upload/Upload';

function App() {
  return (
    <AuthProvider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/home" element={<Landingpage />} />
          <Route path="/daftar" element={<SignUp />} />
          <Route path="/masuk" element={<SignIn />} />
          <Route path="/pelajari" element={<Learn />} />
          <Route path="/koleksi" element={<Colection />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/berita" element={<News />} />
          <Route path="/agenda" element={<Schedule />} />
          <Route path="/ulasan" element={<Review />} />
          <Route path="/koleksi/3" element={<DetailCollection />} />
          <Route path="/News" element={<DetailNews />} />
          <Route path="/admin" element={<DashAdmin />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
