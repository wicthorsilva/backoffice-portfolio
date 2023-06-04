import React from "react";

import { useNavigate } from "react-router-dom";
// import {Formik, Form} from "formik";
import * as Yup from "yup";

import styles from "./Login.module.css";

import Input from "../../components/forms/Input";
import { User, login as loginService } from "../../services/authService";
import { useAuth } from "../../contexts/AuthContext";
import Form from "../../components/forms/Form";
import Button from "../../components/common/Button";
import Title from "../../components/common/Title";


const Login = () => {

    const navigate = useNavigate();
    const {login} = useAuth();

    const initialValues: User ={
        email:"",
        password:"",
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
           .email("E-mail invalido")
           .required("E-mail obrigatório"),
        password: Yup.string()
           .min(6, "A senha deve ter pelo menos 6 caracteres")
           .required("Senha obrigatória"),
    });

    const onSubmit = async (values: User) => {
        try {
            const user = await loginService(values);
            login(user);
            navigate("/");
            //lógica de login
            console.log(values);
        } catch (error) {
            console.log(error);
            alert("Erro ao realizar login");
        }
    };

    return (
    <div className={styles.loginWrapper}>

        <Form 
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
                {({errors, touched}) => (
                    <>
                      <Title>Wicthor Dev</Title>

                      <Input
                       label="Email"
                       name="email"
                       type="email"
                       errors={errors.email}
                       touched={touched.email}
                      />

                       <Input
                       label="Password"
                       name="password"
                       type="password"
                       errors={errors.password}
                       touched={touched.password}
                      />

                      <Button type="submit">Login</Button>
                      
                    </>
                )}
        </Form>
    </div>
    );
};

export default Login;