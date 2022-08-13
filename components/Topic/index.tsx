import { ChatIcon, EyeIcon, ThumbUpIcon } from '@heroicons/react/outline';

import TopicArticleInfo from 'components/TopicArticleInfo';

type ArticleType = {
  title: string;
  category?: string;
  likes?: number;
  comments?: number;
  views?: number;
};

type TopicType = {
  title: string;
  icon: React.ElementType;
  list: ArticleType[];
};

const Topic = ({ title, icon: Icon, list }: TopicType) => {
  return (
    <div className="border border-gray-300 shadow-sm py-2 px-5 rounded-md">
      <div className="flex justify-between items-center py-3">
        <h3 className="text-lg font-bold flex items-center gap-2">
          <Icon className="w-7" />
          {title}
        </h3>
        <button type="button" className="text-sm text-gray-400">
          더보기
        </button>
      </div>
      <ul className="py-3">
        {list.map(({ title: articleTitle, category, likes, comments, views }) => (
          <li key={articleTitle} className="flex justify-between mb-2">
            <div className="flex gap-2">
              {category && <span className="rounded-full bg-gray-100 text-sm py-0.5 px-2 text-center">{category}</span>}
              <h4>{articleTitle}</h4>
            </div>
            <div className="flex">
              <TopicArticleInfo data={likes} icon={ThumbUpIcon} />
              <TopicArticleInfo data={comments} icon={ChatIcon} />
              <TopicArticleInfo data={views} icon={EyeIcon} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Topic;
