import io from 'socket.io-client';

const socket = io('http://localhost:4000'); // substitua o URL pelo endereço do seu servidor Socket.io

socket.on('connect', () => {
  console.log(`Conexão estabelecida com sucesso!`);
});

const subscribeToOrders = (callback) => {
  socket.on('orders', callback);
};

export { subscribeToOrders , socket};