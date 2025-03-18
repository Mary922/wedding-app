import {useRef, useState} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import Lottie from "lottie-react";
import envelope from '/envelope.json'
import {useNavigate} from "react-router-dom";


const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Занимает всю высоту экрана
        position: 'relative',
    },
    button: {
        margin: '10px',
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
    },
    animationContainer: {
        position: 'absolute',
        bottom: 50, // Располагаем контейнер анимации внизу экрана
        left: '50%',
        transform: 'translateX(-50%)', // Центрируем по горизонтали
    },
};

function App() {
    // const navigate = useNavigate();
    const [isPlaying, setIsPlaying] = useState(false);
    const lottieRef = useRef();

    const handlePlay = () => {
        setIsPlaying(true);
        lottieRef.current.play();

        setTimeout(() => {
            window.location.replace('http://wedding-couple.ru/static-site/'); // Переход на другую страницу
        }, 3000);

        // setTimeout(() => {
        //     window.location.replace('/public/wedding-master/index.html'); // Переход на другую страницу
        // }, 3000);
    };

    const handleStop = () => {
        setIsPlaying(false);
        lottieRef.current.stop();
    };

    return (
        <>
            <div className='first-screen'>

                <div style={styles.container}>
                    {/*<button onClick={handlePlay} disabled={isPlaying} style={styles.button}>*/}
                    {/*    Play Animation*/}
                    {/*</button>*/}
                    {/*<button onClick={handleStop} disabled={!isPlaying} style={styles.button}>*/}
                    {/*    Stop Animation*/}
                    {/*</button>*/}
                    <div style={styles.animationContainer}>
                        <Lottie
                            onClick={handlePlay}
                            lottieRef={lottieRef}
                            animationData={envelope}
                            loop={true}
                            autoplay={false}
                            style={{width: 300, height: 300, cursor: 'pointer'}}
                        />
                        <div style={{color: 'pink', bottom: 20}}>для просмотра нажмите на конверт</div>
                    </div>
                </div>

                <div>
                </div>


                {/*<a href='/public/wedding-master/index.html'>открыть</a>*/}
            </div>

        </>
    )
}

export default App
