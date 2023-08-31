import React from "react";

export default function Card(props:any) {
    const personas = [
        'https://yt3.googleusercontent.com/7tCfeCWH4arhsTM-4Rz4IxWieQbegzibeXlG-kbytAujdk5dr2K0gBb8NG0Cvk6lB1dPkjyd=s900-c-k-c0x00ffffff-no-rj',
        'https://somoskudasai.com/wp-content/uploads/2023/07/portada_komi-san-86.jpg',
        'https://somoskudasai.com/wp-content/uploads/2023/07/portada_komi-san-86.jpg']
    return (
      <div style={{ width: 600, height: 200, alignItems: 'center', display: 'flex',borderWidth:1,borderRadius:10,borderColor:'#000',borderStyle:'solid',margin:30 }}>
        <div style={{ padding: 30, width: '30%' }}>
          <img src={personas[props.image]} style={{ width: 150, height: 150,borderRadius:100 ,backgroundColor:'#fff',borderColor:'#000',borderStyle:'solid',borderWidth:1}} />
        </div>
        <div style={{ padding: 10, width: '45%',alignItems:'flex-start', justifyContent:'space-evenly',display:'flex',flexDirection:'column' }}>
          <h1 style={{fontSize:30,fontWeight:'bold'}}>Nombre: {props.nombre}</h1>
          <h1 style={{fontSize:30,fontWeight:'bold'}}>Apellido: {props.apellido}</h1>
        </div>
      </div>
    )
  }