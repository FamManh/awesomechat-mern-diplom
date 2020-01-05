import i18next from 'i18next';



const privateRoutes = [
    {
        path: '/',
        exact: true,
        loader: () => import('./chat/ChatPage')
    }
]

const publicRoutes = [
    {
        path: "/signin",
        exact: true,
        loader: () => import("./auth/SigninPage")
    },
    {
        path: "/signup",
        exact: true,
        loader: () => import("./auth/SignupPage")
    },
    {
        path: "/forgot-password",
        exact: true,
        loader: () => import("./auth/ForgotPasswordPage")
    },
    {
        path: "/email-verifivation",
        exact: true,
        loader: () => import("./auth/VerificationEmailSent")
    },
    {
        path: "/verify-email",
        exact: true,
        loader: () => import("./auth/VerifyEmail")
    },
    {
        path: "/email-verified",
        exact: true,
        loader: () => import("./auth/EmailVerified")
    }
];

const errorRoutes = [
    {
        path: "/403",
        loader: () => import("./shared/errors/Error403Page")
    },
    {
        path: "/500",
        loader: () => import("./shared/errors/Error500Page")
    },
    {
        path: "**",
        loader: () => import("./shared/errors/Error404Page")
    }
];

export default {
    privateRoutes,
    publicRoutes,
    errorRoutes
}
