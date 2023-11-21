
import './regForm.css'

import * as Yup from "yup"


export default function RegForm() {



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

    console.log(formik.values)

    return (
        <section className='flex flex-auto flex-col items-center justify-between gap-5 container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl mb-10'>
            <h1 className='text-center'>Registe-se e conheça já todas as <span>vantagens</span> que temos para si.</h1>

            <section>
            </section>
            <fieldset>
                <legend className='text-center text-3xl mt-6'>Criar Conta</legend>


                <form className='flex flex-col p-7 gap-4'>
                    <label
                        htmlFor="firstName"
                        className={formik.errors.firstName ? 'text-red-500' : 'text-white'}
                    >
                        Nome
                    </label>

                    <input
                        type="text"
                        placeholder="Digite o seu nome (necessário)"
                        className={formik.errors.firstName ? 'inputFormRegForm outline-red-400' : 'inputFormRegForm outline-green-300'}
                        id="firstName"
                        name="firstName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstName}
                    />

                    <label
                        htmlFor="lastName"
                        className={formik.errors.lastName ? 'text-red-500' : 'text-white'}
                    >
                    </label>
                    Sobrenosme
                    <input
                        type="text"
                        placeholder="Digite o seu ssobrenome"
                        className={formik.errors.lastName ? 'inputFormRegForm outline-red-400' : 'inputFormRegForm outline-green-300'}
                        id="lastName"
                        name="lastName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}
                    />

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

                    <label
                        htmlFor="confirmPassword"
                        className={formik.errors.confirmPassword ? 'text-red-500' : 'text-white'}
                    >
                    </label>
                    Confirmação Password
                    <input
                        type="password"
                        placeholder="Confirme a sua password (necessário)"
                        className={formik.errors.confirmPassword ? 'inputFormRegForm outline-red-400' : 'inputFormRegForm outline-green-300'}
                        id="confirmPassword"
                        name="confirmPassword"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                    />

                    <div className='flex justify-end '>
                        <button
                            type="submit"
                            className='btnSubmit text-xl '
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </fieldset>

        </section>
    )
}
