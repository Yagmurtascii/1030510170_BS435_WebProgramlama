export const playSound = () => {
    const ses = new Audio('buttonAudio.mp3');
    ses.play();
};

export const wrongSound = () => {
    const ses = new Audio('wrong.mp3');
    ses.play();
};

export const correctSound = () => {
    const ses = new Audio('correct.mp3');
    ses.play();
};
