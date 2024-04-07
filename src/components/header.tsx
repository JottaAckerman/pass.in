import nlwUniteIcon from "../assets/nlw-unite.svg";
import { NavLink } from "./nav-link";

export function Header() {
  return (
    <div className="flex items-center py-2 gap-5">
      <img src={nlwUniteIcon} />

      <nav className="flex gap-5">
        <NavLink active={false} href="eventos">
          Eventos
        </NavLink>
        <NavLink active href="participantes">
          Participantes
        </NavLink>
      </nav>
    </div>
  );
}
