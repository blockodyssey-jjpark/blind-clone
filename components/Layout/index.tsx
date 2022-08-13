import Footer from 'components/Footer';
import Header from 'components/Header';
import MaxContainer from 'components/MaxContainer';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      <MaxContainer>
        <div className="py-10">{children}</div>
      </MaxContainer>
      <Footer />
    </div>
  );
};

export default Layout;
