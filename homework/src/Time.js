import {useEffect, useState} from "react";
import {Button, FormLabel} from "react-bootstrap";

function Countdown({seconds}) {
    const [second, setSecond] = useState(seconds);
    const [isCounting, setIsCounting] = useState(false); // Geriye sayımın devam edip etmediğini kontrol etmek için kullanılır

    useEffect(()=>
    {
        let countdown;
        if(isCounting && second>0) //butona basıldığında işlemi başlatmak adına bir değişken konur.
        {
            countdown=setInterval(() => {
                setSecond((prevSecond) => prevSecond - 1); //azaltma işlemi
            }, 1000); //  1 saniye
        }

        if(second<=0)
            clearInterval(countdown); //zamanlayıcı durar

        return () => {
            clearInterval(countdown); //zamanlayıcı temizlenir
        };
    }, [second]) //second her güncellendiğinde useEffect tekrardan çalışır.

    const startCountdown=()=>{
        if (second > 0) {
            setSecond(prevSecond=>prevSecond - 1);
        }
        setIsCounting(true); // butona tıklanınca useEffect çalışmasını tetikler.
    };
    return(
        <div>
            <Button onClick={()=>startCountdown()}></Button>
            <br/>
            <FormLabel >{second}</FormLabel>
        </div>
    )
}
export default Countdown;
