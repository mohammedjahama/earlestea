type ImageVariant = 'public' | 'thumbnail' | 'preview' | 'full'

const imageVariants: Record<ImageVariant, string> = {
  public: 'public',
  thumbnail: 'thumbnail',
  preview: 'preview',
  full: 'full'
}

export const getCloudflareImageUrl = (imageId: string, variant: ImageVariant = 'public') => {
  // Using direct delivery URL without token
  return `${process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_DELIVERY_URL}/${imageId}/${imageVariants[variant]}`
}

export const getCloudflareVideoUrl = (videoId: string) => {
  return `${process.env.NEXT_PUBLIC_CLOUDFLARE_STREAM_DELIVERY_URL}/${videoId}/manifest/video.m3u8`
}

export const getCloudflareVideoThumbnail = (videoId: string) => {
  return `${process.env.NEXT_PUBLIC_CLOUDFLARE_STREAM_DELIVERY_URL}/${videoId}/thumbnails/thumbnail.jpg`
}

export const getCloudflareR2Url = (path: string) => {
  return `${process.env.NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_URL}/${path}`
}

// Function to get a signed URL for uploading images
export const getSignedUploadUrl = async () => {
  const response = await fetch('https://api.cloudflare.com/client/v4/accounts/' + 
    process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_ID + '/images/v2/direct_upload', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_TOKEN}`,
      'Content-Type': 'application/json'
    }
  })

  const data = await response.json()
  if (!data.success) {
    throw new Error('Failed to get signed URL')
  }

  return {
    uploadUrl: data.result.uploadURL,
    id: data.result.id
  }
}
