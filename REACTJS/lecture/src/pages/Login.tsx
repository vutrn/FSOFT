import axios from "axios";
import { Field, Form, Formik } from "formik";
import { memo, useContext, useRef, useState, type Dispatch, type SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

interface Props {
  isLogin: boolean;
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const BASE_API = "https://node-express-conduit.appspot.com/api";

const Login = ({ isLogin, setIsLogin }: Props) => {
  const { setUser } = useContext(AuthContext);

  const [error, setError] = useState<any>({});
  const nav = useNavigate();

  const handleSubmit = async (values: { email: string; password: string }) => {
    const { email, password } = values;
    try {
      const res = await axios.post(`${BASE_API}/users/login`, {
        user: {
          email: email,
          password: password,
        },
      });
      localStorage.setItem("token", res.data.user.token);
      setUser(res?.data?.user)
      setIsLogin(true);
      // nav("/users");
    } catch (error: any) {
      console.log(error?.response ? error.response.data : error.response?.data?.errors);
      setError(error?.response ? error.response.data : error.response?.data?.errors);
      setIsLogin(false);
    }
  };

  const inputUsername = useRef<HTMLInputElement>(null);
  const inputPassword = useRef<HTMLInputElement>(null);

  return (
    <>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handleSubmit(values)}
      >
        <Form>
          <Field className='border mb-3' name='email' type='text' />
          <br />
          <Field className='border mb-3' name='password' type='password' />
          <br />
          <button className='cursor-pointer border p-3 bg-cyan-600' type='submit'>
            Login
          </button>
          {/* <p>{error ? <p>{error?.message}</p> : <p>{error.errors}</p>}</p> */}
          {isLogin ? (
            <p className='text-green-500'>Correct</p>
          ) : (
            <p className='text-red-500'>WRONG</p>
          )}
        </Form>
      </Formik>
    </>
  );
};

export default memo(Login);
