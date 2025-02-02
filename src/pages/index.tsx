import React from 'react';
import { StateChangeComponent } from '../components/StateChangeComponent';
import { Navigation } from '../components/Navigation';

export default function Page() {
  return <div>
    <h1>Hello, Next.js!</h1>
    <StateChangeComponent />
    <Navigation path="/about" label="About" />
  </div>;
}
