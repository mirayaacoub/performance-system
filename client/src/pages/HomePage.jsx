import { ReactTyped } from 'react-typed'
import '../styles/Home.css'
function HomePage() {

    return (
        <>
            <div className="home-container">
                <ReactTyped
                    className="typed-text"
                    startDelay={500}
                    strings={["Welcome"]}
                    typeSpeed={80}
                    loop="true"
                    backSpeed={30}
                />
            </div>
        </>
    )
}
export default HomePage;