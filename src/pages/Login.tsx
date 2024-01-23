import {useDispatch, useSelector} from "react-redux";
import {RootState, AppDispatch} from "../state/store.ts";
import {authUser} from "../state/auth/authSlice.ts";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {Formik, Form, Field} from "formik";
import Input from "../components/Form/Input.tsx";
import {object, string} from "yup";

interface Data {
    email: string,
    password: string,
}

export default function Login() {
    const isUserAuth = useSelector((state: RootState) => state.auth.authorized);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    useEffect(() => {
        if (isUserAuth) {
            navigate('/')
        }
    });

    const onSubmit = (values: Data) => {
        dispatch(authUser(values));
    }

    const loginSchema = object({
        email: string()
            .email('This is not an email')
            .required('This field is required'),
        password: string()
            .min(8, 'Password is too short')
            .max(16, 'Password is too long')
            .required('This field is required'),
    });

    return (
        <>
            <div className={'flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'}>
                <div className={'sm:mx-auto sm:w-full sm:max-w-sm'}>
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className={'mt-10 sm:mx-auto sm:w-full sm:max-w-sm'}>
                    <Formik
                        initialValues={{email: '', password: ''}}
                        validationSchema={loginSchema}
                        onSubmit={values => onSubmit(values)}
                    >

                        <Form className="space-y-6">
                            <div>
                                <Field
                                    component={Input}
                                    name={'email'}
                                    props={{
                                        field: {
                                            type: 'email',
                                            autoComplete: 'email',
                                        },
                                        label: {
                                            name: 'Email address',
                                        },
                                    }}
                                />
                            </div>

                            <div>
                                <Field
                                    component={Input}
                                    name={'password'}
                                    props={{
                                        field: {
                                            type: 'password',
                                            autoComplete: 'password',
                                        },
                                        label: {
                                            name: 'Password',
                                        },
                                    }}
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className={'flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'}
                                >
                                    Sign in
                                </button>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>

        </>
    );
}
