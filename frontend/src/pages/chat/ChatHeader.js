import React from "react";
import { Avatar, Layout, Row, Dropdown, Menu, Icon, Button } from "antd";
import { useTranslation } from 'react-i18next';
import Text from "antd/lib/typography/Text";

const { Header } = Layout;

function ChatHeader() {
    const {t, i18n} = useTranslation();
    const languageList = {
        en: 'English',
        ru: 'Руский',
        vn: 'Tiếng việt'
    }
    const menu = (
        <Menu>
          <Menu.Item key="0">
            <a href="http://www.alipay.com/">Profile</a>
          </Menu.Item>
          <Menu.Item key="1">
            <a href="http://www.taobao.com/">Settings</a>
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="3">3rd menu item</Menu.Item>
        </Menu>
      );
    
    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.key)
    }

    const languageMenu = (
        <Menu onClick={handleLanguageChange}>
            <Menu.Item key="en">English</Menu.Item>
            <Menu.Item key="ru">Руский</Menu.Item>
            <Menu.Item key="vn">Tiếng việt</Menu.Item>
        </Menu>
    )
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
            <Dropdown overlay={languageMenu} trigger={['click']}>
                <Button>
                    {languageList[i18n.language]} <Icon type="down" />
                </Button>
            </Dropdown>
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
