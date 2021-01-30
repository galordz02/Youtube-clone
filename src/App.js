import './App.css';
import Header from './Header.js';
import Sidebar from './Sidebar.js';
import RecommendedVideos from './RecommendedVideos.js';

function App() {
  return (
    //BEM class naming convention
    <div className="app">
      <Header/>
      <div className="app_page">
        <Sidebar/>
        <RecommendedVideos/>
      </div>
    </div>
  );
}

export default App;
