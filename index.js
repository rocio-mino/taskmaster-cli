const { readTasks } = required('./tasks');
const [,, cmd] = process.argv;

if (!cmd) {
    console.log('TakMaster CLI - usa: node index.js <comando>')
}