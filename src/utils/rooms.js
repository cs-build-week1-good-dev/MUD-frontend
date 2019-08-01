class GraphNode {
  constructor(room, adjust_id = 0) {
    this.id = room.id - adjust_id;
    this.title = room.title;
    // this.description = room.description;
    this.e_to = room.e_to ? room.e_to - adjust_id : null;
    this.w_to = room.w_to ? room.w_to - adjust_id : null;
    this.n_to = room.n_to ? room.n_to - adjust_id : null;
    this.s_to = room.s_to ? room.s_to - adjust_id : null;
    this.x = room.x_coordinate;
    this.y = room.y_coordinate;
    this.drawn = 0;
  }
}

export function arrayToGraph(arr) {
  //   let sorted = arr.sort((i1, i2) => i1.pk - i2.pk);
  let adjustment = arr[0].id;
  let nodes = arr.map(a => new GraphNode(a, adjustment));
  // Map over the original array and create an array of nodes

  nodes.forEach(node => {
    if (node.n_to !== null) {
      node.n_to = nodes[node.n_to];
    }
    if (node.w_to !== null) {
      node.w_to = nodes[node.w_to];
    }
    if (node.e_to !== null) {
      node.e_to = nodes[node.e_to];
    }
    if (node.s_to !== null) {
      node.s_to = nodes[node.s_to];
    }
  });

  // console.log("Nodes\n", nodes);
  return nodes;
}

export function forEachNode(arr, cb = null) {
  const _cb = node => {
    console.log(`I drew node with title: ${node.title}`);
  };

  cb = cb || _cb;

  console.log({ arr });

  // this generate a random 12 digit hex value
  let key = Math.floor(Math.random() * 281474976710655).toString(16);

  let queue = [arr[0]];
  let count = 0;

  do {
    let node = queue.shift();
    // draw the node,
    count += 1;

    cb(node);
    node.drawn = key;
    // add the nodes neighbors to queue if they haven't been visited
    if (
      node.n_to !== null &&
      node.n_to.drawn !== key &&
      !queue.includes(node.n_to)
    ) {
      queue.push(node.n_to);
    }
    if (
      node.w_to !== null &&
      node.w_to.drawn !== key &&
      !queue.includes(node.w_to)
    ) {
      queue.push(node.w_to);
    }
    if (
      node.e_to !== null &&
      node.e_to.drawn !== key &&
      !queue.includes(node.e_to)
    ) {
      queue.push(node.e_to);
    }
    if (
      node.s_to !== null &&
      node.s_to.drawn !== key &&
      !queue.includes(node.s_to)
    ) {
      queue.push(node.s_to);
    }
  } while (queue.length > 0);

  console.log(count);
}
