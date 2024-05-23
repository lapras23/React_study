import { useState, useContext, createContext } from "react";

// Context의 기본값을 객체로 지정해줌
const DataContext = createContext({
  links: [],
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

// 메뉴에 들어갈 항목을 정의
const HOME = { title: "Home", href: "/", icon: "home" };
const SERVICES = { title: "Services", href: "/services", icon: "services" };
const PRICING = { title: "Pricing", href: "/pricing", icon: "pricing" };
const BLOG = { title: "Blog", href: "/blog", icon: "blog" };
const PROFILE = { title: "Profile", href: "/profile", icon: "profile" };

export function DataProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const login = () => setLoggedIn(true); // login을 하면 isLoggedIn 상태를 true로 설정
  const logout = () => setLoggedIn(false); // logout을 하면 isloggedIn 상태를 false로 설정
  const links = [HOME, SERVICES, PRICING, BLOG].concat(
    isLoggedIn ? [PROFILE] : []
  ); // concat 이용해서 로그인 된 상태면 PROFILE을 배열에 추가해줌
  const value = { links, isLoggedIn, login, logout }; // value에 기본값으로 지정해준 links, isLoggedIn, login, logout을 담아줌
  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}

export function useData() {
  return useContext(DataContext);
}
