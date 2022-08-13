type TopicArticleInfoProps = {
  data?: number;
  icon: React.ElementType;
};

const TopicArticleInfo = ({ data, icon: Icon }: TopicArticleInfoProps) => {
  if (data === undefined) return null;

  return (
    <div className="flex items-center gap-1 w-12">
      <Icon className="w-4 text-gray-400" />
      <span className="text-sm text-gray-400">{data}</span>
    </div>
  );
};

export default TopicArticleInfo;
