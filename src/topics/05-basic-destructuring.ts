

interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details:Details;//si vamos a declarar un objeto en una interface, lo mejor es crearle su propia interface a dicho objeto
}

interface Details{
    author:string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 5,
    song: "La duda",
    details: {
        author: "Enjambre",
        year: 2012
    }
}

//destructuración de objetos en TypeScript, si bien es JavaScript recordar que todo lo de este ultimo aplica en TypeScript
const song = 'New Song';

const {audioVolume:volume, songDuration:duration, song:anotherSong, details} = audioPlayer;//dado que la variable song ya existía y con el fin de aprender se decidio renombrar la variable de la desestructuracion 
const { author, year } = details;

 console.log(`Song: ${anotherSong}`);
console.log(`Duration: ${duration}`);
console.log(`Volume: ${volume}`);

console.log(`Author: ${author}`);
console.log(`Year: ${year}`);

const [, ,trunks='Not Found']:string[] = ['Goku', 'Vegeta'];

console.error ('Personaje 3:'+ trunks)







export{};