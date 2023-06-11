let client;
let channel;

function getClientStore() {
  return client ?? null;
}
function setClientStore(newClient) {
  if (!newClient) return;
  client = newClient;
}

function getChannelStore() {
  return channel ?? null;
}

function setChannelStore(newChannel) {
  if (!newChannel) return;
  channel = newChannel;
}

module.exports = {
  getClientStore,
  setClientStore,
  getChannelStore,
  setChannelStore,
};
