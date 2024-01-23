interface FieldProps {
    field: {
        name: string,
        className?: string,
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
        field: {
            autoComplete: string,
        },
        label: {
            name: string,
        }
    },
}

function TextArea({field, props}: FieldProps) {
    return(
        <>
            <label htmlFor={field.name} className={'block text-sm font-semibold leading-6 text-gray-900'}>
                {props.label.name}
            </label>
            <div className={'mt-2.5'}>
                <textarea
                    {...field}
                    {...props.field}
                    className={'block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'}
                />
            </div>
        </>
    );
}

export default TextArea;