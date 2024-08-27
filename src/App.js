import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Feed from "./components/Feed";
import Profile from "./components/Profile";
import Search from "./components/Search";
import Heatmap from "./components/Heatmap";
import logo from "./images/white-transparent-logo.png"

import { Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;

const itemsforLoggedIn = [
  {
    label: <Link to="/heatmap">Heatmap</Link>,
    key: "heatmap",
  },
  {
    label: <Link to="/feed">পোস্ট</Link>,
    key: "post",
  },
  {
    label: <Link to="/search">সার্চ</Link>,
    key: "search",
  },
];

const items = [
  {
    label: <Link to="/heatmap">Heatmap</Link>,
    key: "heatmap",
  },
  {
    label: <Link to="/search">সার্চ</Link>,
    key: "search",
  },
];

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    setToken(getToken);
  }, [token]);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Router>
      <Layout>
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            padding: "20px 16px",
          }}
        >
          <Link to="/feed">
            {/* <h1 style={{ color: "#fff" }}>There4You</h1> */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: '300px',
              // width: '100vh',
              height: '100vh',
            }}>
              <img src={logo} alt="logo"
                style={{
                  width: "10%",
                  height: "auto",
                }}
              />
            </div>
          </Link>


          <Menu
            theme="dark"
            mode="horizontal"
            items={token ? itemsforLoggedIn : items}
            style={{
              flex: 1,
              justifyContent: "flex-end",
              minWidth: 0,
            }}
          />
        </Header>

        <Content
          style={{
            padding: "48px 16px 0 16px",
            minHeight: "calc(100vh - 130.4px)",
            width: "100%",
            maxWidth: "920px",
            marginInline: "auto",
          }}
        >
          <div
            style={{
              background: colorBgContainer,
              minHeight: 280,
              padding: 16,
              borderRadius: borderRadiusLG,
            }}
          >
            <div>
              <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/search" element={<Search />} />
                <Route path="/heatmap" element={<Heatmap />} />
              </Routes>
            </div>
          </div>
        </Content>

        <Footer
          style={{
            textAlign: "center",
          }}
        >
          <p style={{
            fontWeight: '800',
            marginBottom: '2%'
          }}>There4You</p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <p style={{
              width: '50%',
            }}>দেশের উদ্ভুত দুর্যোগ পরিস্থিতিতে ক্ষতিগ্রস্তদের সহায়তা কার্যক্রমকে সুসংগঠিত করার জন্য রিফ্লেকটিভ টিনস এর একটি উদ্যোগ। রিফ্লেকটিভ টিনস মূলত পিছিয়ে পড়া শিক্ষা প্রতিষ্ঠানের গুনগত মান উন্নয়নে কাজ করে।
            </p>
          </div>
        </Footer>
      </Layout>
    </Router >
  );
}

export default App;
