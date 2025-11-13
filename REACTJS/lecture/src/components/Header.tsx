import { memo, type Dispatch } from "react";
import type { TodoItem } from "../App";

interface Props {
  toggle: boolean;
  setToggle: Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ toggle, setToggle }: Props) => {
  console.log("header");
  // console.log(list);
  return (
    <>
      <div>Header</div>
      <button onClick={() => setToggle(!toggle)}>toggle</button>
    </>
  );
};

export default memo(Header);

// memo function re-render only if props or state change
