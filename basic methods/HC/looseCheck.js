var num="2"

if(num==2)
{
  console.log("loose check passed");
}

// Tight check
if(num===2){
  console.log("tight check passed")
} else {
  console.log("gotcha here!")
}
