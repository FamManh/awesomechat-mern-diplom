import React from "react";
import ChatPage from "./components/chat/ChatPage";
import {useTranslation} from 'react-i18next'

function App() {
    const {t, i18n} = useTranslation();
    return (
        <>
            <ChatPage/>
        </>
    );
}

export default App;
