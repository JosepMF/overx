import Navigation from "../Navigation";

export default function Layout(props: any) {
    return (
        <>
            <Navigation/>
            {props.children}
        </>
    )
}
