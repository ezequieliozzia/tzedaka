import React from "react";
import styles from "../styles/signInPage.module.css";
import {SignIn} from "@clerk/nextjs";
import {esES} from "@clerk/localizations";
const SignInPage = () => {
    return <div className={styles.flexContainer}>
        <SignIn localization={esES}/>
    </div>;
};

export default SignInPage;