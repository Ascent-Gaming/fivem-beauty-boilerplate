setImmediate(() => {
  emitNet('helloserver');
});

onNet('helloclient', message => {
  console.log(`The server said: ${message}`);
});

onNet('_boilerplate:showNui', () => {
  console.log('got it')
  SendNuiMessage(JSON.stringify({
    show: true
  }))
})

onNet('_boilerplate:hideNui', () => {
  console.log('got it')
  SendNuiMessage(JSON.stringify({
    show: false
  }))
})
