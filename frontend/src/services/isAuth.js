const isAuth = () => {
    return localStorage.getItem("token") !== null;
  };
  
  export const userType = () => {
    return localStorage.getItem("type");
  };
  
  export default isAuth;
  