'use client'

import { useEffect, useRef } from 'react'
import Hls from 'hls.js'
import { getCloudflareVideoUrl, getCloudflareVideoThumbnail } from '@/lib/cloudflare'

interface VideoPlayerProps {
  videoId: string
  className?: string
  autoPlay?: boolean
  muted?: boolean
  loop?: boolean
  controls?: boolean
  useLocalVideo?: boolean
}

export const VideoPlayer = ({
  videoId,
  className = '',
  autoPlay = false,
  muted = false,
  loop = false,
  controls = true,
  useLocalVideo = false
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (useLocalVideo) {
      video.src = `/videos/${videoId}.mp4`
      if (autoPlay) {
        video.play().catch(console.error)
      }
      return
    }

    const videoUrl = getCloudflareVideoUrl(videoId)
    const posterUrl = getCloudflareVideoThumbnail(videoId)
    video.poster = posterUrl

    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(videoUrl)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        if (autoPlay) {
          video.play().catch(console.error)
        }
      })

      return () => {
        hls.destroy()
      }
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // For Safari
      video.src = videoUrl
      if (autoPlay) {
        video.play().catch(console.error)
      }
    }
  }, [videoId, autoPlay, useLocalVideo])

  return (
    <video
      ref={videoRef}
      className={className}
      muted={muted}
      loop={loop}
      controls={controls}
      playsInline
    />
  )
}
