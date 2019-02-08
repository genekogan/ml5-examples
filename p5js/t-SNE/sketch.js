// Copyright (c) 2018 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
t-SNE
=== */


function setup() {
  noCanvas();
  do_tsne();
}

function do_tsne() {
  console.log("hello")
  var t = ml5.tSNE()
  console.log("goodbye")
}

