import { useEffect, useState } from "react";
import { useCountdown } from "../../hooks/useCountdown";
import { Link } from "react-router-dom";
export default function CountdownTimer({ 
    targetDate, 
}){
    const [disabled, setDisabled] = useState(false);
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    useEffect(() => {
        if (days + hours + minutes + seconds <= 0) {
            setDisabled(true);
        }
    },[days, hours, minutes, seconds]);
    
    return (disabled 
        ? <h5>Promotion is expired! But there will be a new one soon.</h5>
        : (<>
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
            
            <Link to="/shop" className="primary-btn">Shop now</Link>
            
        </>)
    );
}