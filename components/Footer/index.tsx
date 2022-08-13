/* eslint-disable jsx-a11y/anchor-is-valid */

import Link from 'next/link';

import MaxContainer from 'components/MaxContainer';

const Footer = () => {
  const links = [
    {
      href: '/',
      text: '서비스 소개',
    },
    {
      href: '/',
      text: '이용약관',
    },
    {
      href: '/',
      text: '디렉토리',
    },
    {
      href: '/',
      text: '개인정보 처리방침',
    },
    {
      href: '/',
      text: 'Blind Hub 기업서비스',
    },
    {
      href: '/',
      text: '신고가이드',
    },
  ];

  return (
    <footer>
      <MaxContainer>
        <div className="mt-2 mb-10 py-2 flex flex-col items-center gap-6">
          <div className="flex justify-center gap-8">
            {links.map(({ href, text }) => (
              <Link href={href} key={text}>
                <a className="text-gray-500">{text}</a>
              </Link>
            ))}
          </div>
          <div className="text-center text-gray-400">© 2020 Teamblind. Inc</div>
        </div>
      </MaxContainer>
    </footer>
  );
};

export default Footer;
