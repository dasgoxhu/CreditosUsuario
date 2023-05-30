module.exports = (repository) => {
    async function execute(){
        const users = repository.findAll();
        return new Promise((resolve, reject) => {resolve(users)})
    }

    return {execute}
}