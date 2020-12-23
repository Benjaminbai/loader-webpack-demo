module.exports = function (code) {
    code = code.replace(/log/g, 'console.log')
    console.log(44444, code)
    let error = null
    this.callback(error, code)
}  