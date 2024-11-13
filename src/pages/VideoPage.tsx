import { useEffect, useState } from 'react';
import VideoPlayer from '../components/VideoPlayer';
import { useParams } from 'react-router-dom';
import { getDataItem } from '../utils/mockData';
import RawData from '../components/RawData';
import Comments from '../components/Comments';

function VideoPage() {
  const { id } = useParams();
  const [annotations, setAnnotations] = useState<[] | [[]]>([]);
  const [video, setVideo] = useState<string>();

  const data = getDataItem(Number(id));

  useEffect(() => {
    if (data) {
      const videoPromise = fetch(data.url, {
        headers: {
          Accept: 'video/mp4',
        },
      });

      const annotationsPromise = fetch(data.annotations, {
        headers: {
          Accept: 'application/json',
        },
      });

      Promise.all([videoPromise, annotationsPromise]).then(
        (results: Response[]) => {
          results.map((result) => {
            const contentType = result.url.split('.').pop();
            if (contentType === 'json') {
              result.json().then((json) => setAnnotations(json));
            } else if (contentType === 'mp4') {
              result.blob().then((blob) => {
                setVideo(URL.createObjectURL(blob));
              });
            }
          });
        }
      );
    }
  }, [data]);

  return (
    <div className="grid  grid-cols-1 lg:grid-cols-3 grid-rows-2 gap-5 max-w-[120rem]">
      <div className='lg:col-span-2'>
        {video && <VideoPlayer annotations={annotations} video={video} />}
      </div>
      <div className="lg:col-span-1 contain-size">
        {data && <Comments id={data.id} url={data.socketUrl}></Comments>}
      </div>

      <span className="lg:col-span-3">
        {data && <RawData annotations={annotations} slug={data.slug} />}
      </span>
    </div>
  );
}

export default VideoPage;
