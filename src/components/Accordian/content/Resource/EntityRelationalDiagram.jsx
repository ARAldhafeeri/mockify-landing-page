import React, { useEffect } from 'react';
import createEngine, {
  DefaultLinkModel,
  DefaultNodeModel,
  DiagramModel,
} from '@projectstorm/react-diagrams';

import {
  CanvasWidget,
  NodeWidget
} from '@projectstorm/react-canvas-core';



// Helper function to create a node (entity)
export const createNode = (name, x, y) => {
  let node =  new DefaultNodeModel({
    name,
    color: '#00df9a',
  });

  node.setPosition(x, y);
  return node;
}


// Helper function to create a link (relationship)
export const createLink = (sourceNode, targetNode, label) => {
  let sourcePort = sourceNode?.addOutPort("out");
  let targetPort = targetNode?.addOutPort("in");
  let link = sourcePort.link(targetPort);
  link.addLabel(label);
  link.setColor('#00df9a');
  // change hover color
  link.options.color = '#00df9a';
  return link;
}

let node1 = createNode('Author', 100, 100);
let node2 = createNode('Book', 300, 100);
export const defaultContent = [
  node1,
  node2,
  createLink(node1, node2, 'Wrote'),
];

const engine = createEngine();
var diagramModel = new DiagramModel();

export default function EntityRelationalDiagram({content}) {

  diagramModel.addAll(...content);
  engine.setModel(diagramModel);

  useEffect(() => {
    engine.repaintCanvas();
  }, [content, engine]);
    
  return (
      <CanvasWidget engine={engine} className='diagram-container' />
  );
  
}
