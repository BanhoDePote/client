import io from 'socket.io-client';

  const SERVE_API = import.meta.env.VITE_SERVER_API;

const socket = io(SERVE_API); // substitua o URL pelo endereço do seu servidor Socket.io

socket.on('connect', () => {
  console.log(`Conexão estabelecida com sucesso!`);
});

const subscribeToOrders = (callback) => {
  socket.on('orders', callback);
};

export { subscribeToOrders , socket};