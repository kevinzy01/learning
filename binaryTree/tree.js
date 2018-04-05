// var nodes;

function Node (data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

// left tree
var root = new Node (10);
var n1 = new Node (4);
var n2 = new Node (6);
var n3 = new Node (30);

// setup children
n1.right = n3;
root.left = n1;
root.right = n2

// right tree
var root_r = new Node (26);
var n1_r = new Node (10);
var n2_r = new Node (3);
var n3_r = new Node (4);
var n4_r = new Node (6);
var n5_r = new Node (30);
var n6_r = new Node (3);

// right tree children
root_r.right = n2_r;
root_r.left = n1_r;
n1_r.right = n4_r;
n1_r.left = n3_r;
n2_r.right = n6_r;
n3_r.right = n5_r;

// in-order traversal array format
function in_order(root, nodes) {
  if (root && root.left) {
    in_order(root.left, nodes);
  }
  nodes.push(root.data);
  if (root && root.right) {
    in_order(root.right, nodes)
  }
  return nodes;
}

// pre-order traversal array format
function pre_order(root, nodes) {
  nodes.push(root.data);
  if (root && root.left) {
    pre_order(root.left, nodes)
  }
  if (root && root.right) {
    pre_order(root.right, nodes)
  }
  return nodes;
}

// function that, given two root nodes, checks if the first
// tree is a subtree of the second
function is_subtree(root, root_r) {
  // vars will hold values:
  // 4 - 30 - 10 - 6
  // 4 - 30 - 10 - 6 - 26 - 3 - 3
  var inord1 = in_order(root, []).join("-");
  var inord2 = in_order(root_r, []).join("-");

  // 10 - 4 - 30 - 6
  // 26 - 10 - 4 - 30 - 6 - 3 - 3
  var preord1 = pre_order(root, []). join("-")
  var preord2 = pre_order(root_r, []). join("-")

   // check if tree1 is containde in tree2
   return inord2.indexOf(inord1) !== -1 && preord2.indexOf(preord1) !== -1;
};

console.log( is_subtree(root, root_r));
