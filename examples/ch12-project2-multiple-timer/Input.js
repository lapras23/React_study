const Input = ({ name, value, ...rest }) => {
  // 타이머 생성 버튼을 누르면 INPUT창이 생김
  // AddTimer에서 name은 minutes, seconds, value는 data.minutes, data.seconds, ...rest는 onChange 함수가 넘어옴
  // padStart를 이용해서 '2'만 입력되었을 때 '02'가 되게 표시해줌
  // htmlFor를 이용해서 input과 lable을 연결해줌. input의 id값과 라벨의 htmlFor
  return (
    <li className="part">
      <input
        className="number"
        type="number"
        value={String(value).padStart(2, "0")}
        name={name}
        id={name}
        {...rest}
      />
      <label className="unit" htmlFor={name}>
        {name}
      </label>
    </li>
  );
};

export default Input;
