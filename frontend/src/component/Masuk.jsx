import axios from 'axios';
import { useEffect, useState } from 'react';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/auth.css';

export default function Masuk() {
  const isAuthenticated = useIsAuthenticated();

  const [input, setInput] = useState({});
  const signIn = useSignIn();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      return navigate('/');
    }
  }, [isAuthenticated, navigate]);

  async function handleLogin() {
    try {
      const result = await axios.post('http://localhost:7539/api/auth/login', {
        ...input,
      });

      signIn({
        auth: {
          token: result.data.token,
          type: 'Bearer',
        },
        userState: {
          token: result.data.token,
        },
      });

      if (result.data.isAdmin) {
        return navigate('/admin');
      }

      alert('login berhasil!');
      navigate('/');
    } catch (error) {
      alert('terjadi kesalahan tidak diketahui');
    }
  }
  return (
    <>
      <div className="flex items-center justify-center h-[100vh]">
        <div className="container text-white bg-fifth w-[1024px] flex justify-center rounded-2xl">
          <div className="flex items-center">
            <div className="hidden md:flex-1 md:pe-10 md:block">
              <img
                src="/images/imgmasuk.png"
                alt=""
                className=" rounded-r-[50px] rounded-2xl"
              />
            </div>
            <div className="p-16 md:flex-1 md:pe-11 md:p-0">
              <div className="flex justify-center mb-8 md:hidden md:mb-0">
                <img src="/images/Logo.png" />
              </div>
              <h1 className="font-bold text-white text-center text-4xl md:text-5xl md:text-start">
                <span className="hidden md:block">HALLO PHILE </span>SELAMAT
                DATANG
              </h1>
              <h2 className="text-center md:text-[20px] md:mt-3 md:text-white md:text-start">
                Mempelajari lebih lanjut tentang Seni
              </h2>
              <form
                action=""
                className="text-[14px]"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleLogin();
                }}
              >
                <div className="mt-10">
                  <label htmlFor="email">E-mail</label>
                  <div className="mt-3">
                    <input
                      type="email"
                      className="w-full auth-form px-3 py-1"
                      name="email"
                      onChange={(e) =>
                        setInput({ ...input, [e.target.name]: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label htmlFor="email">Password</label>
                  <div className="mt-3">
                    <input
                      type="password"
                      className="w-full auth-form px-3 py-1"
                      name="password"
                      onChange={(e) =>
                        setInput({ ...input, [e.target.name]: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="mt-5 flex">
                  <div className="flex-1 flex items-center gap-2">
                    <div className="flex-none flex">
                      <input
                        type="checkbox"
                        id="remember"
                        name="remember"
                        className="cursor-pointer h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                    </div>
                    <div className="flex-1 flex">
                      <label htmlFor="remember" className="cursor-pointer">
                        Ingatkan sandi
                      </label>
                    </div>
                  </div>
                  <div className="flex-1 text-end">Lupa Password?</div>
                </div>
                <div className="mt-5 grid justify-center">
                  <button className="w-80 h-12 border-2 bg-transparent text-white font-semibold rounded-md hover:bg-white hover:text-black ease-out duration-200">
                    Masuk
                  </button>
                </div>
                <div className="mt-5 flex justify-center">
                  <div className="w-80 flex">
                    <div className="flex-1 grid items-center">
                      <hr />
                    </div>
                    <div className="px-5">Atau</div>
                    <div className="flex-1 grid items-center">
                      <hr />
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex justify-center">
                  <div className="w-80 flex text-3xl">
                    <div className="flex-1 grid items-center justify-end">
                      <div className="w-10 h-10 border rounded-md flex justify-center items-center bg-white">
                        <FcGoogle />
                      </div>
                    </div>
                    <div className="flex-1 grid items-center justify-center">
                      <div className="w-10 h-10 border rounded-md flex justify-center items-center bg-white">
                        <FaXTwitter className="text-black text-2xl" />
                      </div>
                    </div>
                    <div className="flex-1 grid items-center">
                      <div className="w-10 h-10 border rounded-md flex justify-center items-center bg-white">
                        <FaFacebookF className="text-facebook text-2xl" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex justify-center">
                  Belum memiliki akun?{' '}
                  <Link to={'/daftar'}>&thinsp;Daftar</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
