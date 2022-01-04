import React, { useEffect } from "react";
import { googleSignIn, authUser, googleLogOut } from "../../store/usersAction";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Menu, Button, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
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
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">All Projects</Menu.Item>
          <Menu.Item key="2">All Tasks</Menu.Item>

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

          <Menu.Item key="4">
            {userAuth ? <Image preview={false} src={`${userDetails[0].photoURL}`} /> : ""}
          </Menu.Item>

          <Menu.Item key="5">
            {userAuth ? (
              <Button
                type="primary"
                shape="round"
                onClick={googleSignOut}
                icon={<UserOutlined />}
              >
                Logout
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
