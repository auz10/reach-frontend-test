export interface Data {
  id: number;
  title: string;
  slug: string;
  url: string;
  annotations: string;
  socketUrl: string;
}

export const data: Data[] = [
  {
    id: 1,
    title: 'Video 1',
    slug: 'video-1',
    url: 'https://reach-industries-candidate-tests.s3.eu-west-2.amazonaws.com/FrontendCandidateTest-FINAL.mp4',
    annotations:
      'https://reach-industries-candidate-tests.s3.eu-west-2.amazonaws.com/FrontendCandidateTest-FINAL.json',
    socketUrl: 'wss://ttchatsocket.lumi.systems:443/',
  },
  {
    id: 2,
    title: 'Video 2',
    slug: 'video-2',
    url: 'https://reach-industries-candidate-tests.s3.eu-west-2.amazonaws.com/FrontendCandidateTest-FINAL.mp4',
    annotations:
      'https://reach-industries-candidate-tests.s3.eu-west-2.amazonaws.com/FrontendCandidateTest-FINAL.json',
    socketUrl: 'wss://ttchatsocket.lumi.systems:443/',
  },
  {
    id: 3,
    title: 'Video 3',
    slug: 'video-3',
    url: 'https://reach-industries-candidate-tests.s3.eu-west-2.amazonaws.com/FrontendCandidateTest-FINAL.mp4',
    annotations:
      'https://reach-industries-candidate-tests.s3.eu-west-2.amazonaws.com/FrontendCandidateTest-FINAL.json',
    socketUrl: 'wss://ttchatsocket.lumi.systems:443/',
  },
];

export const getDataItem = (id: number): Data | undefined => {
  return data.find((item) => item.id === id);
};
