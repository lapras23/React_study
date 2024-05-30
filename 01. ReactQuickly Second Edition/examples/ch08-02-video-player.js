import "./App.css";
import { useState, useRef } from "react";

const VIDEO_SRC =
  "//images-assets.nasa.gov/video/One Small Step/One Small Step~orig.mp4";

const VideoPlayer = () => {
  const [isPlaying, SetPlaying] = useState(false);
  const onPlay = () => SetPlaying(true); // onPlay 함수가 실행되면 isPlaying을 true로 설정
  const onPause = () => SetPlaying(false); // onPause 함수가 실행되면 isPlaying을 false로 설정
  const onClickPlay = () => video.current.play(); // onClickPlay 함수가 실행되면 play함수를 실행
  const onClickPause = () => video.current.pause(); // onClickPause 함수가 실행되면 pause 함수를 실행
  const video = useRef();

  return (
    <section>
      <video
        ref={video}
        src={VIDEO_SRC}
        controls
        width="480"
        onPlay={onPlay}
        onPause={onPause}
      />
      <button onClick={isPlaying ? onClickPause : onClickPlay}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </section>
  );
};

function App() {
  return <VideoPlayer />;
}

export default App;
