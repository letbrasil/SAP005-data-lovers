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