import jwt from "jsonwebtoken";
export const RequireAuth = (WrappedComponent) => {
    return (
        
        <WrappedComponent  />
        
    )
}

RequireAuth.getInitialProps = async(ctx) => {
    let isAuthenticated;
    const token = ctx.req.headers.cookie?.replace("auth-token=","");

    try {
        isAuthenticated = jwt.verify(token,process.env.SECRET);
    } catch (err) {
        console.log(err);
    }

    if(isAuthenticated?.user) {
        return WrappedComponent.getInitialProps(ctx);
    } else {
        ctx.res.redirect('/')
    }
}