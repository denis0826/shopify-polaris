import React, { useState } from 'react';
import Qoute from './components/Qoute';
import ColorPicker from './components/ColorPicker';
import ImageGenerator from './components/ImageGenerator';
import { Layout, hsbToRgb, rgbString } from '@shopify/polaris';

function App() {
  const [color, setColor] = useState({
    hue: 300,
    brightness: 1,
    saturation: 0.7,
    alpha: 0.7,
  });
  const [qoute, setQoute] = useState('');
  const rgbaColor = rgbString(hsbToRgb(color));
  return (
    <Layout>
      <Layout.Section>
        <Qoute qoute={qoute} setQoute={setQoute} />
      </Layout.Section>
      <Layout.Section>
        <ColorPicker setColor={setColor} color={color} />
      </Layout.Section>
      <Layout.Section>
        <ImageGenerator color={rgbaColor} qoute={qoute} />
      </Layout.Section>
    </Layout>
  );
}

export default App;
