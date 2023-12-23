import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <main className="">
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </main>
    );
};

export default Home;