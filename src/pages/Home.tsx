import './css/Home.css';

// Imported Components
import heroBg from '../assets/herobackground.jpg';
import Header from './components/Header';
import MockedHome from './components/home_components/mockedHome';

export default function Home() {
    return (
        <>
            <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth" style={{ scrollBehavior: 'smooth' }}>
                {/* Header */}
                <Header />

                {/* Section 1 */}
                <div className="snap-start w-full h-screen flex justify-center items-center overflow-x-hidden">
                    <div className="w-1/2 h-[30rem] text-center flex justify-center items-center text-2xl font-bold">
                        <div className="mix-blend-difference text-white z-10 w-full h-full flex justify-center items-center text-5xl">
                            EVERYTHING YOU NEED TO KNOW ABOUT ME
                        </div>
                    </div>
                </div>

                {/* Section 2 - Mini frontend website design*/}
                <div className="snap-start h-screen flex justify-center items-center overflow-x-hidden">
                    <MockedHome />
                </div>

            </div>
        </>
    );
}