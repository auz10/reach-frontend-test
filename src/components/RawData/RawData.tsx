import { useEffect, useState } from 'react';
import Button from '../Button';
import {
  ArrowDownTrayIcon,
  ArrowsPointingOutIcon,
} from '@heroicons/react/16/solid';

interface RawDataProps {
  annotations: [] | [[]];
  slug: string;
}

function RawData({ annotations, slug }: RawDataProps) {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => setExpanded(false), [slug]);

  return (
    <div
      className={`border border-default ${
        expanded
          ? 'absolute top-0 left-0 bg-black h-full p-5 pr-0'
          : 'relative py-2 px-3'
      }`}
    >
      <div className="flex justify-between">
        <span>
          <span className="font-bold">Raw Data</span>
          <span className="hidden sm:inline font-light">
            {' '}
            - {annotations.length} Frames
          </span>
        </span>
        <div className={`flex gap-2 ${expanded ? 'pr-3' : 'pr-0'}`}>
          <Button
            onClick={() => setExpanded((prev) => !prev)}
            id="expand-button"
            aria-expanded={expanded}
            aria-controls="data-panel"
          >
            <span className="flex items-center gap-1">
              <ArrowsPointingOutIcon className="size-3" />{' '}
              {expanded ? 'Hide' : 'Expand'}
            </span>
          </Button>
          <a
            href={`data:text/json;charset=utf-8,${encodeURIComponent(
              JSON.stringify(annotations)
            )}`}
            download={`${slug}-raw-data.json`}
          >
            <Button>
              <span className="flex items-center gap-1">
                <ArrowDownTrayIcon className="size-3" /> Download
              </span>
            </Button>
          </a>
        </div>
      </div>
      {expanded && (
        <div
          className="py-3 text-xs overflow-scroll h-full"
          id="data-panel"
          aria-labelledby="expand-button"
        >
          <code>{JSON.stringify(annotations)}</code>
        </div>
      )}
    </div>
  );
}

export default RawData;
