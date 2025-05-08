
const FormErrorMessage = ({message}) => {
    if (!message) return null
    return <span className="text-red-500 text-xs">{message}</span>
}

export default FormErrorMessage