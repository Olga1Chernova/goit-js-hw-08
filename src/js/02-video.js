import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeVideoPlayer = document.querySelector('#vimeo-player');
const player = new Player(iframeVideoPlayer);

const onPlay = (event) => {
    localStorage.setItem("videoplayer-current-time", event.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const getLocalStorageContent = localStorage.getItem("videoplayer-current-time");
player.setCurrentTime(getLocalStorageContent);


