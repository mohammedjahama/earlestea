export const cloudflareConfig = {
  accountId: '3bd3665e92625dc3aaedf9dfdbb291f9',
  r2: {
    accessKeyId: '649af859e2b748f948a349add00c3f43',
    secretKey: '9a1ee5b8574ef65fcf2b99d7b17d1418a3b4b52783ee7301cdf83c7cf708f178',
    bucketName: 'theark-media',
    publicUrl: 'https://3bd3665e92625dc3aaedf9dfdbb291f9.r2.cloudflarestorage.com'
  },
  stream: {
    token: 'tZo5EcXSMqisFhCqxtwNm3H6i1AZqjs_W6JrsOMz',
    deliveryUrl: 'https://customer-m033z5x00ks6nunl.cloudflarestream.com'
  },
  images: {
    token: 'YU8dnBY-6gBgzH9G_crs0IoynieYXdL6d8gP-2FS',
    deliveryUrl: 'https://imagedelivery.net/J5_Cwb5ZWttmHHenUCO3ZA'
  }
} as const
