module.exports = function (RED) {
  function TrackerNode(n) {
    RED.nodes.createNode(this, n);
    this.docid = n.docid;
    this.name = n.name;
  }
  RED.nodes.registerType("tractive-tracker", TrackerNode);
};
