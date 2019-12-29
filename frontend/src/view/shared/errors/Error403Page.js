import React from 'react';
import ErrorWrapper from './styles/ErrorWrapper';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';

const Error403Page = () => {
    const {t} = useTranslation();
    return (
    <ErrorWrapper>
        <div className="exception">
            <div className="imgBlock">
                <div
                    className="imgEle"
                    style={{
                        backgroundImage: `url(/images/403.svg)`
                    }}
                />
            </div>
            <div className="content">
                <h1>403</h1>
                <div className="desc">{t("errors.403")}</div>
                <div className="actions">
                    <Link to="/">
                        <Button type="primary">
                            {t("errors.Back to home")}
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    </ErrorWrapper>
)};

export default Error403Page;
