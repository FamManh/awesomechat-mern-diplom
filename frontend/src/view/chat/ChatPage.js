import React from "react";
import {Layout } from "antd";

import ChatSidebar from "./ChatSidebar";
import ChatHeader from "./ChatHeader";
import ChatContent from "./ChatContent";

export default function ChatPage() {
    return (
        <Layout style={{ height: "100vh", backgroundColor: "#fff" }}>
            <ChatHeader/>
            <Layout className="fill-workspace rounded shadow-sm overflow-hidden">
                <ChatSidebar />
                <ChatContent/>
            </Layout>
        </Layout>
    );
}
