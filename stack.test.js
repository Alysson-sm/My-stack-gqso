const stack = require('./stack');

beforeEach(() => {
    s = new stack();
})


test('Testa pilha  vazia na criação',() => {
        expect(s.isEmpty()).toEqual(true);
});

test('Testa pilha nao vazia',() => {
    s.push(5);
    expect(s.isEmpty()).toEqual(false);
});

test('Testa pilha  vazia ao inserir e remover',() => {
    s.push(5);
    s.pop();
    expect(s.isEmpty()).toEqual(true);
});

test('Testa tamanho correto da pilha', () =>{
    s.push (2);
    s.push(10);
    s.push(8);
    expect(s.size()).toBe(3);
});

test('Testa remover elemento de pilha  vazia',() => {
    s.push(5);
    s.pop();
    
    expect(() => {s.pop()}).toThrow();
});

test('Testa se a pilha aceita passar um valor string', () => {
  s.push('alysson')
  expect(s.size()).toBe(1);
 //console.log(s.items);
});

test('Testa se aceita um valor vazio', () => {
  s.push('')
  expect(s.size()).toBe(1);
  //console.log(s.items);
});

test('Testa se aceita um valor negativo', () => {
    s.push(-1);
    expect(s.size()).toBe(1);
  //console.log(s.items);
});

test('Testa inserçao de concatenaçao na pilha', () => {
    s.push('alysson'+1)
    expect(s.size()).toBe(1);
  //console.log(s.items);
});

test('Testa inserçao de concatenaçao de strings vazios na pilha', () => {
    s.push(' '+' ')
    expect(s.size()).toBe(1);
  //console.log(s.items);
})

test('Testa inserçao de valor boleano', () => {
  s.push(3.4);
  expect(s.size()).toBe(1);
  //console.log(s.items[0]);
})

test('Testa a inserçao de multiplos valores', () => {
    s.push(1, 2, 3);
    expect(s.size()).toBe(3);
    //console.log(s.items[0, 1, 2]); <== ao se passar varios valore pro s.push ele e retornado  que ocorreu tudo bem, mas ao verificar os slots do array se percebe que os dois posteriores estao indefinidos, logo o teste falha.(ainda tenho duvida sobre isso pois posso esta errando a sintaxe da linguagem)
})
