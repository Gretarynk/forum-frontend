import styles from "../NavBar/navBar.module.css";

type LinkType = {
  id: number;
  title: string;
  href: string;
};
type NavBarProps = {
  links: LinkType[];
};

const NavBar = ({ links }: NavBarProps) => {
  return (
    <>
      <div className={styles.navDesktop}>
        <ul className={styles.links}>
          {links.map((link) => {
            return (
              <a href={link.href} key={link.id}>
                {link.title}
              </a>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default NavBar;
