import { Greeter } from "../src/greeter";
import { JavaScriptGreeter} from "../src/JavaScriptGreeter";
import { LoudGreeter } from "../src/loudGreeter";

describe("test greeter.ts", function (){
    test("test with 'Hi there'", function(){
        let greeter = new Greeter("Hi there");
        expect(greeter.greet("steve")). toEqual("Hi there, steve!");
    });
    test("test with 'Hi there'", function(){
        let greeter = new Greeter("Hey");
        expect(greeter.greet("person")). toEqual("Hey, person!");
    });
});

describe("test javascriptgreeter", function(){
    test("test with 'Hi there'", function(){
        let greeter = new JavaScriptGreeter("Hi there");
        expect(greeter.greet("steve")). toEqual("console.log(Hi there, steve!)");
    });
    test("test with 'Hi there'", function(){
        let greeter = new JavaScriptGreeter("Hy there");
        expect(greeter.greet("stranger")). toEqual("console.log(Hy there, stranger!)");
    });
});

describe("tests loudGreeter", function () {
    test("without calling addVolume", function(){
        let greeter = new LoudGreeter("Hiya");
        expect(greeter.greet("dude")).toEqual("Hiya, dude!!")
    })
    test("without calling addVolume", function(){
        let greeter = new LoudGreeter("Hiya");
        expect(greeter.greet("dude")).toEqual("Hiya, dude!!")
    });
})