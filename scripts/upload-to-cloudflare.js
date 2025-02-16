import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import FormData from 'form-data';

const CLOUDFLARE_ACCOUNT_ID = '3bd3665e92625dc3aaedf9dfdbb291f9';
const CLOUDFLARE_STREAM_TOKEN = 'tZo5EcXSMqisFhCqxtwNm3H6i1AZqjs_W6JrsOMz';

const uploadVideo = async (filePath) => {
  const formData = new FormData();
  formData.append('file', fs.createReadStream(filePath));

  console.log(`Uploading ${path.basename(filePath)}...`);
  
  try {
    const response = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/stream`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${CLOUDFLARE_STREAM_TOKEN}`
        },
        body: formData
      }
    );

    const data = await response.json();
    
    if (!data.success) {
      throw new Error(data.errors[0]?.message || 'Upload failed');
    }

    console.log(`Successfully uploaded ${path.basename(filePath)}`);
    console.log(`Video ID: ${data.result.uid}`);
    console.log('---');
    
    return {
      filename: path.basename(filePath),
      videoId: data.result.uid
    };
  } catch (error) {
    console.error(`Failed to upload ${path.basename(filePath)}:`, error);
    return null;
  }
};

const videosDir = path.join(process.cwd(), 'public', 'videos');
const videoFiles = [
  'empire-state-of-mind.mp4',
  'alicia-keys-paris.mp4',
  'afropunk-2015.mp4'
];

(async () => {
  console.log('Starting video uploads to Cloudflare Stream...\n');
  
  const results = [];
  
  for (const filename of videoFiles) {
    const filePath = path.join(videosDir, filename);
    const result = await uploadVideo(filePath);
    if (result) {
      results.push(result);
    }
  }

  console.log('\nUpload Summary:');
  console.log('==============');
  results.forEach(result => {
    console.log(`${result.filename} -> ${result.videoId}`);
  });
})();
