const units = [
    {
        title: "Length (Meter/Feet)",
        per_first: 3.281,
        units: ["meter", "feet"]
    },
    {
        title: "Volume (Liters/Gallons)",
        per_first: 0.264,
        units: ["liter", "galoon"]
    },
    {
        title: "Mass (Kilograms/Pounds)",
        per_first: 2.204,
        units: ["kilogram", "pound"]
    }
];

const convertedEl = document.querySelector("#block__lower");
const numInput = document.querySelector("#input-el");
const convertBtn = document.querySelector("#convert-btn");

convertBtn.addEventListener("click", function() {
    const inputVal = +numInput.value;
    if (!checkIfNumberIsCorrect(inputVal)) {
        convertedEl.style.display = "none";
        return;
    };
    convertedEl.style.display = "block";
    const generatedHTML = generateDOM(inputVal);
    convertedEl.innerHTML = generatedHTML;
});

function generateDOM(inputVal) {
    let htmlElArray = [];
    units.forEach(unit => {
        const unitHTML = generateHTML(inputVal, unit);
        htmlElArray.push(unitHTML);
    });
    return htmlElArray.join("");
}

function generateHTML(value, object) {
    const one = value === 1;

    const title = `<div class="head-text">${object.title}</div>`;
    const first_result = (value * object.per_first).toFixed(3);
    const second_result = (value * (1 / object.per_first)).toFixed(3);

    const first_text = `${value} ${object.units[0]}${one ? "" : "s"} = ${first_result} ${object.units[1]}${one ? "" : "s"}`;
    const second_text = `${value} ${object.units[1]}${one ? "" : "s"} = ${second_result} ${object.units[0]}${one ? "" : "s"}`;
    const text_result = `<div class="single-text">${first_text} | ${second_text}</div>`;
    return `<div class="generated-element">${title.concat(text_result)}</div>`;
}

function checkIfNumberIsCorrect(number) {
    return number !== 0;
}