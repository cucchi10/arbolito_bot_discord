const {
  getClientStore,
  setClientStore,
  getChannelStore,
  setChannelStore,
} = require("../store");

function getClient() {
  return getClientStore();
}
function setClient(newClient) {
  if (!newClient) return;
  setClientStore(newClient);
}

function getChannel() {
  return getChannelStore();
}

function setChannel(newChannel) {
  if (!newChannel) return;
  setChannelStore(newChannel);
}

module.exports = {
  getClient,
  setClient,
  getChannel,
  setChannel,
};
