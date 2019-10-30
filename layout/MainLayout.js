import Link from 'next/link'


const MainLayout = (props) => {

    return (
        <div className="container">
            <div className = 'topbar'>
                <div className = 'logoContainer'>
                    <Link href="/">
                        <a className = 'link'>STOCK</a>
                    </Link>
                </div>
                <div className = 'menuContainer'>
                    <div>
                        <Link href="/Product">
                            <a className = 'link'>Product</a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/Manage">
                            <a className = 'link'>Manage</a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/Profile">
                            <a className = 'link'>Profile</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className = "content">
                {props.children}
            </div>  

            <style jsx>
                {`
                    .topbar{
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        height: 60px;
                        background-color: white;
                        padding: 0px 40px;
                        box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px;
                        
                    }
                    
                    .menuContainer{
                        display: flex;
                        // justify-content: space-between;
                    }

                    .menuContainer div {
                        margin-left: 30px;
                        // justify-content: space-between;
                    }

                    .link {
                        text-decoration: none;
                        color: black;
                    }
                `}
            </style>
            <style jsx global>
                {`
                    @font-face {
                        font-family: Ubuntu;
                        src: url(/static/fonts/Ubuntu-Regular.ttf);
                        font-weight: 400;
                    }

                    body {
                        margin: 0px;
                        font-family: 'Ubuntu'
                    }
                `}
            </style>
        </div>
    )
}

export default  MainLayout