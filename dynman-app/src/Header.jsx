import { useContext } from "react";
import { ManualContext } from "./ManualContext";

const Header = () => {
  const { manual } = useContext(ManualContext);
  return (
    <>
      <header className="header">
        <a href="/">
          <img
            className="logo"
            src="/logo_zmj_web.png"
            alt="Zažít město jinak"
          ></img>
        </a>
        <div className="link-palette">
          {manual &&
            manual.links.map((l, i) => (
              <a key={i} className="header-link" href={l.link} target="_blank">
                {l.title}
              </a>
            ))}
        </div>
      </header>
      <hr></hr>
    </>
  );
};

export default Header;
