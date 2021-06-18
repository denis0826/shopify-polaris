import React from 'react';
import { TextField, FormLayout } from '@shopify/polaris';

export default function Qoute({ qoute, setQoute }) {
  return (
    <FormLayout>
      <TextField label='Your Qoute' maxLength={100} value={qoute} placeholder='your qoute' onChange={setQoute} />
    </FormLayout>
  );
}
