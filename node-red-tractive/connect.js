module.exports = function (RED) {
  function ConnectNode(n) {
    RED.nodes.createNode(this, n);
    this.username = n.username;
    this.password = n.password;
  }
  RED.nodes.registerType("tractive-connect", ConnectNode);
};
