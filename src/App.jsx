import './App.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import IndexRoute from './routes/index/index.route';
import Navagation from './components/navAndFooter/nav-and-footer.component';
import EventRoute from './routes/events/events.route';
import OurTeam from './routes/ourTeam/our-team.route';
import BlogsRoute from './routes/allBlogs/blogs.route';
import BlogPage from './routes/blogPage/blog-page.route';
import SignIn from './components/authentication/sign-in.component';
import SignUp from './components/authentication/sign-up.component';
import AboutRoute from './routes/about/about.route.jsx';
import ResourcesRoute from './routes/resources/resources.route.jsx';

const App = () => {
  const location = useLocation();
  useEffect(() => {
    require('preline/preline');
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-undef
    HSStaticMethods.autoInit();
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Navagation />} >
        <Route index element={<IndexRoute />} />
        <Route path='events' element={<EventRoute />} />
        <Route path='blogs' element={<BlogsRoute />} />
        <Route path='blogs/:id' element={<BlogPage />} />
        <Route path='team' element={<OurTeam />} />
        <Route path='signin' element={<SignIn />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='about' element={<AboutRoute />} />
        <Route path='resources' element={<ResourcesRoute />} />
      </Route>
    </Routes>
  );
}

export default App;
