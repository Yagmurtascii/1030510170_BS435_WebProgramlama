import {playSound} from "./SoundManager";
import ModePage from "./ModePage";
export const route = (name) => {
    if (name === "timing" || name === "classic" || name === "punishment") {
         playSound(); // Ses çalma işlevini çağırın
        setTimeout(() => {
            window.location.href = `/${name}`;
        }, 100);
    }
    else {
        window.location.href = `/${name}`;
    }
}




