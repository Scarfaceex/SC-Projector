RegisterNetEvent('leo-projector:server:project-start')
RegisterNetEvent('leo-projector:server:project-stop')
on('leo-projector:server:project-start', function (event) {
  emitNet('leo-projector:client:project-start', -1, event)
})

on('leo-projector:server:project-stop', function () {
  emitNet('leo-projector:client:project-stop', -1)
})
