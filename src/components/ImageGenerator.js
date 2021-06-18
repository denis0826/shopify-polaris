import React from 'react';
import { toJpeg } from 'html-to-image';
import { Button } from '@shopify/polaris';

export default function ImageGenerator({ color, qoute }) {
  let fonSizeGenerator;
  if (qoute.length > 80) {
    fonSizeGenerator = 40;
  } else if (qoute.length > 50) {
    fonSizeGenerator = 70;
  } else if (qoute.length > 30) {
    fonSizeGenerator = 90;
  } else if (qoute.length > 20) {
    fonSizeGenerator = 120;
  } else {
    fonSizeGenerator = 140;
  }
  const generateImage = () => {
    toJpeg(document.getElementById('image-node'), { quality: 0.95 }).then(function (dataUrl) {
      var link = document.createElement('a');
      link.download = `my-${qoute}-image.jpeg`;
      link.href = dataUrl;
      link.click();
    });
  };
  return (
    <>
      <div id='image-node' className='imageGenarator' style={{ color: color, height: 500, width: 1000, fontSize: fonSizeGenerator }}>
        <p>{qoute.length > 0 ? qoute : 'your qoute'}</p>
      </div>
      <br />
      <Button onClick={generateImage}>Generate Image</Button>
    </>
  );
}
