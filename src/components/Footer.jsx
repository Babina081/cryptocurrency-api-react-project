import { Space, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Typography.Title
        level={3}
        style={{ color: "white", textAlign: "center" }}
      >
        Cryptoverse © {new Date().getFullYear()}{" "}
        <Link to="/">Cryptoverse Inc.</Link> <br />
        All Right Reserved
      </Typography.Title>
      <Space>
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/news">News</Link>
      </Space>
    </div>
  );
};

export default Footer;
