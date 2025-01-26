'use client'

import React, { useEffect } from 'react'

interface InstagramEmbedProps {
  /** The URL of the Instagram post (e.g., "https://www.instagram.com/p/POST_ID/") */
  url: string
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ url }) => {
  useEffect(() => {
    // Ensure we only run in the browser (window is defined)
    if (typeof window !== 'undefined') {
      // Dynamically create & append the Instagram embed script
      const script = document.createElement('script')
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      document.body.appendChild(script)

      // remove script when component unmounts
      return () => {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <blockquote
      className="instagram-media dark:bg-black"
      data-instgrm-permalink={url}
      data-instgrm-version="12"
      style={{
        margin: '1rem auto',
        maxWidth: '540px',
        width: '80%',
      }}
    />
  )
}

export default InstagramEmbed
