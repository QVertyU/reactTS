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
            autoComplete?: string,
        },
        label: {
            name: string,
        }
    },
}

function SwitchBox({field, form, props}: FieldProps) {
    return (
        <>
            <div className={'flex items-center h-5'}>
                <input
                    {...field}
                    {...props.field}
                    type={'checkbox'}
                    value={''}
                    className={'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'}
                />
            </div>
            <div className={'ms-2 text-sm'}>
                <label htmlFor={field.name} className={'font-medium text-black'}>{props.label.name}</label>
                <p className={'text-red-600 mt-2'}>{form.touched?.[field.name] && form.errors?.[field.name] ? form?.errors?.[field.name] : null}</p>
            </div>

        </>
    );
}

export default SwitchBox;