import React from "react";
import { Button, Form, Input, message, Row, Typography } from "antd";
import { Eye, HelpCircle, Mail, Triangle, User } from "react-feather";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import actions from "../../modules/auth/authAction";
import { useDispatch } from "react-redux";
import selectors from "../../modules/auth/authSelector";
import { useSelector } from "react-redux"; 

const {Text} = Typography;
const FormItem = Form.Item;

const Content = styled.div`
    max-width: 400px;
    z-index: 2;
    min-width: 300px;
`;

const Signup = ({ form }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const doSubmit = ({ firstname, lastname, email, password }) => {
        console.log(firstname, lastname, email, password);
        dispatch(actions.doSignup(firstname, lastname, email, password));
    };

    return (
        <Row
            type="flex"
            align="middle"
            justify="center"
            className="px-3 bg-white"
            style={{ minHeight: "100vh" }}
        >
            <Content>
                <div className="text-center mb-5">
                    <Link to="/signup">
                        <a className="brand mr-0">
                            <Triangle size={32} strokeWidth={1} />
                        </a>
                    </Link>
                    <h5 className="mb-0 mt-3">{t("Auth.Sign up")}</h5>

                    <p className="text-muted">{t("Auth.Create an account")}</p>
                </div>

                {/* Display errors  */}
                <div className="mb-3">
                    <Text type="danger">
                        {useSelector(selectors.selectErrorMessage)}
                    </Text>
                </div>

                <Form
                    layout="vertical"
                    onSubmit={e => {
                        e.preventDefault();
                        form.validateFields((err, values) => {
                            if (!err) {
                                doSubmit(values);
                            }
                        });
                    }}
                >
                    <Form.Item style={{ marginBottom: 0 }}>
                        <FormItem
                            style={{
                                display: "inline-block",
                                width: "calc(50% - 12px)"
                            }}
                            label={t("User.First Name")}
                        >
                            {form.getFieldDecorator("firstname", {
                                rules: [
                                    {
                                        required: true,
                                        message: t(
                                            "Auth.Validations.Pleases input your first name"
                                        ),
                                        whitespace: true
                                    }
                                ]
                            })(
                                <Input
                                    prefix={
                                        <User
                                            size={16}
                                            strokeWidth={1}
                                            style={{ color: "rgba(0,0,0,.25)" }}
                                        />
                                    }
                                    placeholder={t("User.First Name")}
                                />
                            )}
                        </FormItem>
                        <span
                            style={{
                                display: "inline-block",
                                width: "24px",
                                textAlign: "center"
                            }}
                        ></span>
                        <FormItem
                            style={{
                                display: "inline-block",
                                width: "calc(50% - 12px)"
                            }}
                            label={t("User.Last Name")}
                        >
                            {form.getFieldDecorator("lastname", {
                                rules: [
                                    {
                                        required: true,
                                        message: t(
                                            "Auth.Validations.Pleases input your last name"
                                        ),
                                        whitespace: true
                                    }
                                ]
                            })(
                                <Input
                                    prefix={
                                        <User
                                            size={16}
                                            strokeWidth={1}
                                            style={{ color: "rgba(0,0,0,.25)" }}
                                        />
                                    }
                                    placeholder={t("User.Last Name")}
                                />
                            )}
                        </FormItem>
                    </Form.Item>
                    <FormItem label={t("User.Email")}>
                        {form.getFieldDecorator("email", {
                            rules: [
                                {
                                    type: "email",
                                    message: t(
                                        "Auth.Validations.The input is not valid E-mail"
                                    )
                                },
                                {
                                    required: true,
                                    message: t(
                                        "Auth.Validations.Please input your E-mail"
                                    )
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Mail
                                        size={16}
                                        strokeWidth={1}
                                        style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                }
                                type="email"
                                placeholder={t("User.Email")}
                            />
                        )}
                    </FormItem>

                    <FormItem label={t("User.Password")}>
                        {form.getFieldDecorator("password", {
                            rules: [
                                {
                                    required: true,
                                    message: t(
                                        "Auth.Validations.Please input your Password"
                                    )
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Eye
                                        size={16}
                                        strokeWidth={1}
                                        style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                }
                                type="password"
                                placeholder={t("User.Password")}
                            />
                        )}
                    </FormItem>

                    <FormItem label={t("User.Confirm password")}>
                        {form.getFieldDecorator("confirm", {
                            rules: [
                                {
                                    required: true,
                                    message: t(
                                        "Auth.Validations.Please confirm your password"
                                    )
                                },
                                {
                                    validator: (rule, value, callback) => {
                                        if (
                                            value &&
                                            value !==
                                                form.getFieldValue("password")
                                        ) {
                                            callback(
                                                t(
                                                    "Auth.Validations.Passwords don't match"
                                                )
                                            );
                                        } else {
                                            callback();
                                        }
                                    }
                                }
                            ]
                        })(
                            <Input
                                prefix={
                                    <Eye
                                        size={16}
                                        strokeWidth={1}
                                        style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                }
                                type="password"
                                placeholder={t("User.Confirm password")}
                            />
                        )}
                    </FormItem>

                    <FormItem>
                        <Button type="primary" htmlType="submit" block>
                            {t("Auth.Sign up")}
                        </Button>
                    </FormItem>

                    <div className="text-center">
                        <small className="text-muted">
                            <span>{t("Auth.Already have an account?")}</span>{" "}
                            <Link to="/signin">
                                <a>&nbsp;{t("Auth.Login Now")}</a>
                            </Link>
                        </small>
                    </div>
                </Form>
            </Content>
        </Row>
    );
};

export default Form.create()(Signup);
