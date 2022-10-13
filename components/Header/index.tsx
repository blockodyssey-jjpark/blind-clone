/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

import MaxContainer from 'components/MaxContainer';

import Logo from '../Logo';
import Navigation from '../Navigation';

const Header = () => {
  return (
    <header className="bg-white shadow">
      <MaxContainer>
        <div className="flex justify-between items-center py-5">
          <div className="flex justify-start items-center gap-8">
            <Logo />
            <Navigation
              menu={[
                { href: '/', text: '홈' },
                { href: '/company', text: '기업 리뷰' },
                { href: '/jobs', text: '채용공고' },
              ]}
            />
          </div>
          <div className="flex justify-start items-center gap-3">
            <Link href="/canvas">
              <a className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700">
                글쓰기
              </a>
            </Link>
            <Link href="/login">
              <a className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-gray-500 hover:text-gray-900">
                로그인
              </a>
            </Link>
          </div>
        </div>
      </MaxContainer>
    </header>
  );
};

export default Header;
