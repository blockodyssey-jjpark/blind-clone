/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

import type { NextPage } from 'next';

const Company: NextPage = () => {
  return (
    <div className="flex gap-4">
      <Link href="/chart/bar">
        <a className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
          Bar Chart
        </a>
      </Link>
      <Link href="/chart/donut">
        <a className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700">
          Donut Chart
        </a>
      </Link>
    </div>
  );
};

export default Company;
