import {
  LoginOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthModal } from "../../redux/generic-slices/modals";
import AuthModal from "./modals/auth";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <AuthModal />
      <div className="w-[80%] h-20  m-auto flex items-center justify-between border-b border-[#48A358] ">
        <div className="cursor-pointer">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flogo.svg?alt=media&token=fc9659d6-f435-43b9-a624-8b0d3a574baa"
            alt="logo"
          />
        </div>
        <div className="flex items-center justify-center gap-12">
          <h3
            onClick={() => navigate("/")}
            className="relative cursor-pointer before:w-full before:h-1 before:absolute before:left-0 hover:before:bg-[#46a358] before:bottom-[-28px] before:content-['']"
          >
            Home
          </h3>
          <h3 className="relative cursor-pointer before:w-full before:h-1 before:absolute before:left-0 hover:before:bg-[#46a358] before:bottom-[-28px] before:content-['']">
            Shop
          </h3>
          <h3 className="relative cursor-pointer before:w-full before:h-1 before:absolute before:left-0 hover:before:bg-[#46a358] before:bottom-[-28px] before:content-['']">
            Plant Care
          </h3>
          <h3 className="relative cursor-pointer before:w-full before:h-1 before:absolute before:left-0 hover:before:bg-[#46a358] before:bottom-[-28px] before:content-['']">
            Blogs
          </h3>
        </div>
        <div className="flex gap-[30px] ">
          <SearchOutlined className="cursor-pointer text-[20px]" />
          <ShoppingCartOutlined className="cursor-pointer text-[20px]" />
          <button
            onClick={() => dispatch(setAuthModal())}
            type="button"
            className="w-[100px] h-[35px]  gap-2 flex items-center justify-center text-white rounded-[6px] bg-[#46A358] cursor-pointer"
          >
            <LoginOutlined />
            Login
          </button>
        </div>
      </div>
    </>
  );
};
export default Navbar;
