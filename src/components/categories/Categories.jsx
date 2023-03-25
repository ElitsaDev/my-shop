import styles from "./Categories.module.css";
import { useState } from "react";
import { useCountdown } from "../../hooks/useCountdown";
//3 * 24 * 60 * 60 * 1000;
const THREE_DAYS_IN_MS =  60 * 1000;
const NOW_IN_MS = new Date().getTime();

const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

export default function Categories() {
    const [disabled, setDisabled] = useState(false);

    const CountdownTimer = ({ targetDate }) => {
        const [days, hours, minutes, seconds] = useCountdown(targetDate);
      
        if (days + hours + minutes + seconds <= 0) {
          setDisabled(true);  
          return <h5>Promotion is expired! But there will be a new one soon.</h5>;
        }else {
            return (<>
                <div className="cd-item">
                    <span>{days}</span>
                    <p>Days</p>
                </div>
                <div className="cd-item">
                    <span>{hours}</span>
                    <p>Hours</p>
                </div>
                <div className="cd-item">
                    <span>{minutes}</span>
                    <p>Minutes</p>
                </div>
                <div className="cd-item">
                    <span>{seconds}</span>
                    <p>Seconds</p>
                </div>
            </>)
        }
    }

    return (
        <section className="categories spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="categories__text">
                            <h2>Clothings Hot <br /> <span>Shoe Collection</span> <br /> Accessories</h2>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="categories__hot__deal">
                            <img src="img/product-sale.png" alt="" />
                            <div className="hot__deal__sticker">
                                <span>Sale Of</span>
                                <h5>$29.99</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1">
                        <div className="categories__deal__countdown">
                            <span>Deal Of The Week</span>
                            <h2>Multi-pocket Chest Bag Black</h2>
                            <div className="categories__deal__countdown__timer" id="countdown">
                                <CountdownTimer className={styles.countdown} targetDate={dateTimeAfterThreeDays} >
                                </CountdownTimer>
                            </div>
                            {!disabled &&
                            <a href="/shop" className="primary-btn">Shop now</a>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}