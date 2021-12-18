import { Greeter } from "../src/greeter";
import { JavaScriptGreeter} from "../src/JavaScriptGreeter";
import { LoudGreeter } from "../src/loudGreeter";
import { HtmlGreeter } from "../src/htmlgreeter";

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
    test("test with 'Hi there' steve", function(){
        let greeter = new JavaScriptGreeter("Hi there");
        expect(greeter.greet("steve")). toEqual("console.log(Hi there, steve!)");
    });
    test("test with 'Hey there' stranger", function(){
        let greeter = new JavaScriptGreeter("Hey there");
        expect(greeter.greet("stranger")). toEqual("console.log(Hey there, stranger!)");
    });
});

describe("tests loudGreeter", function () {
    test("without calling addVolume", function(){
        let greeter = new LoudGreeter("Hiya");
        expect(greeter.greet("dude")).toEqual("Hiya, dude!!")
    })
    test("with calling addVolume", function(){
        let greeter = new LoudGreeter("Hiya");
        greeter.addVolume();
        expect(greeter.greet("dude")).toEqual("Hiya, dude!!!")
    });
    test("calling addVolume 2 times", function(){
        let greeter = new LoudGreeter("Hiya");
        greeter.addVolume();
        greeter.addVolume();
        expect(greeter.greet("dude")).toEqual("Hiya, dude!!!!")
    });
    test("calling addVolume 3 times", function(){
        let greeter = new LoudGreeter("Hiya");
        greeter.addVolume();
        greeter.addVolume();
        greeter.addVolume();
        expect(greeter.greet("dude")).toEqual("Hiya, dude!!!!!")
    });
});

describe("testing HtmlGreeter", function () {
    test("test with Hiya, Steve w/ tags <b>", function(){
        let greeter = new HtmlGreeter("Hiya", "b");
        expect(greeter.greet("Steve")).toEqual("<b>Hiya, Steve!</b>")
    });
    test("test with Hiy, stranger w/ tags <i>", function(){
        let greeter = new HtmlGreeter("Hey", "i");
        expect(greeter.greet("stranger")).toEqual("<i>Hey, stranger!</i>")
    });
    test("test with Hey, stranger w/ default tags", function(){
        let greeter = new HtmlGreeter("Hey");
        expect(greeter.greet("stranger")).toEqual("<h1>Hey, stranger!</h1>")
    });
})