interface VideoPlayElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocol {
  playToglle(): void;
  stop(): void;
  iniciarEvento(): void;
}

export default class VideoPlayer implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;
  }

  iniciarEvento(): void {
    this.playButton.addEventListener("click", () => {
      this.playToglle();
    });

    this.stopButton.addEventListener("click", () => {
      this.videoPlayer.pause();
      this.videoPlayer.currentTime = 0;
      this.playButton.innerText = "Play";
    });
  }

  playToglle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.innerText = "Pause";
    } else {
      this.videoPlayer.pause();
      this.playButton.innerText = "Play";
    }
  }

  stop(): void {
    //
  }
}

const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector(".video") as HTMLVideoElement,
  playButton: document.querySelector(".play") as HTMLButtonElement,
  stopButton: document.querySelector(".stop") as HTMLButtonElement,
});

videoPlayer.iniciarEvento();


/**
 Documentação para implemantar videos

 https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video

 */
