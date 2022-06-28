function outer (greeting, msg = "It's a fine day to learn") {
    const innerFunction = function (name, lang = "Python") {
        return `${greeting}, ${name}! ${msg} ${lang}`;
    };
    return innerFunction;
}

console.log(outer("Hello")("student", "JavaScript"));