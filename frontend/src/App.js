import React from "react";
import ChatPage from "./pages/chat/ChatPage";
import {useTranslation} from 'react-i18next';

function App() {
    const {t} = useTranslation();
    return (
        <>
            {/* {t("Auth.Already have an account? Sign in", {
                framework: "sdasdfasdf"
            })} */}
            <ChatPage />
        </>
    );
}

export default App;
