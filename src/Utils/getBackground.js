async function getBackgroundColor(imageUrl, x, y) {
  try {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageUrl;
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = reject;
    });
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(x, y, 1, 1);
    const [r, g, b] = imageData.data.slice(0, 3);
    const color = `rgb(${r},${g},${b})`;
    return color;
  } catch (error) {
    console.error(error);
    return '#ffffff';
  }
}


export default getBackgroundColor;
