function eachAllChild(srcNode, callback) {
  callback(srcNode);
  if (srcNode.childrens.length > 0) {
    srcNode.childrens.map(item => {
      console.log(item.name,item.childrens.length)
      eachAllChild(item, callback);
    })
  }
}

export{
  eachAllChild
}
