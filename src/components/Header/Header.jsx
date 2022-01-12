function Header(props){
    console.log('props are', props);

    return(
        <>
        <header>
            <h1>{props.title}</h1>
        </header>
        </>
    )
    
}

export default Header;