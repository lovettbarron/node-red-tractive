module.exports = function (RED) {
  function TrackerNode(n) {
    RED.nodes.createNode(this, n);
    this.id = n.id;
    this.type = n.type;
    this.version = n.version;
  }
  RED.nodes.registerType("tractive-tracker", TrackerNode);
};
