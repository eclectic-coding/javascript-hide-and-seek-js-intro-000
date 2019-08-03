
function getFirstSelector(s){
  return document.querySelector(s)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankby(n) {
  const rankedList = document.querySeelctorAll('.ranked-list')
  
  for (let i = 0, l = rankedList.length; i < 1; i++){
    let child = rankedList[i].child
    
    for (let j = 0, k = child.length;j < k; j++) {
      child[j].innerHTML = parseInt(child[j].innerHTML + n)
    }
}
}