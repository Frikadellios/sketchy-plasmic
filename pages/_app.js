
import '../styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import Head from "next/head";
import "bootswatch/dist/sketchy/bootstrap.min.css";
import React from 'react';
import logo from './logo.svg';
import './App.css';

function MyApp({ Component, pageProps }) {
  return (
    <PlasmicRootProvider Head={Head}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}

export default MyApp
  