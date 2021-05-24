export default function DeleteUser(props) {

    const [open, setOpen] = useState(false)
    const [redirect, setRedirect] = useState(false)

    const clickButton = () => {
        setOpen(true)
    }
    const deleteAccount = () => {
    const jwt = auth.isAuthenticated()
        remove({
            userId: props.userId
        }, {t: jwt.token}).then((data) => {
            if (data && data.error) {
                console.log(data.error)
            } else {
                auth.clearJWT(() => console.log('deleted'))
                setRedirect(true)
            }
        })
    }
    const handleRequestClose = () => {
        setOpen(false)
    }

    if (redirect) {
        return <Redirect to='/'/>
    }
}