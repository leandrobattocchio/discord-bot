let juank = 0

function boludo () {
  if (juank <= 15) {
    juank++
    return false
  } else {
    juank = 0
    return true
  }
}

module.exports = boludo
