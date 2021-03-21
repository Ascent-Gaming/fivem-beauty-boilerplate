import { useCallback, useEffect, useState } from "https://unpkg.com/preact/hooks/dist/hooks.module.js?module"

/**
 * 
 */
const Render = ({ children }) => {
  const [isRendering, setIsRendering] = useState(false)

  const handleRenderMessage = useCallback((e) => {
    if (e.data.show !== undefined) {
      setIsRendering(e.data.show)
    }
  }, [setIsRendering])

  useEffect(() => {
    window.addEventListener('message', handleRenderMessage)
    return () => window.removeEventListener('message', handleRenderMessage)
  }, [handleRenderMessage])

  return isRendering ? children : null
}

export default Render
