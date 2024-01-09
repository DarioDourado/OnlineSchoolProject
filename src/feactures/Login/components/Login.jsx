import React from 'react'
import './login.css'
import '../../../ui/RegForm/components/regForm.css'
import { Formik, Form, Field, ErrorMessage, useFormik, yupToFormErrors, validateYupSchema } from "formik";
import * as Yup from "yup"


export default function Login() {


    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        },

        validationSchema: Yup.object({
            firstName: Yup.string().min(4, "Deverá de ter mais que 4 caracteres").required(),
            lastName: Yup.string().min(4, "Deverá de ter mais que 4 caracteres"),
            email: Yup.string().email().required(),
            password: Yup.string().required(),
            confirmPassword: Yup.string().required()

        }),

        onSubmit: (values) => {
            console.log(values)
        }

    })



    return (
        <section className='container mx-auto flex p-7 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl '>
            <section className=' mx-auto flex flex-col lg:flex-row gap-7'>
                <div className='loginIMG flex justify-center md:visible'>
                    <h1 className='text-center text-4xl mt-5'>Aprender nunca foi tão fácil</h1>
                </div>
                <div className='flex flex-col justify-between'>
                    <div className='flex flex-col h-full justify-evenly'>
                        <h3 className='text-3xl text-center p-7'>Bemvindo á CoolLab</h3>

                        <h3>Faz o teu login para teres acesso á tua conta CoolLab</h3>
                    </div>
                    <fieldset>
                <form className='flex flex-col p-7 gap-4'>
                  
                    <label
                        htmlFor="email"
                        className={formik.errors.email ? 'text-red-500' : 'text-white'}
                    >
                        email
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Digite o seu email (necessário)"
                        className={formik.errors.email ? 'inputFormRegForm outline-red-400' : 'inputFormRegForm outline-green-300'}
                        id="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />

                    <label
                        htmlFor="password"
                        className={formik.errors.password ? 'text-red-500' : 'text-white'}
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Digite a sua password (necessário)"
                        className={formik.errors.password ? 'inputFormRegForm outline-red-400' : 'inputFormRegForm outline-green-300'}
                        id="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />

                    <div className='flex justify-end '>
                        <button
                            type="submit"
                            className='btnSubmit text-xl '
                        >
                            Login
                        </button>
                    </div>
                </form>
            </fieldset>
                </div>

            </section>

        </section>
    )
}
