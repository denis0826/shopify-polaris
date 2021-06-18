import React from 'react';
import { ColorPicker } from '@shopify/polaris';

export default function ColorPickerTransparent({ color, setColor }) {
  return <ColorPicker onChange={setColor} color={color} allowAlpha />;
}
