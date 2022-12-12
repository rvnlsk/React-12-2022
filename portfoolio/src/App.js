import { Link, Route, Routes } from "react-router-dom"
import './App.css';
import Courses from './pages/Courses';
import Hobbies from './pages/Hobbies';
import Work from './pages/Work';

function App() {
  return (
    <div className="App">
      <img className="main-picture" src="https://i.ytimg.com/vi/TwYKwaEjJd4/maxresdefault.jpg" alt="" />
      <div className="rectangle"></div>

      <div className="navigation-pictures">
        <Link className="main-link" to="work">
        <img src="https://blog.optimalworkshop.com/wp-content/uploads/2020/03/19-user-research-tips-from-2019.png" alt="" />
        <p>Toode lehele</p>
        </Link>
        <Link className="main-link" to="hobbies">
        <img src="https://static01.nyt.com/images/2019/10/16/autossell/hobby_promo/hobby_promo-master768.jpg" alt="" />
        <p>Hobide lehele</p>
        </Link>
        <Link className="main-link" to="courses">
        <img src="https://cdn.mos.cms.futurecdn.net/KTsKk7aTNqEiKvGQVaCqF5.jpg" alt="" />
        <p>Kursuste lehele</p>
        </Link>
    </div>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/wfC1qxJ59dM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <Routes>
        <Route path="work" element={ <div>Work</div> } />
        <Route path="hobbies" element={ <div>Hobbies</div> } />
        <Route path="courses" element={ <div>Courses</div> } />
      </Routes>

    </div>
    
  );
}

export default App;
