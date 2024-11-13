import { useEffect, useRef, useState } from 'react';
import useWebsocket from '../../hooks/useWebsocket';

interface Comment {
  name: string;
  message: string;
  picture: string;
  time: string;
}

interface CommentProps {
  id: number;
  url: string;
}

function Comments({ id, url }: CommentProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const {
    connected,
    message,
  }: { connected: boolean; message: Comment | undefined } = useWebsocket(url);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => setComments([]), [id])

  useEffect(() => {
    if (message) {
      setComments((prev) => [...prev, message]);
    }
  }, [message]);

  useEffect(
    () =>
      ref?.current?.scrollTo({
        top: 99999,
        left: 0,
        behavior: 'smooth',
      }),
    [comments.length]
  );

  return (
    <div className="flex flex-col gap-3 border border-default h-full">
      <div className="border-b border-default py-2 px-3">
        <h4 className="font-bold">
          Comments <span className="font-thin">({comments.length})</span>
        </h4>
      </div>
      {connected && (
        <div
          className="flex flex-col gap-5 overflow-scroll pb-4"
          ref={ref}
        >
          {comments &&
            comments.map((comment, i) => (
              <div className="flex flex-col gap-1 px-3" key={i}>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <div className="flex justify-center items-center rounded-full w-5 h-5 bg-green-950 text-xs border overflow-hidden">
                      <img className="w-full h-full" src={comment.picture} />
                    </div>
                    <div className="text-sm font-bold">{comment.name}</div>
                  </div>
                  <div className='text-xs'>{comment.time}</div>
                </div>
                <div className="text-sm">{comment.message}</div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default Comments;
