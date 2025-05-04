<script setup>

import { data } from "../datasets/haxleys.js"
import ForceGraph3D from '3d-force-graph';
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer.js';
import { useTemplateRef, onMounted, onBeforeUnmount } from 'vue'

const graph = useTemplateRef('graph')

let data2 =  {
  nodes: [
    { "id": "Томас Генри Хаксли", "group": 1},

    {"id": "Леонард Хаксли", "group": 1},

    {"id": "Олдос Хаксли", "group": 1},
    {"id": "Джулиан Хаксли", "group": 1},
    {"id": "Эндрю Хаксли", "group": 1},

    // {"id": "", "group": 1},
    // { "id": "", "group": 0}
  ],
  links: [
    // { "source": "Джулиан Хаксли", "target": "Олдос Хаксли", "value": 1 }
  ]
}

onMounted(() => {
  const Graph = new ForceGraph3D(graph.value, {
      extraRenderers: [new CSS2DRenderer()]
    })
      .graphData(data)
      .nodeAutoColorBy('group')
      .onNodeDragEnd(node => {
          node.fx = node.x;
          node.fy = node.y;
          node.fz = node.z;
        })
      .nodeThreeObject(node => {
        const nodeEl = document.createElement('div');
        nodeEl.textContent = node.id;
        nodeEl.style.color = node.color;
        nodeEl.className = 'node-label';
        return new CSS2DObject(nodeEl);
      })
      .nodeThreeObjectExtend(true)
    ;
})


</script>

<template>
  Graph Graph Graph
  <div id="graph" ref="graph" class="graph"></div>
</template>

<style scoped>
.graph {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
}

.node-label {
  font-size: 12px;
  padding: 1px 4px;
  border-radius: 4px;
  background-color: rgba(0,0,0,0.5);
  user-select: none;
}
</style>