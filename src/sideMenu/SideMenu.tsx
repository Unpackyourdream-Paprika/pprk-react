import styles from "./SideMenu.module.css";
import MenuItem from "./MenuItem";
import {
  Bone,
  Brain,
  Car,
  Laptop,
  Rocket,
  Shirt,
  Sofa,
  Tablet,
  Utensils,
  Videotape,
  Volleyball,
  WashingMachine,
} from "lucide-react";
import type { ReactNode } from "react";

interface SideMenuProps {
  name: string;
  component?: ReactNode;
}

const menus: SideMenuProps[] = [
  { name: "AI", component: <Brain size={22} strokeWidth={1} /> },
  {
    name: "가전 · TV",
    component: <WashingMachine size={22} strokeWidth={1} />,
  },
  {
    name: "컴퓨터 · 노트북 · 조립PC",
    component: <Laptop size={22} strokeWidth={1} />,
  },
  {
    name: "태블릿 · 모바일 · 디카",
    component: <Tablet size={22} strokeWidth={1} />,
  },
  { name: "녹음기", component: <Videotape size={22} strokeWidth={1} /> },
  {
    name: "스포츠 · 골프",
    component: <Volleyball size={22} strokeWidth={1} />,
  },
  {
    name: "자동차 · 용품 · 공구",
    component: <Car size={22} strokeWidth={1} />,
  },
  { name: "가구 · 조명", component: <Sofa size={22} strokeWidth={1} /> },
  {
    name: "식품 · 유아 · 완구",
    component: <Utensils size={22} strokeWidth={1} />,
  },
  {
    name: "패션 · 잡화 · 뷰티",
    component: <Shirt size={22} strokeWidth={1} />,
  },
  {
    name: "반려동물 · 취미 · 완구",
    component: <Bone size={22} strokeWidth={1} />,
  },
  {
    name: "식품 · 유아 · 완구",
    component: <Rocket size={22} strokeWidth={1} />,
  },
];

function SideMenu() {
  return (
    <div className={styles.sideMenuContainer}>
      <div className={styles.sideMenu}>
        {menus.map((menu) => (
          <MenuItem
            key={menu.name}
            name={menu.name}
            component={menu.component}
          />
        ))}
      </div>
      <div className={styles.mainArea}>
        <div className={styles.topMainArea}>
          <div className={styles.topMainAreaContainerL}>
            <p>hello</p>
          </div>
          <div className={styles.topMainAreaContainerR}>
            <ul>
              <li>
                생활공작소, 가정과 차량용 ‘에어컨 탈취제’ 출시… 99% 이상 탈취
                효과
              </li>
              <li>
                가성비 무선 기계식 키보드 추천 지클릭커 이 가격에 공장윤활까지?
              </li>
              <li>에이텐코리아, 8x4 USB 3.2 공유 스위치 'US3384i' 출시</li>
            </ul>
          </div>
        </div>
        <div className={styles.bottomMainArea}>
          <div className={styles.bottomMainAreaContainerL}>
            <p>hello</p>
          </div>
          <div className={styles.bottomMainAreaContainerR}>
            <p>hello</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;

//·
