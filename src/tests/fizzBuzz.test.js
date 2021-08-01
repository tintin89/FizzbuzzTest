import { fizzbuzz } from "../fizzBuzz";



describe('fizzBuzz function tests',()=>{
    
    test('test1, should return the numbers passed in that are not divisible by 3 or 5',()=>{
        expect(fizzbuzz(1)).toBe(1);
        expect(fizzbuzz(2)).toBe(2);
        expect(fizzbuzz(4)).toBe(4);
        expect(fizzbuzz(7)).toBe(7);
        expect(fizzbuzz(8)).toBe(8);
        expect(fizzbuzz(11)).toBe(11);
    });


    test('test2,should return fizz if the the number passed in is divisible by 3',()=>{
       expect(fizzbuzz(3)).toBe("fizz");  
       expect(fizzbuzz(6)).toBe("fizz");
       expect(fizzbuzz(9)).toBe("fizz");
       expect(fizzbuzz(12)).toBe("fizz");
    })
})