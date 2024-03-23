const tractive = require("tractive");
const mustache = require("mustache");
module.exports = function (RED) {
  function GetTrackerNode(config) {
    RED.nodes.createNode(this, config);

    let node = this;
    this.connect = RED.nodes.getNode(config.connect);
    this.tracker = RED.nodes.getNode(config.documtrackerent);

    node.on("input", async function (msg, send, done) {
      node.log(`Fetching Trackers: ${JSON.stringify(filter)}`);

      tractive(this.connect.username, this.connect.password);

      if (tractive.isAuthenticated()) {
        const tracker = tractive.getTracker(this.tracker.id);
        node.send({ ...msg, payload: tracker });
      } else {
        node.log(`Failure to connect`);
      }
    });
  }
  RED.nodes.registerType("tractive-get-tracker", GetTrackerNode);
};
