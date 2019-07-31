class GraphNode {
  constructor(obj) {
    let room = obj.fields;

    this.id = obj.pk;
    this.title = room.title;
    this.description = room.description;
    this.e_to = room.e_to || null;
    this.w_to = room.w_to || null;
    this.n_to = room.n_to || null;
    this.s_to = room.s_to || null;
    this.drawn = false;
  }
}

export function arrayToGraph(arr) {
  let sorted = arr.sort((i1, i2) => i1.pk - i2.pk);
  let nodes = sorted.map(a => new GraphNode(a));
  // Map over the original array and create an array of nodes

  nodes.forEach(node => {
    if (node.n_to !== null) {
      node.n_to = nodes[node.n_to - 1];
    }
    if (node.w_to !== null) {
      node.w_to = nodes[node.w_to - 1];
    }
    if (node.e_to !== null) {
      node.e_to = nodes[node.e_to - 1];
    }
    if (node.s_to !== null) {
      node.s_to = nodes[node.s_to - 1];
    }
  });

  return nodes;
}

export function forEachNode(arr, cb = null) {
  const _cb = node => {
    console.log(`I drew node with title: ${node.title}`);
  };

  cb = cb || _cb;

  let queue = [arr[0]];

  while (queue.length > 0) {
    let node = queue.shift();
    // draw the node,

    cb(node);
    node.drawn = true;
    // add the nodes neighbors to queue if they haven't been visited
    if (node.n_to !== null && node.n_to.drawn === false) {
      queue.push(node.n_to);
    }
    if (node.w_to !== null && node.w_to.drawn === false) {
      queue.push(node.w_to);
    }
    if (node.e_to !== null && node.e_to.drawn === false) {
      queue.push(node.e_to);
    }
    if (node.s_to !== null && node.s_to.drawn === false) {
      queue.push(node.s_to);
    }
  }
}
