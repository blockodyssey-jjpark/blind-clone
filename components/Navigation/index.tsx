/* eslint-disable jsx-a11y/anchor-is-valid */
import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';

type NavigationProps = {
  menu: {
    href: string;
    text: string;
  }[];
};

const Navigation = ({ menu }: NavigationProps) => {
  const router = useRouter();

  return (
    <nav className="flex justify-start items-center gap-4">
      {menu.map(({ href, text }) => (
        <Link href={href} key={text}>
          <a
            className={cn('text-gray-800 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium', {
              'bg-gray-100': router.route === href,
            })}
          >
            {text}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
