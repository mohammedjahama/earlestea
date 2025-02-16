import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import FormData from 'form-data';

const CLOUDFLARE_ACCOUNT_ID = '3bd3665e92625dc3aaedf9dfdbb291f9';
const CLOUDFLARE_IMAGES_TOKEN = 'YU8dnBY-6gBgzH9G_crs0IoynieYXdL6d8gP-2FS';

const uploadImage = async (filePath) => {
  const formData = new FormData();
  formData.append('file', fs.createReadStream(filePath));

  console.log(`Uploading ${path.basename(filePath)}...`);
  
  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/images/v1`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${CLOUDFLARE_IMAGES_TOKEN}`
        },
        body: formData
      }
    );

    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.errors[0]?.message || 'Upload failed');
    }

    console.log(`Successfully uploaded ${path.basename(filePath)}`);
    console.log(`Image ID: ${data.result.id}`);
    console.log('---');
    
    return {
      filename: path.basename(filePath),
      imageId: data.result.id
    };
  } catch (error) {
    console.error(`Failed to upload ${path.basename(filePath)}:`, error);
    return null;
  }
};

const imageFiles = [
  'alicia-keys-here-album-cover-paola-kudacki.jpeg',
  'alicia2.jpg',
  'thumbnailearlealicia.jpeg',
  'afropunk2015.jpeg',
  'afro1.jpeg',
  'sebastian-earle.jpg'
];

(async () => {
  console.log('Starting image uploads to Cloudflare Images...\n');
  
  const results = [];
  
  for (const filename of imageFiles) {
    const filePath = path.join(process.cwd(), 'public', 'images', filename);
    const result = await uploadImage(filePath);
    if (result) {
      results.push(result);
    }
  }

  console.log('\nUpload Summary:');
  console.log('==============');
  results.forEach(result => {
    console.log(`${result.filename} -> ${result.imageId}`);
  });
})();
