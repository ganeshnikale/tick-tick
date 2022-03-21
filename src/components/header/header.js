import React, { useEffect } from "react";
import { googleSignIn, authUser, googleLogOut } from "../../store/usersAction";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Menu, Button, Image,Avatar, Row, Col,Dropdown } from "antd";
import { UserOutlined,LogoutOutlined } from "@ant-design/icons";
import './header.scss';
import {
  signGoogle,
  auth,
  provider,
  googleSignOut,
} from "../../utils/firebase";

const { Header } = Layout;




const HeaderNav = () => {
  const dispatch = useDispatch();
  const userAuth = useSelector((state) => state.users.userAuthenticated);

  const userDetails = useSelector((state) => state.users.googleuserDetails);

  console.log(userDetails);

  auth.onAuthStateChanged((UserImpl) => {
    console.log(UserImpl);
    if (UserImpl) {
      dispatch(googleSignIn(UserImpl.providerData));
      dispatch(authUser(true));
    }

    if (UserImpl === null) {
      dispatch(googleLogOut("[{uid:0}]"));
      dispatch(authUser(false));
    }
  });

  

  return (
    <Layout>
      <Header>
      
      <Menu theme="" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="3">
            {!userAuth ? (
              <Button
                type="primary"
                shape="round"
                onClick={signGoogle}
                icon={<UserOutlined />}
              >
                Login
              </Button>
            ) : (
              ""
            )}
          </Menu.Item>

          <Menu.Item key="4">
            {userAuth ? `${userDetails[0].displayName}` : ""}
          </Menu.Item>

          <Menu.Item key="7">

            {userAuth ? <Avatar src={<Image preview={false} src={`${userDetails[0].photoURL}`} style={{ width: 32,}}/> } /> : ""}
          </Menu.Item>

          <Menu.Item key="6">
            {userAuth ? (
              <Button
                type="primary"
                shape="circle"
                onClick={googleSignOut}
                danger
                icon={<LogoutOutlined />}
              >
              </Button>
            ) : (
              ""
            )}
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
};

export default HeaderNav;
