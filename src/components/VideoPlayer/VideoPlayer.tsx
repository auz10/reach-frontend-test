import { useEffect, useRef, useState } from 'react';

interface VideoFrameMetadata {
  width: number;
  height: number;
}

interface Props {
  video: string;
  annotations: [] | [[]];
}

function VideoPlayer({ video, annotations }: Props) {
  const [frameInfo, setFrameInfo] = useState({});
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const frameRate = 30;

  useEffect(() => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      setCtx(context);
    }
  }, []);

  const drawCanvas = (frame: number) => {
    if (canvasRef.current && ctx) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      ctx.beginPath();
      annotations[frame]?.map((data) => {
        ctx.rect(data[0], data[1], data[2], data[3]);
      });
      ctx.lineWidth = 6;
      ctx.strokeStyle = 'red';
      ctx.stroke();
    }
  };

  const handleVideoReady = () => {
    if (videoRef.current) {
      videoRef.current.requestVideoFrameCallback(handleFrameChange);
    }
  };

  const handleFrameChange = (
    _now: DOMHighResTimeStamp,
    metadata: VideoFrameMetadata
  ) => {
    if (videoRef.current && canvasRef.current) {
      const frame = Math.round(frameRate * videoRef.current.currentTime);
      canvasRef.current.width = metadata.width;
      canvasRef.current.height = metadata.height;

      drawCanvas(Math.round(frameRate * videoRef.current.currentTime));
      setFrameInfo(annotations[frame]);

      videoRef.current.requestVideoFrameCallback(handleFrameChange);
    }
  };

  const handleSeek = () => {
    if (videoRef.current) {
      drawCanvas(Math.round(frameRate * videoRef.current.currentTime));
    }
  };

  return (
    <div className="relative border border-default w-full">
      <video
        ref={videoRef}
        controls={true}
        src={video}
        onLoadedData={() => handleVideoReady()}
        onSeeked={() => handleSeek()}
      ></video>
      <div className="absolute top-0 left-0 bg-black bg-opacity-70">
        {JSON.stringify(frameInfo)}
      </div>
      <canvas
        ref={canvasRef}
        className="absolute h-full top-0 left-0 pointer-events-none"
      ></canvas>
    </div>
  );
}

export default VideoPlayer;
