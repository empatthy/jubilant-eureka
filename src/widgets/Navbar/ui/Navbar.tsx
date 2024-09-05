import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={'/'} className={cls.mainLink}>
          Main
        </AppLink>
        <AppLink to={'/about'}>About</AppLink>
      </div>
    </div>
  );
};
