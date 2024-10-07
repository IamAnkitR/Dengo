import React from "react";
import { Layout, Menu } from "antd";
import Image from "next/image";

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const menuItems = [
    { key: "home", label: "Home", icon: "/images/home.png" },
    { key: "program", label: "Program", icon: "/images/Program.png" },
    { key: "people", label: "People", icon: "/images/People.png" },
    { key: "activity", label: "Activity", icon: "/images/Activity.png" },
    { key: "billing", label: "Billing", icon: "/images/Bill.png" },
    { key: "marketplace", label: "Marketplace", icon: "/images/Marketplace.png" },
    { key: "insights", label: "Insights", icon: "/images/insight.png" },
  ];

  return (
    <Sider
      width={264}
      collapsedWidth={80}
      style={{
        background: "#fff",
        transition: "width 0.3s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "64px",
          padding: "0 24px",
          paddingLeft: '45px',
          borderBottom: "1.5px solid #E8E8E8", 
          gap: "10px", 
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: "Boston Angel",
            fontSize: "34px",
            fontWeight: 300,
            lineHeight: "44px",
            color: "#FF554B",
            textAlign: "left",
          }}
        >
          dengo
        </p>

        {/* Logo Image */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            paddingTop: 10
          }}
        >
          <Image
            src="/images/logo_text.png"
            alt="Logo"
            width={90}
            height={21}
            priority
          />
        </div>
      </div>

      {/* Menu Section (With border-right) */}
      <div
        style={{
          borderRight: "1.5px solid #E8E8E8", // Border only for menu section
          height: "100%",
          paddingTop: "40px", // Add spacing between logo and menu
        }}
      >
        <Menu
          defaultSelectedKeys={["people"]}
          mode="inline"
          style={{
            paddingLeft: 20, // Align with content padding
          }}
          // Custom styles to remove border or outline from menu items
          items={menuItems.map((item) => ({
            key: item.key,
            label: (
              <span
                style={{
                  marginLeft: "5px",
                  fontFamily: "Neue Haas Grotesk Display Pro, sans-serif",
                  fontSize: "16px",
                }}
              >
                {item.label}
              </span>
            ),
            icon: (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "24px",
                }}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                />
              </div>
            ),
            style: {
              borderRight: "none", // Remove border from each Menu.Item
              boxShadow: "none", // Remove any shadow or outline
              display: "flex",
              alignItems: "center",
              width: "238px",
              height: "48px",
              padding: "12px 0 12px 18px",
            },
          }))}
        />
      </div>
    </Sider>
  );
};

export default Sidebar;
