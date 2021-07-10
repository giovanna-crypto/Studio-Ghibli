import { ordenar, anotherExample } from '../src/data.js';


describe('ordenar', () => {
  it('is a function', () => {
    expect(typeof ordenar).toBe('function');
  });

  it('returns `1 si el el primer texto es mayor que el segundo caso contrario retorna -1`', () => {
    let a={}
    let b={} 
    let c={}     
    a.title="castillo"
    b.title="album"
    c.title="zapato"
    expect(ordenar(a,b)).toBe(1);
    expect(ordenar(a,c)).toBe(-1);
    expect(ordenar(c,b)).toBe(1);
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
