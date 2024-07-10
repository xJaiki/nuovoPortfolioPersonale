import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components/Common/Home';
// import Portfolio from './Components/Common/Portfolio';
// import Curriculum from './Components/Common/Curriculum';
import NotFound from './Components/Common/NotFound';
import Nav from './Components/Common/Nav';

const App = () => {
    return (
        <>
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="/chi_e" />} />
                        <Route path="/chi_e" element={<Home />} />
                        {/* <Route path="/cosa_ha_fatto" element={<Portfolio />} />
                        <Route path="/curriculum" element={<Curriculum />} /> */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </Router>
        </>
    );
};

export default App;