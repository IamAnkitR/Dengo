import React from "react";
import { Layout, Badge, Avatar, Button, Space } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import Image from "next/image";

const { Header } = Layout;

const CustomHeader: React.FC = () => {
  return (
    <Header
      style={{
        background: "#fff",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        borderBottom: "1.5px solid #E8E8E8",
        padding: "0 24px",
      }}
    >
      <Space size="middle">
        <Button
          style={{
            backgroundColor: "#F5F5F5",
            borderRadius: "24px",
            padding: "4px 16px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Badge color="#52C41A" style={{ marginRight: "6px" }} />
          <span style={{ fontWeight: 500 }}>Active</span>
        </Button>

        <Button
          style={{
            backgroundColor: "#F5F5F5",
            borderRadius: "24px",
            border: "none",
            display: "flex",
            alignItems: "center",
            padding: "4px 16px",
          }}
          icon={ <Image
            src="/images/image.png"
            alt="Logo"
            width={17}
            height={17}
            priority
          /> }
        >
          <span style={{ fontWeight: 500 }}>Help</span>
        </Button>

        <Avatar
          style={{
            backgroundColor: "#000",
            color: "#fff",
            fontSize: "16px",
          }}
          size="large"
        >
          CV
        </Avatar>
      </Space>
    </Header>
  );
};

export default CustomHeader;
