import {useState} from 'react';
import {Formik, Form, Field, FormikHelpers,} from "formik";
import Input from '../components/Form/Input.tsx';
import TextArea from '../components/Form/TextArea.tsx';
import {object, string, boolean} from "yup";
import SwitchBox from '../components/Form/SwitchBox.tsx';
import axios from "axios";
import {Loader} from "../components/Loader";

interface messageProps {
    firstName: string,
    lastName: string,
    email: string,
    message: string,
    userAgreement: boolean,
}

const messageSchema = object({
    firstName: string()
        .required('This field is required'),
    lastName: string()
        .required('This field is required'),
    email: string()
        .email('This is not an email')
        .required('This field is required'),
    userAgreement: boolean()
        .test({
            name: 'isTrue',
            message: 'You must agree to terms',
            test: value => value === true
        })
        .required()
});

export default function Contact() {
    const [Loading, setLoading] = useState(false);
    const [ResponseStatus, setResponseStatus] = useState<string>('Send');

    const onSubmit = async ({firstName, lastName, userAgreement, message, email}: messageProps, {resetForm}: FormikHelpers<messageProps>) => {
        setLoading(true);

        await axios.post('http://generaluseapi.local/contact', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            message: message,
            userAgreement: userAgreement,
        })
            .then(() => {
                setResponseStatus('Success');
                setLoading(false);
                resetForm();
            })
    }

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
            >
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
            </div>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: '',
                    userAgreement: false,
                }}
                onSubmit={
                    (values, resetForm: FormikHelpers<messageProps>) => onSubmit(values, resetForm)
                }
                validationSchema={messageSchema}
            >
                <Form className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                        <div>
                            <Field
                                component={Input}
                                name={'firstName'}
                                props={{
                                    field: {
                                        type: 'text',
                                        autoComplete: 'First Name',
                                    },
                                    label: {
                                        name: 'First Name',
                                    },
                                }}
                            />
                        </div>
                        <div>
                            <Field
                                component={Input}
                                name={'lastName'}
                                props={{
                                    field: {
                                        type: 'text',
                                        autoComplete: 'Last Name',
                                    },
                                    label: {
                                        name: 'Last Name',
                                    },
                                }}
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <Field
                                component={Input}
                                name={'email'}
                                props={{
                                    field: {
                                        type: 'email',
                                        autoComplete: 'email',
                                    },
                                    label: {
                                        name: 'Email',
                                    },
                                }}
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <Field
                                component={TextArea}
                                name={'message'}
                                props={{
                                    field: {
                                        rows: '4',
                                    },
                                    label: {
                                        name: 'Message',
                                    },
                                }}
                            />
                        </div>
                        <div className={'flex'}>
                            <Field
                                component={SwitchBox}
                                name={'userAgreement'}
                                props={{
                                    field: {},
                                    label: {
                                        name: 'User Agreement',
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className="mt-10">
                        <button
                            type="submit"
                            disabled={Loading}
                            className="flex justify-center w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            {Loading ? <Loader fill={'white'}/> : ResponseStatus}
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}