function eachAllChild(srcNode, callback) {
  callback(srcNode);
  if (srcNode.childrens.length > 0) {
    srcNode.childrens.map(item => {
      eachAllChild(item, callback);
    })
  }
}

export{
  eachAllChild
}
