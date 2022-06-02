function add2Numbers(a,b){
  console.log(arguments)
}

add2Numbers(2,3,5)

var arrowfn = (a,b) => {
  console.log(arguments)
}

arrowfn(2,3,4)
