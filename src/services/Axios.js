import { useSelector } from "react-redux";


const dataUser = useSelector((state) => state?.data?.dataUser);

const config = {
    headers: { Authorization: `Bearer ${dataUser.token}` },
  }

  const SERVE_API = 'http://localhost:4000/'

  export const axiosConfig = {config, SERVE_API}