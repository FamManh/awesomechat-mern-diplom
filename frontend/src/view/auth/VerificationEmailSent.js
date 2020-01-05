import React from "react";
import SuccessWrapper from "./styles/SuccessWrapper";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "antd";

const VerificationEmail = () => {
    const { t } = useTranslation();
    return (
        <SuccessWrapper>
            <div className="exception">
                <div className="imgBlock">
                    <div
                        className="imgEle"
                        style={{
                            backgroundImage: `url(/images/verificationEmail.svg)`
                        }}
                    />
                </div>
                <div className="content">
                    <h1>
                        {t(
                            "Auth.Verification email.We're Sent You a Confirmation Email"
                        )}
                    </h1>
                    <div className="desc">
                        {t("Auth.Verification email.Thank you for registering")}
                    </div>
                    <div className="actions">
                        <Link to="/verify-email">
                            <Button type="primary">
                                {t(
                                    "Auth.Verification email.Resend verification email"
                                )}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </SuccessWrapper>
    );
};

export default VerificationEmail;
