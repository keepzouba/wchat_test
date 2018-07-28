const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


const changeTime = date => {
  const month = date.getMonth() + 1+"月"
  const day = date.getDate()+"日"
  return [month, day].map(formatNumber).join('')
}

const changeTime_mdw = date => {
  const month = date.getMonth() + 1 + "月"
  const day = date.getDate() + "日"
  const weekday = "星期" + date.getDay()
  return [month, day, weekday].map(formatNumber).join('')
}

module.exports = {
  formatTime: formatTime,
  changeTime: changeTime,
  changeTime_mdw: changeTime_mdw
}
