import React from "react";
import { Avatar, Layout, Row, Dropdown, Menu } from "antd";

import Text from "antd/lib/typography/Text";

const { Header } = Layout;

function ChatHeader() {
    const menu = (
        <Menu>
          <Menu.Item key="0">
            <a href="http://www.alipay.com/">1st menu item</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a href="http://www.taobao.com/">2nd menu item</a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
      );
    return (
        <Header
            style={{
                display: "flex",
                alignItems: "center",
                padding: "0.3rem 2rem",
                zIndex: "1",
                boxShadow:
                    "0 2px 2px rgba(0, 0, 0, 0.02), 0 1px 0 rgba(0, 0, 0, 0.02)",
                height: "auto",
                lineHeight: "auto",
                color: "#fff",
                backgroundColor: "#494ca2"
            }}
        >
            <Text style={{ fontSize: "20px", color: "#fff" }}>
                AWESOME CHAT
            </Text>
            <span className="mr-auto" />
            <Dropdown overlay={menu} trigger={['click']}>
                <Row type="flex" align="middle" style={{cursor: "poiter"}}>
                    <Avatar
                        shape="circle"
                        size={40}
                        src="/static/images/avatar.jpg"
                    />
                    <span className="ml-3" style={{ lineHeight: "1" }}>
                        <span style={{ display: "block" }}>Pham Manh</span>
                    </span>
                </Row>
            </Dropdown>
        </Header>
    );
}

export default ChatHeader;
