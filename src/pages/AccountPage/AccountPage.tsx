import useAuth from "../../auth/useAuth"

export default function AccountPage() {
    const tools = useAuth();
    
    return (

        <div>
            <h1>Account Page</h1>
            <p>User Name: {tools?.user.email}</p>
        </div>
    )
}
