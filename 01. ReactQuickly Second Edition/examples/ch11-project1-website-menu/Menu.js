import MenuItem from "./MenuItem";
import { useData } from "./Context";

const Menu = () => {
  const { links } = useData(); // DataProvider에서 받은 값들을 구조분해할당으로 가져옴, 여기선 links만 필요함

  //{title}{...props} 구조 잘 볼 것
  return (
    <nav>
      <ul className="menu">
        {links.map(({ title, ...props }) => (
          <MenuItem key={title} {...props}>
            {title}
          </MenuItem>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
