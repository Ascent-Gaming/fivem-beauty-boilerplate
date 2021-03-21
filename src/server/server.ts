onNet('helloserver', () => {
  const _source = (global as any).source;

  console.log(`Hello from ${_source}`);

  emitNet('helloclient', _source, 'i got your message!');
});

RegisterCommand(
  'showbanner',
  (source, args, raw) => {
    emitNet('_boilerplate:showNui', source)
  },
  false
)

RegisterCommand(
  'hidebanner',
  (source, args, raw) => {
    emitNet('_boilerplate:hideNui', source)
  },
  false
)
