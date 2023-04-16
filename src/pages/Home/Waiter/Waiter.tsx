import { io } from 'socket.io-client';
import React, { useEffect, useState } from 'react';
import { User } from 'src/store';
import { Section } from 'src/components/Page/Page';



export const Waiter = (params:any) => {
  const socket = io('http://localhost:4000');
  const [ num , setNum] = useState(0)

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Conexão estabelecida com sucesso!');
      socket.on("msg", (data) => {
        console.log(data);
        setNum(data.length)
      })
    });
    
  }, [])
  

  return (
    <Section>
      sadasdsad
    </Section>
  )
}
