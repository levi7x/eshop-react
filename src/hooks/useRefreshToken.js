import axios from 'axios';
import jwtDecode from 'jwt-decode';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.post(
            "Auth/refresh",
            {},
            { withCredentials: true });
        const role = jwtDecode(response.data)["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
        const user = jwtDecode(response.data)["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"];
        const roles = [];
        const accessToken = response.data;
        roles.push(role);
        
        setAuth({ user, roles, accessToken });

        return accessToken;
    }
    return refresh;
};

export default useRefreshToken;