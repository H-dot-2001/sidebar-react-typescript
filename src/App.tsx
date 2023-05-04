import React from 'react';
import { SideBarMenu } from './components/SideBarMenu';
import { SideBarMenuCard, SideBarMenuItem } from './types/types';
import { FcAdvertising, FcDepartment, FcGlobe } from 'react-icons/fc';
import profileImage from './bill.jpg';

function App() {

  const items: SideBarMenuItem[] = [
    {
      id: "1",
      label: "Aviso",
      icon: FcAdvertising,
      url: "/",
    },
    {
      id: "2",
      label: "Departamento",
      icon: FcDepartment,
      url: "/",
    },
    {
      id: "2",
      label: "Globo",
      icon: FcGlobe,
      url: "/",
    },
  ];

  const card: SideBarMenuCard = 
    {
      id: "1",
      displayName: "Gianluka Gallarday",
      title: "Developer",
      photoUrl: profileImage,
      url: "/",
    };

  return (
    <div >
      <SideBarMenu items={items} card={card}/>
    </div>
  );
}

export default App;
