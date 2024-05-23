const MenuItem = ({ href, icon, children }) => {
  const iconSrc = `/icons/${icon}.svg`; // icons 폴더가 index.html과 같은 경로에 있으므로 이렇게 상대경로로 해주면 됨
  return (
    <li>
      <a href={href} className="menu-link">
        <img src={iconSrc} width="16" alt="" />
        {children}
      </a>
    </li>
  );
};

export default MenuItem;
