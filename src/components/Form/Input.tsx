interface FieldProps {
    field: {
        name: string,
        type: string,
    },
    form: {
        errors: {
            [index: string]: string
        },
        touched: {
            [index: string]: string
        },
    },
    props: {
        labelname: string,
        autoComplete: string,
    },
}

function Input({field, form, props}: FieldProps) {
    return (
        <>
            <label htmlFor={`${field.name}`}
                   className="block text-sm font-medium leading-6 text-gray-900">
                {props.labelname}
            </label>
            <div className="mt-2">
                <input
                    {...field}
                    {...props}
                    className={'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'}
                />
                <p className={'text-red-600'}>
                    {form.touched?.[field.name] && form.errors?.[field.name] ? form?.errors?.[field.name] : null}
                </p>
            </div>
        </>
    );
}

export default Input;