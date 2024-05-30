const Button = ({ icon, label, ...rest }) => {
  // Timer.js에서 icon, label을 넘겨줌, ...rest는 play와 pause 버튼 이벤트가 들어올 것임
  return (
    <button title={label} className="toggle" {...rest}>
      <img src={`/icons/${icon}.svg`} alt={label} />
    </button>
  );
};

export default Button;
