import React, { useEffect } from 'react'
import Controls from './Controls'
import EntityRelationalDiagram, { defaultContent } from './EntityRelationalDiagram'

export default function Resource() {
  const [content, setContent] = React.useState(defaultContent);


  return (
    <>
        <Controls content={content} setContent={setContent} />
        <EntityRelationalDiagram content={content} setContent={setContent} />
    </>
  )
}
