import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

function useWebsocket(url: string) {
  const [connected, setConnected] = useState<boolean>(false);
  const [message, setMessage] = useState();

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.addEventListener('open', () => {
      setConnected(true);
    });

    socket.addEventListener('message', (e) => {
      const data = JSON.parse(e.data);
      data.time = dayjs().format('h:mma');
      setMessage(data);
    });

    socket.addEventListener('close', () => {
      setConnected(false);
    });

    return () => socket.close();
  }, [url]);

  return { connected, message };
}

export default useWebsocket;
