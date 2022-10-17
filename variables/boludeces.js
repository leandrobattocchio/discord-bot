let juank = 0

function boludo () {
  juank++
  if (juank <= 15) {
    console.log(juank)
    return false
  } else {
    juank = 0
    console.log(`${juank} paso`)
    return true
  }
}

module.exports = { boludo }
