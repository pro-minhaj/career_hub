import Logo from '../../assets/logo/CareerHub.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='bg-gradient-to-r from-indigo-100 py-8 rounded-md'>
            <div className="flex items-center justify-between container mx-auto">
                <div>
                    <img src={Logo} alt="" />
                </div>
                <ul className="flex items-center gap-10 text-neutral-500 text-base font-medium font-['Manrope']">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/statistics">Statistics</Link>
                    </li>
                    <li>
                        <Link to="/applied">Applied Jobs</Link>
                    </li>
                    <li>
                        <Link to="/">Blog</Link>
                    </li>
                </ul>
                <button className="py-[15px] px-6 bg-gradient-to-r from-indigo-400 to-violet-500 rounded-lg justify-start items-start gap-2.5 text-white text-xl font-extrabold font-['Manrope']">Star Applying</button>
            </div>
        </header>
    );
};

export default Header;