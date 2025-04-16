import { useMyGlobalContext } from "./myContext";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

function ToggleMyTheme() {
  const { isDark, toggleIsDark } = useMyGlobalContext();

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleIsDark}>
        {isDark ? (
          <BsFillMoonFill className="toggle-icon" />
        ) : (
          <BsFillSunFill className="toggle-icon" />
        )}
      </button>
    </section>
  );
}

export default ToggleMyTheme;
