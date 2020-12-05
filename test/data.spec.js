import { filterStatus, filterGender, filterOrder, filterText } from '../src/data.js';


describe('filterStatus', () => {
  it('is a function', () => {
    expect(typeof filterStatus).toBe('function');
  });
  /*
  it('returns `example`', () => {
    expect(example()).toBe('example');
  }); */
});


describe('filterGender', () => {
  it('is a function', () => {
    expect(typeof filterGender).toBe('function');
  });
  /*
  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  }); */
});


describe('filterOrder', () => {
  it('is a function', () => {
    expect(typeof filterOrder).toBe('function');
  });

});


describe('filterText', () => {
  it('is a function', () => {
    expect(typeof filterText).toBe('function');
  });
  
});

describe('Filtrar Status', () => {
  it('deve retornar o status correspondente ao selecionado', () => {
    const characteresTest = [{"status":"Alive"},{"status":"Dead"}]
    const selectTest = "Alive"
    const result = filterStatus(characteresTest,selectTest )
    expect(result).toEqual([{"status":"Alive"}]);
  });
})

describe('Filtrar Gênero', () => {
  it('deve retornar o gênero correspondente ao selecionado', () => {
    const characteresTest = [{"gender":"Female"},{"gender":"Male"}]
    const selectTest = "Male"
    const result = filterGender(characteresTest,selectTest )
    expect(result).toEqual([{"gender":"Male"}]);
  });
})

describe('Filtrar por ordem', () => {
  it('deve retornar os itens de A a Z', () => {
    const characteresTest = [{"name":"Zeep Xanflorp"},{"name":"Alien Rick"}, {"name":"Morty Smith"}]
    const selectTest = "a-z"
    const result = filterOrder(characteresTest,selectTest)
    expect(result[0]).toEqual({"name":"Alien Rick"});
  });
})

describe('Filtrar por ordem inversa', () => {
  it('deve retornar os itens de Z a A', () => {
    const characteresTest = [{"name":"Alien Rick"}, {"name":"Zeep Xanflorp"}, {"name":"Morty Smith"}]
    const selectTest = "z-a"
    const result = filterOrder(characteresTest,selectTest)
    expect(result[0]).toEqual({"name":"Zeep Xanflorp"});
  });
})

describe('Filtrar usando o input da busca', () => {
  it('deve retornar o nome digitado', () => {
    const characteresTest = [{"name":"Evil Morty"}, {"name":"Zeep Xanflorp"}, {"name":"Morty Smith"}]
    const inputTest = "Morty"
    const result = filterText(characteresTest, inputTest )
    expect(result).toEqual([{"name":"Evil Morty"},{"name":"Morty Smith"}]);
  });
}) 