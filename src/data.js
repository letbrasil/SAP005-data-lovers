// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/

export const filterStatus = function statusFunc(docData, selectStatus){
  return docData.filter(aliveDead => aliveDead.status === selectStatus.value)
}

export const filterGender = function genderFunc(docData, selectGender){
  return docData.filter(maleFemale => maleFemale.gender === selectGender.value)
}

export const filterOrder = function orderFunc(docData, selectOrder){
  
}

export const filterText = function textFunc(docData, inputText){
  let qlq = inputText.value.toUpperCase()
  console.log(qlq)
  return docData.filter(search => search.name.toUpperCase().startsWith(qlq))
}
