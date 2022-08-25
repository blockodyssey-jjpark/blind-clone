import { atom, useAtom } from 'jotai';

import type { NextPage } from 'next';

const countAtom = atom<number>(0);

const updateNumberAtom = atom(null, (get, set, update: number) => set(countAtom, (prev) => prev + update));

const Jobs: NextPage = () => {
  const [count, setCount] = useAtom(countAtom);

  const [, updateNumber] = useAtom(updateNumberAtom);

  const increase = () => setCount((c) => c + 1);
  const decrease = () => setCount((c) => c - 1);
  const updateNumber5 = () => updateNumber(5);

  return (
    <div>
      채용공고
      <div>
        {count}
        <button type="button" className="p-3 mx-1 bg-lime-300 rounded-full" onClick={increase}>
          올려
        </button>
        <button type="button" className="p-3 mx-1 bg-red-500 rounded-full" onClick={decrease}>
          내려
        </button>
        <button type="button" className="py-3 px-4 mx-1 bg-violet-400 rounded-full" onClick={updateNumber5}>
          5 더하기
        </button>
      </div>
    </div>
  );
};

export default Jobs;
