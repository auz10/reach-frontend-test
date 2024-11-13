import { Route, Routes } from 'react-router-dom';
import VideoPage from './pages/VideoPage';
import Layout from './components/Layout';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="videos/:id" element={<VideoPage />} />
        <Route path="*" element={<div>Nothing Here!</div>} />
      </Route>
    </Routes>
  );
}

export default App;
