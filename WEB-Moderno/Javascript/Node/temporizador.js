const schedule = required('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 16 * * 0', function() {
    console.log('Executando tarefa1!', new Date().getSeconds())
})

