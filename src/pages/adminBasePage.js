import React from 'react';
import HeaderHome from '../components/header';
import { Outlet } from 'react-router-dom';

// import { Container } from './styles';

export default function AdminBasePage() {
  return (
      <>
        <HeaderHome />
        <Outlet />
      </>
  );
}
