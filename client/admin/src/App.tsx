import "./App.css";
import {useEffect,useState} from 'react';
import { getUserById } from '../src/services/uServices';

import CardList from "./components/CardList";
function App() {

  const [dataL, setDataL] = useState([]) 
  useEffect(() => {
    const getUser = async () => {
        const data  = await getUserById(1);
        console.log("🚀 ~ file: App.tsx:12 ~ getUser ~ data:", data.data)
        setDataL(data.data);
    }
    getUser();
  }, []);
  const personas = [
    {name: 'Benito', apellido: 'Camelo', foto: 'https://yt3.googleusercontent.com/7tCfeCWH4arhsTM-4Rz4IxWieQbegzibeXlG-kbytAujdk5dr2K0gBb8NG0Cvk6lB1dPkjyd=s900-c-k-c0x00ffffff-no-rj'},
    {name: 'Monica', apellido: 'Galindo', foto: 'https://somoskudasai.com/wp-content/uploads/2023/07/portada_komi-san-86.jpg'},
    {name: 'Monica', apellido: 'Galindo', foto: 'https://somoskudasai.com/wp-content/uploads/2023/07/portada_komi-san-86.jpg'},]

  return (
    <>
    <CardList
    personas={dataL}/>
    </>
  );
}

export default App;
