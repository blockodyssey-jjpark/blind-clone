import { ThumbUpIcon, ChatIcon, DatabaseIcon, BriefcaseIcon, HeartIcon } from '@heroicons/react/solid';

import SearchBar from 'components/SearchBar';
import Topic from 'components/Topic';

import type { NextPage } from 'next';

const Home: NextPage = () => {
  const dummyList = [
    { title: '이 가방 사고 싶은데', category: '지름·쇼핑', likes: 0, comments: 51 },
    { title: '딱 1300만원의 여윳돈이 생김', category: '블라마켓', likes: 3, comments: 195 },
  ];
  const dummyList2 = [
    { title: '이 가방 사고 싶은데', views: 51 },
    { title: '딱 1300만원의 여윳돈이 생김', views: 195 },
  ];

  return (
    <div className="flex gap-8">
      <div className="w-2/3 flex flex-col gap-8">
        <SearchBar />
        <Topic title="토픽 베스트" icon={ThumbUpIcon} list={dummyList} />
        <div className="grid grid-cols-2 gap-8">
          <Topic title="블라블라" icon={ChatIcon} list={dummyList2} />
          <Topic title="주식·투자" icon={DatabaseIcon} list={dummyList2} />
          <Topic title="썸·연애" icon={HeartIcon} list={dummyList2} />
          <Topic title="이직·커리어" icon={BriefcaseIcon} list={dummyList2} />
        </div>
      </div>
      <div className="w-1/3 bg-gray-100 rounded-md p-4 text-gray-400">광고영역</div>
    </div>
  );
};

export default Home;
