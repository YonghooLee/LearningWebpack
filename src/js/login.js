import '../css/login.css'
import '../css/login.less'


function login(){
  const oH2 = document.createElement('h2')
  oH2.innerHTML = '拉勾教育前端'
  oH2.className = 'title'
  return oH2
}

document.body.appendChild(login())