let juank = 0

function boludo () {
  juank++
  if (juank <= 15) {
    return false
  } else {
    juank = 0
    return true
  }
}

module.exports = { boludo }
