import { memo, useRef, type Dispatch, type FormEvent, type SetStateAction } from "react";
import data from "../data/data.json";

interface Props {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setIsLogin }: Props) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    data.find((value) => {
      if (
        value.name === inputUsername.current?.value &&
        value.password === inputPassword.current?.value
      ) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
  };

  const inputUsername = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);

  return (
    <>
      <form action=''>
        <input className='border mb-3' ref={inputUsername} type='text' />
        <br />
        <input className='border mb-3' ref={inputPassword} type='text' />
        <br />
        <button className='cursor-pointer border p-3 bg-cyan-600' onClick={handleSubmit}>
          Login
        </button>
      </form>
    </>
  );
};

export default memo(Login);
