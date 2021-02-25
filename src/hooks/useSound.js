import useSound from 'use-sound';

function Song() {
    const soundUrl = '../music/MIRIN_DOJA - DOJA GIRL INFINITE - 02 RHONE ft. RHONE.mp3';
    const [play, { stop, isPlaying }] = useSound(soundUrl);
    return (
      <PlayButton
        active={isPlaying}
        size={60}
        iconColor="var(--color-background)"
        idleBackgroundColor="var(--color-text)"
        activeBackgroundColor="var(--color-primary)"
        play={play}
        stop={stop}
      />
    );
  }
export default PlayButton;
