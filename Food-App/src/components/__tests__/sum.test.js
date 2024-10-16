import { sum } from "../sum"

test("Description: Sum of two numbers", () =>{
    const resylt = sum(3,4);
    //Assertion (below line is assertion,  my expection will be 7)
    expect(resylt).toBe(7);
})