import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <main className="px-3 md:px-0">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </main>
    );
};

export default Home;