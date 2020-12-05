export const filterStatus = function statusFunc(docData, selectStatus){
  return docData.filter(aliveDead => aliveDead.status === selectStatus.value)
}

export const filterGender = function genderFunc(docData, selectGender){
  return docData.filter(maleFemale => maleFemale.gender === selectGender.value)
}

export const filterOrder = function orderFunc(docData, selectOrder){
  if(selectOrder.value === "a-z"){
    return docData.sort((a, b) => (a.name).localeCompare(b.name))
  }
  if(selectOrder.value === "z-a"){
    return docData.sort((a, b) => (b.name).localeCompare(a.name))
  }
}

export const filterText = function textFunc(docData, inputText){
  const typing = inputText.value.toUpperCase()
  if (!typing){
    return []
  } else {
    return docData.filter(search => search.name.toUpperCase().includes(typing))
  }
}
