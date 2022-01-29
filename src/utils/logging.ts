interface Props {
    label: string
    message: string
}

export const log = ({ label, message }: Props) => {
    if (process.env.NODE_ENV === 'development') {
        console.log(`[${label}]: ${message}`)
    }
}
