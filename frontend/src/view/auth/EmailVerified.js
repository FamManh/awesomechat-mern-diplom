import React from "react";
import SuccessWrapper from "./styles/SuccessWrapper";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "antd";

const EmailVerified = () => {
    const { t } = useTranslation();
    return (
        <SuccessWrapper>
            <div className="exception">
                <div className="imgBlock">
                    <div
                        className="imgEle"
                        style={{
                            backgroundImage: `url(/images/email.svg)`
                        }}
                    />
                </div>
                <div className="content">
                    <h1>{t("Auth.Email verified.Successful")}</h1>
                    <div className="desc">
                        {t("Auth.Email verified.Message")}
                    </div>
                    <div className="actions">
                        <Link to="/signin">
                            <Button type="primary">
                                {t("Auth.Login Now")}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </SuccessWrapper>
    );
};

export default EmailVerified;
