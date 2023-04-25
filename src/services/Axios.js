import { useSelector } from "react-redux";


const dataUser = useSelector((state) => state?.data?.dataUser);

const config = {
    headers: { Authorization: `Bearer ${dataUser.token}` },
  }
  const SERVE_API = import.meta.env.VITE_SERVER_API;

  export const axiosConfig = {config, SERVE_API}